
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName('Birthdays')
const main = ss.getSheetByName('Year 12 SDD Major Test Classroom')
const courseId = main.getRange('B1').getValue();
  var newTime = '2024-03-23T01:00:00.000000000Z'
  const currentTime = new Date(birthday);
  Logger.log(currentTime)
  var birthday = [];
 


function postAnnouncement() {

  var data = sheet.getDataRange().getValues();
  data.forEach(function (row){
    var fname = row[0]; 
    var lname = row[1]; 
    var time = row[2];  
    
    birthday.push([fname, lname, time]) 
  });
  Logger.log(birthday[0][2])

//loops through the birthday array and sets them to an arrayc
  //post an announcement

//run this through the loop
  const message = main.getRange('D1').getValue().toString()
  var announcement ={
    text: message + ' ' + birthday[1][0] + ' ' + birthday[1][1],
    scheduledTime: birthday[1][2],
    state: "DRAFT"
   };
  Classroom.Courses.Announcements.create(announcement, courseId);
  Logger.log(announcement)
}





