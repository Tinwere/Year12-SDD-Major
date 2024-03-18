function postAnnouncement() {
  //post an announcement
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Birthdays')
  const courseId = sheet.getRange('D2').getValue();
  const fname = sheet.getRange('A2').getValue().toString()
  const lname = sheet.getRange('B2').getValue().toString()
  const message = sheet.getRange('E2').getValue().toString()
  var announcement ={
    text: message + " " + fname + " " + lname + "!"
  };
  Classroom.Courses.Announcements.create(announcement, courseId);
  Logger.log(announcement);
}
