/**
 * Google Apps Script bound directly to Google Sheet:
 * "Portfolio website" (ID: 1sA0atQ1xMFB7crYMjahwvpseFmTiAcFn3JB1xUM313g)
 * 
 * Instructions:
 * 1. In your Google Sheet, click 'Extensions' > 'Apps Script'.
 * 2. Delete all existing code in the editor.
 * 3. Copy & paste this entire code block into the editor.
 * 4. Click 'Save' (Ctrl + S).
 * 5. In the toolbar, select function 'setupSheet' and click 'Run' once.
 *    (This will automatically name the sheet 'Inquiries' and add styled header columns).
 * 6. Click 'Deploy' > 'New deployment'.
 *    - Click the Gear icon > select 'Web app'.
 *    - Description: Vignesh Portfolio Contact API
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone (IMPORTANT: Select 'Anyone')
 * 7. Click 'Deploy' and authorize access.
 * 8. Copy the Web App URL (ends with /exec) and paste it here if different.
 */

const NOTIFICATION_EMAIL = "vignesh.ramamoorthi07@gmail.com";
const SHEET_ID = "1sA0atQ1xMFB7crYMjahwvpseFmTiAcFn3JB1xUM313g";

// Run this once inside the Apps Script editor to set up header columns nicely!
function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName("Inquiries");
  if (!sheet) {
    sheet = ss.getActiveSheet();
    sheet.setName("Inquiries");
  }

  const headers = ["Timestamp", "Full Name", "Email Address", "Subject", "Message", "Status"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Style header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#0d0d12");
  headerRange.setFontColor("#ff3344");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  
  // Auto resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.setColumnWidth(i, i === 5 ? 350 : 180);
  }
}

// Handles form submission from the portfolio website
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10s for concurrent submissions

  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName("Inquiries") || ss.getActiveSheet();

    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    const timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const subject = data.subject || "No Subject";
    const message = data.message || "No Message";

    // Insert row into Google Sheet
    sheet.appendRow([timestamp, name, email, subject, message, "New Inquiry"]);

    // Send instant email notification to Vignesh
    try {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `[Portfolio Website] ${subject} from ${name}`,
        body: `Hello Vignesh,\n\nYou received a new message from your Developer Portfolio website!\n\n` +
              `👤 Name: ${name}\n` +
              `📧 Email: ${email}\n` +
              `📌 Subject: ${subject}\n\n` +
              `💬 Message:\n${message}\n\n` +
              `⏰ Submitted at: ${timestamp} (IST)\n` +
              `📊 View in Sheet: https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`
      });
    } catch (mailErr) {
      Logger.log("Email notification note: " + mailErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Inquiry saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "connected",
      sheet: "Portfolio website",
      owner: "Vignesh"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

