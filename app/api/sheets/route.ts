import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
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

    // Get the last row of the sheet to append data
    const range = `${sheetName}!A:A`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const numRows = response.data.values ? response.data.values.length : 0;
    const appendRow = numRows + 1;

    // Define headers if the sheet is empty
    if (numRows === 0) {
      const headers = [
        [
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
        ],
      ];
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: headers,
        },
      });
    }

    // Append form data
    const values = [
      [
        new Date().toISOString(),
        body.preferenceText,
        body.incomeText,
        body.email,
        body.firstName,
        body.utm_source || "",
        body.utm_medium || "",
        body.utm_campaign || "",
        body.utm_term || "",
        body.utm_content || "",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A${appendRow}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ message: "Data added to sheet" });
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
