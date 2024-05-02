function onMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Birthdays')
    .addItem('Get Course ID', 'getCourseID')
    .addItem('Schedule Birthday', 'postAnnouncement')
    .addToUi();
}

//Creates the button on Spreadsheets that allows the House Captain to get the necessary courseID and schedule the birthday announcement.