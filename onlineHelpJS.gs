function loadCourseIDHelp(){
var page = HtmlService.createHtmlOutputFromFile('CourseIDHelp')
.setWidth(800)
.setHeight(700)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
}