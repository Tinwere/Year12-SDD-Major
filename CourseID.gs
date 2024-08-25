//Imports courseID from google classroom

function getCourseID(){ 
const optionalArguments = { //creation of the object that consists of two keys
teacherId: 'me',
courseStates: 'ACTIVE'
}

const response = Classroom.Courses.list(optionalArguments) //list method to get the courses. Ordered by time, most recent first
const courses = response.courses //access the courses
for (let i = 0; i < courses.length; i++) { //This line is looping through all the classroom the user has and records all of them
  let courseName = courses[i].name // class name
  let courseId = courses[i].id; // class id
  informationSheet.appendRow([courseName, courseId]); //Adds the courseID to the "CourseID" spreadsheet to be used for scheduling
}
}

//The above function allows a google account to gain access to the IDs of the google classrooms connected to that account. This would be used to then figure out which classroom the posts will need to be sent to for the birthday messages.

