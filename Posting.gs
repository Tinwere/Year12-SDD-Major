const ss = SpreadsheetApp.getActiveSpreadsheet(); //Spreadsheet API that gets the Birthday spreadsheet
const mainSheet = ss.getSheetByName('Birthdays');
const informationSheet = ss.getSheetByName('Course ID');
const courseId = informationSheet.getRange('F1').getValue(); //Hard coded value that gets the courseID that the user has to put into that cell
const message = informationSheet.getRange('H1').getValue().toString() //Gets the desired message
let emojiList = ["🥳", "🍰", "🙌", "🎁", "🎉", "🎂"]

// Used to determine whether the current year is a leap year or not.
function determineLeapYear(year){
  if(year % 4 == 0) {
  return year;
} else {
  return year - 1;
  }
}

//Used to fill the newData variable 
//To post it on the correct day at the designated time, the code determines the previous date
//and then goes forward in time, handled by google classroom with the zulu time as 00:00:00Z is 10:00 or 11:00 am. 
function birthdatesCases(d, m, year, leapYear){

//turns the string from the sheet to an integer to be able to schedule for the actual birthday at 7am or 8am depending on time zone.
 
var newD = parseInt(d) - 1 

//This section checks the specific case of a birthday being at the start of the month  

    if (d == "01") {   
        switch (m) {
          case "01": return year-1 + "-" + "12" + "-" + "31" + "T" + "21:00:00Z";
          case "02": return year + "-" + "1" + "-" + "31" + "T" + "21:00:00Z";
          case "03": if (leapYear == year) { // Case for March 1st
            return leapYear + "-" + "2" + "-" + "29" + "T" + "21:00:00Z"; 
          } else {
            return year + "-" + "2" + "-" + "28" + "T" + "21:00:00Z";
          }
          case "04": return year + "-" + "3" + "-" + "31" + "T" + "21:00:00Z";
          case "05": return year + "-" + "4" + "-" + "30" + "T" + "21:00:00Z";
          case "06": return year + "-" + "5" + "-" + "31" + "T" + "21:00:00Z";
          case "07": return year + "-" + "6" + "-" + "30" + "T" + "21:00:00Z";
          case "08": return year + "-" + "7" + "-" + "31" + "T" + "21:00:00Z";
          case "09": return year + "-" + "8" + "-" + "31" + "T" + "21:00:00Z";
          case "10": return year + "-" + "9" + "-" + "30" + "T" + "21:00:00Z";
          case "11": return year + "-" + "10" + "-" + "31" + "T" + "21:00:00Z";
          case "12": return year + "-" + "11" + "-" + "30" + "T" + "21:00:00Z";
        } 
    } 

//Unable to test with a leap year but have created a case for it. 
//Works to post if the year isn't a leap year and person is born on the 29th of Feburary.

    if (m == "02") {
      switch (d) {
        case "29": 
          if (leapYear == year) {
           return leapYear + "-" + "2" + "-" + "28" + "T" + "21:00:00Z"; 
          } else {
           return year + "-" + "2" + "-" + "27" + "T" + "21:00:00Z";
          }
      }
    }

   //Builds the newDate variable in the Zulu format for every other day 

    return year + "-" + m + "-" + newD + "T" + "21:00:00Z";  
    } 
       

// Loops through the actual spreadsheet and get the day (d) and month (m) that then is used in the birthdatesCases() function
function birthdayData() {

  const data = mainSheet.getDataRange().getValues();
  const today = new Date();
  var year = today.getFullYear() + 1 ; // the plus 1 is kept to test post for dates in 2025. Should be removed for the actual use of the software
  var leapYear = determineLeapYear(year); // leapYear case

// the .map method is used to return the new arrary based on what is defined (lname, fname, newDate)

   return data.map(function (row){

     var lname = row[0]; 
     var fname = row[1]; 
     var bdate = row[2];
     
    const [d, m] = bdate.split(/[\/]/); //Takes the date string from the bdate row and isolates the day and month, storing it in a seperate array. 
    var newDate = birthdatesCases(d, m, year, leapYear);  // calls the function to be able to create the correct time format for each person
    return [lname, fname, newDate]; // returns the corrected information
  });

}

// Creates the announcement for the information from each row
function generateAnnouncement(birthdayData){
  birthdayData.forEach((birthday, index) => {
    if (index == 0) return; // ignores the first row which contain the names of columns

    var emoji = emojiList[(Math.floor(Math.random() * emojiList.length))]; //picks a random emoji from the list 

    var announcement ={ //announcement object that is needed for classroom to understand what is needed to be posted
    text: message + ' ' + birthday[1] + ' ' + birthday[0] + '!' +  ' ' + emoji , //Builds the message in the format, "Happy Birthday {fname} {lname}! {emoji}"
    scheduledTime: birthday[2],  //the right birthday correct by the zulu time format
    state: "DRAFT"  //puts it as a saved announcement
   }; 
  Classroom.Courses.Announcements.create(announcement, courseId); //Classroom api that handles scheduling

  });
}

// What the user calls in the spreadsheet button to schedule
function postAnnouncement() {
 
  var newBirthdayData = birthdayData();
  generateAnnouncement(newBirthdayData); // Creates and posts the announcement
         
  };

