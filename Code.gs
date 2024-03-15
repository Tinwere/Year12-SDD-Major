function studentImport(){ //Imports student information from google classroom
const optionalArguments = { //creatio of the object that consists of two keys
teacherId: 'me',
courseStates: 'ACTIVE'
}


const response = Classroom.Courses.list(optionalArguments) //list method to get the courses. Ordered by time, most recent first
console.log(response)

}