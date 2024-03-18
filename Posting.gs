function postAnnouncement() {
  //post an assignment
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('assignment')
  const courseId = sheet.getRange('B1').getValue();
  var announcement ={
    text: "Happy Birthday"+"\n" + "XXX" //sheet.getRange('B3').getValue().toString(),
  };
  Classroom.Courses.Announcements.create(announcement, courseId)
  Logger.log(announcement);
}
