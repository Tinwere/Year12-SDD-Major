function studentImport(){ //Imports student information from google classroom
const optionalArguments = { //creation of the object that consists of two keys
teacherId: 'me',
courseStates: 'ACTIVE'
}


const response = Classroom.Courses.list(optionalArguments) //list method to get the courses. Ordered by time, most recent first
const courses = response.courses //access the courses
for (let i = 0; i < courses.length; i++) {
  let courseName = courses[i].name // class name
  let courseId = courses[i].id; // class id
  console.log("Class Name: " + courseName, "Class ID: " + courseId)
  insertStudents(courseName, courseId);
}
}

//The above function allows a google account to gain access to the IDs of the google classrooms connected to that account. This would be used to then figure out which classroom the posts will need to be sent to for the birthday messages.


function retrieve_Emails_Names(){
  //returns the name and emails of the students when provided with the class Id
  var courseId = '659596198260';
  var studentNames = [];
  var studentEmails = [];
  var major = [studentNames, studentEmails];
  var retrieve = Classroom.Courses.Students.list(courseId)
  var students = retrieve.students //Error here: Forgot the 's' on student
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].profile.name.fullName) //gets full name
    studentEmails.push(students[i].profile.emailAddress) //gets Email
  }
  return major;
}

function insertStudents(courseName, courseId) {
var insertedSheetName = courseName; 
var ss = SpreadsheetApp.getActiveSpreadsheet();
//var newSheet = ss.getSheetName(insertedSheetName);
//ensures that the courses isnt imported twice
//if (newSheet != null){
  //SpreadsheetApp.getUi().alert('This classroom is already imported');
  //return
  //}

newSheet = ss.insertSheet();
newSheet.setName(insertedSheetName);
newSheet.appendRow(['Student Name', 'Email Address', 'Course ID', courseId]) //adds headers to the new spreadsheet
var studentNames = retrieve_Emails_Names(courseId)[0] //gets names
var studentEmails = retrieve_Emails_Names(courseId)[1] 
for (var i = 0; i < studentNames.length; i++) {
  newSheet.appendRow([studentNames[i], studentEmails[i]]) //adds names to the sheet
}
//sorts the data 
newSheet.autoResizeColumns(1, 4);
let range = newSheet.getRange(2, 1, newSheet.getLastRow(), 2);
range.sort(1)

}



