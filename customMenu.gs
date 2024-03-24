function onMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Birthdays')
    .addItem('Schedule Birthday', 'postAnnouncement')
    .addToUi();
}
