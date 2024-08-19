function onMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Uploading Functions')
    .addItem('Get Course ID', 'getCourseID')
    .addItem('Schedule Birthday', 'postAnnouncement')
    .addItem('FAQ', 'loadOnlineHelp')
    .addToUi();
}

//Creates the button on Spreadsheets that allows the House Captain to get the necessary courseID and schedule the birthday announcement.

function loadOnlineHelp(){
var page = HtmlService.createHtmlOutputFromFile('onlineHelp')
.setWidth(800)
.setHeight(700)
SpreadsheetApp.getUi()
  .showModalDialog(page, 'Frequently Asked Questions');
 

}
