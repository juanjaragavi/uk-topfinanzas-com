#!/usr/bin/env node

/**
 * Google Sheets Diagnostic Script
 *
 * This script helps diagnose Google Sheets API issues by:
 * 1. Testing authentication
 * 2. Checking sheet access
 * 3. Verifying sheet structure
 * 4. Testing write permissions
 *
 * Usage: node scripts/diagnose-sheets.js
 */

const { google } = require("googleapis");
require("dotenv").config({ path: ".env.local" });

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "uk-topfinanzas-com";

async function diagnoseSheets() {
  console.log("==============================================");
  console.log("🔍 Google Sheets API Diagnostic");
  console.log("==============================================\n");

  // Step 1: Check environment variables
  console.log("Step 1: Checking environment variables...");
  const hasEmail = !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const hasKey = !!process.env.GOOGLE_PRIVATE_KEY;
  const hasSheetId = !!process.env.GOOGLE_SHEET_ID;

  console.log(
    `  GOOGLE_SERVICE_ACCOUNT_EMAIL: ${hasEmail ? "✅ Set" : "❌ Missing"}`,
  );
  console.log(`  GOOGLE_PRIVATE_KEY: ${hasKey ? "✅ Set" : "❌ Missing"}`);
  console.log(`  GOOGLE_SHEET_ID: ${hasSheetId ? "✅ Set" : "❌ Missing"}`);

  if (!hasEmail || !hasKey || !hasSheetId) {
    console.log("\n❌ Missing required environment variables!");
    process.exit(1);
  }

  console.log(`\n  Sheet ID: ${SHEET_ID}`);
  console.log(`  Sheet Name: ${SHEET_NAME}`);

  // Step 2: Test authentication
  console.log("\nStep 2: Testing authentication...");

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    console.log("  ✅ Authentication successful");
  } catch (error) {
    console.log("  ❌ Authentication failed:", error.message);
    process.exit(1);
  }

  // Step 3: Test sheet access
  console.log("\nStep 3: Testing sheet access...");

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });

    console.log("  ✅ Successfully accessed spreadsheet");
    console.log(`  Title: ${spreadsheet.data.properties?.title}`);
    console.log(`  Sheets found: ${spreadsheet.data.sheets?.length}`);

    // Step 4: Check if our sheet exists
    console.log('\nStep 4: Checking for sheet "uk-topfinanzas-com"...');

    const sheetExists = spreadsheet.data.sheets?.some(
      (s) => s.properties?.title === SHEET_NAME,
    );

    if (sheetExists) {
      console.log(`  ✅ Sheet "${SHEET_NAME}" exists`);
    } else {
      console.log(`  ⚠️  Sheet "${SHEET_NAME}" NOT found`);
      console.log("\n  Available sheets:");
      spreadsheet.data.sheets?.forEach((sheet) => {
        console.log(`    - ${sheet.properties?.title}`);
      });
      console.log("\n  The API will create it on first write.");
    }

    // Step 5: Test reading data
    console.log("\nStep 5: Testing read access...");

    const range = sheetExists
      ? `${SHEET_NAME}!A:J`
      : `${spreadsheet.data.sheets?.[0]?.properties?.title}!A:A`;

    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: range,
      });

      const rows = response.data.values?.length || 0;
      console.log(`  ✅ Successfully read data`);
      console.log(`  Rows found: ${rows}`);

      if (rows > 0) {
        console.log(
          `  First row: ${JSON.stringify(response.data.values?.[0])}`,
        );
      }
    } catch (error) {
      console.log(`  ❌ Read failed: ${error.message}`);
    }

    // Step 6: Test write access
    console.log("\nStep 6: Testing write access...");

    try {
      const testData = [
        [
          "Test Timestamp",
          "Test Preference",
          "Test Income",
          "test@example.com",
          "Test User",
          "",
          "",
          "",
          "",
          "",
        ],
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: SHEET_NAME,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values: testData,
        },
      });

      console.log("  ✅ Successfully wrote test data");
      console.log("  ⚠️  Note: A test row was added to your sheet");
    } catch (error) {
      console.log(`  ❌ Write failed: ${error.message}`);

      if (error.message.includes("Permission denied")) {
        console.log("\n  🔧 Fix: Share the Google Sheet with:");
        console.log(`     ${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL}`);
        console.log('     Give "Editor" permissions');
      }
    }
  } catch (error) {
    console.log(`  ❌ Failed to access spreadsheet: ${error.message}`);

    if (error.message.includes("not found")) {
      console.log("\n  🔧 Possible fixes:");
      console.log("     1. Verify GOOGLE_SHEET_ID is correct");
      console.log("     2. Check if the spreadsheet was deleted");
      console.log(
        "     3. Ensure the sheet is shared with the service account",
      );
    }

    if (error.message.includes("Permission denied")) {
      console.log("\n  🔧 Fix: Share the Google Sheet with:");
      console.log(`     ${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL}`);
      console.log('     Give "Editor" permissions');
    }

    process.exit(1);
  }

  console.log("\n==============================================");
  console.log("✅ Diagnostics Complete");
  console.log("==============================================");
}

diagnoseSheets().catch((error) => {
  console.error("\n❌ Fatal error:", error.message);
  console.error(error.stack);
  process.exit(1);
});
