const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName('Birthdays')
const main = ss.getSheetByName('Year 12 SDD Major Test Classroom')
const courseId = main.getRange('B1').getValue();
//var date = new Date().toISOString();
  
  var birthday = [];

 

function postAnnouncement() {
 // Logger.log(date)
//loops through the birthday array and stores them in an array
  var data = sheet.getDataRange().getValues();
  data.forEach(function (row){
    var fname = row[0]; 
    var lname = row[1]; 
    var time = row[2];  
    
    birthday.push([fname, lname, time])   
    
  })


const message = main.getRange('D1').getValue().toString()
  var announcement ={
    text: message + ' ' + birthday[0][0] + ' ' + birthday[0][1],
    scheduledTime: birthday[0][2],
    state: "DRAFT"
   };
  Classroom.Courses.Announcements.create(announcement, courseId);
  Logger.log(announcement)
  }
  
    //post an announcement
  



 // for (var i = 1, l = birthday.length; i < l; i++){ //For each birthday line to each 
      //Logger.log(birthday[i][2]);
     
    //  if (birthday[i][2] === currentTime){
       // var newTime = currentTime
      
      
     // }

 // };



