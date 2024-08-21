const ss = SpreadsheetApp.getActiveSpreadsheet();
const main = ss.getSheetByName('Year 12 SDD Major Test Spreadsheet');
const sheet = ss.getSheetByName('Course ID');
const courseId = sheet.getRange('F1').getValue();
const message = sheet.getRange('H1').getValue().toString() //Gets the desired message
var birthday = [];
const today = new Date();
var year = today.getFullYear() + 1; 

//Gets the spreadsheet and the specific courseID
//where the values in the rows will be stored

function postAnnouncement() {
 //creates date format
//loops through the birthday array and stores them in an array
  var data = main.getDataRange().getValues();

  data.forEach(function (row){

    var lname = row[0]; 
    var fname = row[1]; 
    var bdate = row[2];

    let [d, m] = bdate.split(/[\/]/); //Takes the date string and isolates the day and month, storing it in the array
    newDate = year + "-" + m + "-" + d + "T" + "00:00:00Z"; //Builds the newDate variable in the Zulu format 
       
    birthday.push([lname, fname, newDate]); 
  })

  for (var i = 1, l = birthday.length; i < l; i++){ //For each birthday line to each 
   
   var announcement ={ //announcement object that is needed for classroom to understand what is needed to be posted
    text: message + ' ' + birthday[i][1] + ' ' + birthday[i][0] + '!', //This originally was going to be used to loop through the sheet for 
    scheduledTime: birthday[i][2],  //the right birthday, however, has been repurposed to be used for scheduling
    state: "DRAFT" 

   }; 
  Classroom.Courses.Announcements.create(announcement, courseId);
    //if(i = birthday.length){
     // break;
    //}
         //Classroom api that handles posting
  }
};




      
     



  