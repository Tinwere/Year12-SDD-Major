const ss = SpreadsheetApp.getActiveSpreadsheet();
const main = ss.getSheetByName('Year 12 SDD Major Test Spreadsheet')
const sheet = ss.getSheetByName('Information')
const courseId = sheet.getRange('A3').getValue();
var birthday = []; //where the values in the rows will be stored

//Gets the spreadsheet and the specific courseID

function postAnnouncement() {

//loops through the birthday array and stores them in an array
  var data = main.getDataRange().getValues();
  data.forEach(function (row){
    var fname = row[0]; 
    var lname = row[1]; 
    var time = row[2];  //Time has to be in the zulu format or else there will be a runtime error
    
    birthday.push([fname, lname, time])   
     })

const message = sheet.getRange('D1').getValue().toString() //Gets the desired message
  var announcement ={ //announcement object that is needed for classroom to understand what is needed to be posted
    text: message + ' ' + birthday[1][0] + ' ' + birthday[1][1], //This originally was going to be used to loop through the sheet for 
    scheduledTime: birthday[1][2],  //the right birthday, however, has been repurposed to be used for scheduling
    state: "DRAFT" 
   };
  Classroom.Courses.Announcements.create(announcement, courseId); //Classroom api that handles posting
  }
  
//Schedules an announcement on the classroom. Put under the Saved announcements section
//and will be posted at the correct time
  



//Will be used for Sprint 2
 // for (var i = 1, l = birthday.length; i < l; i++){ //For each birthday line to each 
      //Logger.log(birthday[i][2]);
     
    //  if (birthday[i][2] === currentTime){
       // var newTime = currentTime
      
      
     // }

 // };
 
 //var date = new Date().toISOString();
 // Logger.log(date)



