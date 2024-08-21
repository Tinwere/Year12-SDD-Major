function onMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.alert("Welcome to ");
  ui.createMenu('Uploading Functions')
    .addItem('Get Course ID', 'getCourseID')
    .addItem('Schedule Birthday', 'postAnnouncement')
    .addToUi();
}

//Creates the button on Spreadsheets that allows the House Captain to get the necessary courseID and schedule the birthday announcement.


