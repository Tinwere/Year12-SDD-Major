const ss = SpreadsheetApp.getActiveSpreadsheet();
const main = ss.getSheetByName('Birthdays');
const sheet = ss.getSheetByName('Course ID');
const courseId = sheet.getRange('F1').getValue();
const message = sheet.getRange('H1').getValue().toString() //Gets the desired message
var birthday = [];
const today = new Date();
var year = today.getFullYear() + 1; 
var leapYear = year%4;
let emojiList = ["🥳", "🍰", "🙌", "🎁", "🎉", "🎂"]

if(leapYear == 0) {
  leapYear = year
};

//Gets the spreadsheet and the specific courseID
//where the values in the rows will be stored

function postAnnouncement() {
 //creates date format
//loops through the birthday array and stores them in an array
  var data = main.getDataRange().getValues();
 // const row1 = main.getLastRow();
  data.forEach(function (row){

    var lname = row[0]; 
    var fname = row[1]; 
    var bdate = row[2];

    let [d, m] = bdate.split(/[\/]/); //Takes the date string and isolates the day and month, storing it in the array
    
//This section checks the specific case of a birthday being at the start of the month
//I am unable to test with a leap year but have created a case for it
//Preferably this should be in a function that performs this validation but due to time constraints
//I was unable to do so
    if (d == "01" && m == "01"){
      var newDate = year-1 + "-" + "12" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "29" && m == "02" && leapYear == year){
      var newDate = leapYear + "-" + "2" + "-" + "28" + "T" + "21:00:00Z";
    } else if (d == "29" && m == "02"){
      var newDate = year + "-" + "2" + "-" + "27" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "02") {
      var newDate = year + "-" + "1" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "03") {
      var newDate = year + "-" + "2" + "-" + "28" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "04") {
      var newDate = year + "-" + "3" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "05") {
      var newDate = year + "-" + "4" + "-" + "30" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "06") {
      var newDate = year + "-" + "5" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "07") {
      var newDate = year + "-" + "6" + "-" + "30" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "08") {
      var newDate = year + "-" + "7" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "09") {
      var newDate = year + "-" + "8" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "10") {
      var newDate = year + "-" + "9" + "-" + "30" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "11") {
      var newDate = year + "-" + "10" + "-" + "31" + "T" + "21:00:00Z";
    } else if (d == "01" && m == "12") {
      var newDate = year + "-" + "11" + "-" + "30" + "T" + "21:00:00Z";
    } else {
      var newD = parseInt(d) - 1
      var newDate = year + "-" + m + "-" + newD + "T" + "21:00:00Z"; //Builds the newDate variable in the Zulu format 
    }

    birthday.push([lname, fname, newDate]); 
  })

  for (var i = 1, l = birthday.length; i < l; i++){ //For each birthday line to each 
   var emoji = emojiList[(Math.floor(Math.random() * emojiList.length))];
   var announcement ={ //announcement object that is needed for classroom to understand what is needed to be posted
    text: message + ' ' + birthday[i][1] + ' ' + birthday[i][0] + '!' +  ' ' + emoji , //This originally was going to be used to loop through the sheet for 
    scheduledTime: birthday[i][2],  //the right birthday, however, has been repurposed to be used for scheduling
    state: "DRAFT" 

   }; 
  Classroom.Courses.Announcements.create(announcement, courseId);
    
         //Classroom api that handles posting
  }
};




      
     



  