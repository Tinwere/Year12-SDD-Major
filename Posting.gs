const currentTime = new Date().toDateString()
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName('Birthdays')
const main = ss.getSheetByName('Year 12 SDD Major Test Classroom')
const courseId = main.getRange('B1').getValue();


function postAnnouncement(fname, lname, time) {
  //post an announcement
  //const fname = sheet.getRange('A2').getValue().toString()
  //const lname = sheet.getRange('B2').getValue().toString()
  const message = main.getRange('D1').getValue().toString()
  var announcement ={
    text: message + " " + fname + " " + lname + "!",
    scheduledTime: time,
    state: "DRAFT"
  };
  Classroom.Courses.Announcements.create(announcement, courseId);
  Logger.log(announcement);
}

function loopValues(){
  
  var time = sheet.getDataRange().getValues();
  time.forEach(function (row){
    time = row[2].toString()
  Logger.log(time)
  })
  
  
  var lname = sheet.getDataRange().getValues();
  lname.forEach(function (row) {
  lname = row[1].toString()
  Logger.log(lname)
  })

  var fname = sheet.getDataRange().getValues();
  fname.forEach(function (row){
  fname = row[0].toString()
  Logger.log(fname)
  })  
  }




