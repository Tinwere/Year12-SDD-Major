//This generates the html pages for the different help sections on the sheets. 
//Each one is unique to the role of the sheet and is brought up when the user clicks the yellow question mark button.
//The user is calling the function that has been attached to the button in the spreadsheet when clicked

function loadCourseIDHelp(){
var page = HtmlService.createHtmlOutputFromFile('CourseIDHelp')
.setWidth(800)
.setHeight(500)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}

function loadTassInformationHelp(){
var page = HtmlService.createHtmlOutputFromFile('TassInformationHelp')
.setWidth(800)
.setHeight(400)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}

function loadScheduleHelp(){
var page = HtmlService.createHtmlOutputFromFile('ScheduleHelp')
.setWidth(800)
.setHeight(500)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}

function loadInstructionHelp(){
var page = HtmlService.createHtmlOutputFromFile('InstructionHelp')
.setWidth(800)
.setHeight(400)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}