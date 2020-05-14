


/*
* A spreadsheet ID can be extracted from its URL. For example, the spreadsheet
* ID in the URL https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0
* will be "abc1234567".
*/
const SPREADSHEET_ID = ""; // Google Spreadsheet ID

// opens a google spreadsheet and returns the first sheet
function getSheet() {

  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetId(0);
}

// send email service api of Gmail
function sendEmail(email) {

  return MailApp.sendEmail({
    to: email,
    subject: '',
    htmlBody: ''
  });
}

// runs the script
function runScript() {

var range = getSheet().getDataRange();
var values = range.getValues();

  for(var i = 0;i<values.length;i++) {
    sendEmail(values[i]+"");
  }
}
