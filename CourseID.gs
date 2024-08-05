function getCourseID(){ //Imports courseID from google classroom
const optionalArguments = { //creation of the object that consists of two keys
teacherId: 'me',
courseStates: 'ACTIVE'
}

const response = Classroom.Courses.list(optionalArguments) //list method to get the courses. Ordered by time, most recent first
const courses = response.courses //access the courses
for (let i = 0; i < courses.length; i++) { //This line is looping through all the classroom the user has and records all of them
  let courseName = courses[i].name // class name, redunant line
  let courseId = courses[i].id; // class id
  sheet.appendRow([courseName, courseId]); //Adds the courseID to the "Information" spreadsheet to be used for scheduling
}
}

//The above function allows a google account to gain access to the IDs of the google classrooms connected to that account. This would be used to then figure out which classroom the posts will need to be sent to for the birthday messages.

// Logger.log("Class Name: " + courseName, "Class ID: " + courseId) Logs what the courseID is for the classroom. Can be 
//added back in when testing if it works for other classrooms.
