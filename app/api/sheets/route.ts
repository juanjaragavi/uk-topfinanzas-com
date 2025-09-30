import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const emailInput =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailInput) {
      return NextResponse.json(
        {
          error: "Email is required to upsert quiz registration",
        },
        { status: 400 },
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = "uk-topfinanzas-com";

    // Ensure the sheet exists, create it if it doesn't
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetExists = spreadsheet.data.sheets?.some(
      (s) => s.properties?.title === sheetName,
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{ addSheet: { properties: { title: sheetName } } }],
        },
      });
    }

    const headers = [
      "Timestamp",
      "Preference",
      "Income",
      "Email",
      "First Name",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
      "UTM Term",
      "UTM Content",
    ];

    const sheetRange = `${sheetName}!A:J`;
    const existingValuesResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: sheetRange,
      majorDimension: "ROWS",
    });

    let sheetValues = existingValuesResponse.data.values ?? [];

    if (sheetValues.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });

      sheetValues = [headers];
    }

    const emailColumnIndex = headers.indexOf("Email");
    const headerCell = sheetValues[0]?.[emailColumnIndex];
    const sheetHasHeader =
      typeof headerCell === "string" &&
      headerCell.trim().toLowerCase() === "email";

    const rowValues = [
      new Date().toISOString(),
      body.preferenceText ?? "",
      body.incomeText ?? "",
      body.email ?? "",
      body.firstName ?? "",
      body.utm_source ?? "",
      body.utm_medium ?? "",
      body.utm_campaign ?? "",
      body.utm_term ?? "",
      body.utm_content ?? "",
    ];

    const dataStartIndex = sheetHasHeader ? 1 : 0;
    let existingRowIndex = -1;

    for (let i = dataStartIndex; i < sheetValues.length; i += 1) {
      const rowEmail = sheetValues[i]?.[emailColumnIndex];
      if (
        typeof rowEmail === "string" &&
        rowEmail.trim().toLowerCase() === emailInput
      ) {
        existingRowIndex = i;
        break;
      }
    }

    if (existingRowIndex !== -1) {
      return NextResponse.json(
        {
          message: "Registration already exists",
          action: "duplicate",
        },
        { status: 409 },
      );
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues],
      },
    });

    return NextResponse.json(
      {
        message: "Registration created",
        action: "created",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding data to sheet:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to add data to sheet", details: errorMessage },
      { status: 500 },
    );
  }
}
