function postAnnouncement() {
  //post an assignment
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('assignment')
  const courseId = sheet.getRange('B1').getValue();
  var assignment ={
    description: sheet.getRange('B3').getValue().toString(),
    state: 'PUBLISHED',
    workType: "ANNOUNCEMENT"
  };
  const announcement = null
}
