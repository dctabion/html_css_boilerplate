// hey hey hey
window.onload = function() {
  // alert('hey hey');
  statusReport('hey HEY HEY');

  var username = prompt('What is your name?');
  var mission = prompt('What is your quest?');

  var contentContainer = document.getElementById('content');

  contentContainer.innerHTML = username + ' is on a mission to ' + mission;
}
  function statusReport(message) {
  console.log(message);
  return message;
}
