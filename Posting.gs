const ss = SpreadsheetApp.getActiveSpreadsheet();
const mainSheet = ss.getSheetByName('Birthdays');
const informationSheet = ss.getSheetByName('Course ID');
const courseId = informationSheet.getRange('F1').getValue();
const message = informationSheet.getRange('H1').getValue().toString() //Gets the desired message
let emojiList = ["🥳", "🍰", "🙌", "🎁", "🎉", "🎂"]

function determineLeapYear(year){
  if(year % 4 == 0) {
  return year;
} else {
  return year - 1;
  }
}

function birthdatesCases(d, m, year, leapYear){
  //This section checks the specific case of a birthday being at the start of the month
//I am unable to test with a leap year but have created a case for it
var newD = parseInt(d) - 1

    if (d == "01") {
        
        switch (m) {
          case "01": return year-1 + "-" + "12" + "-" + "31" + "T" + "21:00:00Z";
          case "02": return year + "-" + "1" + "-" + "31" + "T" + "21:00:00Z";
          case "03": return year + "-" + "2" + "-" + "28" + "T" + "21:00:00Z";
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

    
    
    return year + "-" + m + "-" + newD + "T" + "21:00:00Z";  //Builds the newDate variable in the Zulu format 
    } 
       
function birthdayData() {
  const data = mainSheet.getDataRange().getValues();
  const today = new Date();
  var year = today.getFullYear() + 1; // the plus 1 is kept to test post for dates in 2025. Should be removed for the actual use of the product
  var leapYear = determineLeapYear(year);
  
  Logger.log(year)

  //loops through the birthday array and stores them in an array
  
 // const row1 = main.getLastRow();
   return data.map(function (row){

     var lname = row[0]; 
     var fname = row[1]; 
     var bdate = row[2];
     

    const [d, m] = bdate.split(/[\/]/); //Takes the date string and isolates the day and month, storing it in the array
    var newDate = birthdatesCases(d, m, year, leapYear);
    return [lname, fname, newDate]; 
  });

}

function generateAnnouncement(birthdayData){
  birthdayData.forEach((birthday, index) => {
    if (index == 0) return; // ignores the first row which contain the names of columns

    var emoji = emojiList[(Math.floor(Math.random() * emojiList.length))]; //picks a random emoji from the list 

    var announcement ={ //announcement object that is needed for classroom to understand what is needed to be posted
    text: message + ' ' + birthday[1] + ' ' + birthday[0] + '!' +  ' ' + emoji , //This originally was going to be used to loop through the sheet for 
    scheduledTime: birthday[2],  //the right birthday, however, has been repurposed to be used for scheduling
    state: "DRAFT" 
   }; 
  Classroom.Courses.Announcements.create(announcement, courseId); //Classroom api that handles posting

  });
}


function postAnnouncement() {
  var newBirthdayData = birthdayData();
  generateAnnouncement(newBirthdayData); // Creates and posts the announcement
         
  };





      
     



  
