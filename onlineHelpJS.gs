function loadCourseIDHelp(){
var page = HtmlService.createHtmlOutputFromFile('CourseIDHelp')
.setWidth(800)
.setHeight(700)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}

function loadTassInformationHelp(){
var page = HtmlService.createHtmlOutputFromFile('TassInformationHelp')
.setWidth(800)
.setHeight(700)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}

function loadScheduleHelp(){
var page = HtmlService.createHtmlOutputFromFile('ScheduleHelp')
.setWidth(800)
.setHeight(700)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}

function loadInstructionHelp(){
var page = HtmlService.createHtmlOutputFromFile('InstructionHelp')
.setWidth(800)
.setHeight(700)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}