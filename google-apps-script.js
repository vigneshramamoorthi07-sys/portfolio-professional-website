/**
 * Google Apps Script for Vignesh's Developer Portfolio Contact Form
 * 
 * Instructions:
 * 1. Open your Google Sheet where you want responses saved.
 * 2. Go to Extensions > Apps Script (or open your Apps Script project).
 * 3. Delete any default code in Code.gs and replace with all the code below.
 * 4. Click 'Save' (Ctrl+S or disk icon).
 * 5. Run 'initialSetup()' once from the run bar to format your sheet headers automatically.
 * 6. Click 'Deploy' > 'New deployment'.
 *    - Select type: Web app
 *    - Description: Portfolio Contact Webhook
 *    - Execute as: Me
 *    - Who has access: Anyone (IMPORTANT!)
 * 7. Click Deploy, Authorize access, and copy the Web App URL (ends in /exec).
 */

const TO_EMAIL = "vignesh.ramamoorthi07@gmail.com"; // Your email to receive notifications

function initialSetup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.setName("Portfolio Inquiries");
  
  // Set clean headers
  const headers = ["Timestamp", "Full Name", "Email Address", "Subject", "Message", "Status"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#121217");
  headerRange.setFontColor("#ff3344");
  
  sheet.setFrozenRows(1);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write collisions

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse incoming JSON data or form-url-encoded data
    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    const timestamp = new Date();
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const subject = data.subject || "No Subject";
    const message = data.message || "No Message";

    // Append to Google Sheet
    sheet.appendRow([timestamp, name, email, subject, message, "New"]);

    // Optional: Send instant email notification to Vignesh
    try {
      MailApp.sendEmail({
        to: TO_EMAIL,
        subject: `[Portfolio Inquiry] ${subject} from ${name}`,
        body: `You received a new inquiry from your portfolio website!\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Subject: ${subject}\n\n` +
              `Message:\n${message}\n\n` +
              `Received At: ${timestamp.toString()}`
      });
    } catch (mailError) {
      Logger.log("Mail send warning: " + mailError.toString());
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
    .createTextOutput(JSON.stringify({ status: "alive", message: "Vignesh Portfolio Contact Webhook is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}

