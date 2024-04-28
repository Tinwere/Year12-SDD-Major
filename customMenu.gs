function onMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Birthdays')
    .addItem('Schedule Birthday', 'postAnnouncement')
    .addItem('Get Course ID', 'getCourseID')
    .addToUi();
}

//Creates the button on Spreadsheets that allows the House Captain to get the necessary courseID and schedule the birthday announcement.