function checkIt() {
  // Initialize scores
  var ant = 0;
  var europe = 0;
  var southmerca = 0;
  var northmerca = 0;
  var asia = 0;
  var africa = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'ant') {
        ant++;
      }
      else if (e.value == 'europe') {
        europe++;
      }
      else if (e.value == 'southmerca') {
        southmerca++;
      }
      else if (e.value == 'northmerca') {
        northmerca++
      }
      else if (e.value == 'asia') {
        asia++
      }
      else if (e.value == 'africa') {
        africa++
      }
    }

  }

  // Determine result
  var counts = "Europe: " + europe + ", " +
               "Asia: " + asia  + ", " +
               "Africa: " + africa + ", " +
               "Antarctica: " + ant + ", " +
               "North America: " + northmerca + ", " +
               "South America: " + southmerca;

  // What is the highest value?
  var max = Math.max(europe, asia, africa, ant, northmerca, southmerca);

  // Form a message
  var message;

  if (max == ant) {
    message = "Dang, you're from Antarctica, how cold is it there?.";
  }
  else if (max == europe) {
    message = "PIP PIP CHEERIOS, ur from Europe aren't you?";
  }
  else if (max == asia) {
    message = "Your from Asia, Right";
  }
  else if (max == africa) {
    message = "Africa... Am I right???";
  }
  else if (max == northmerca) {
    message = "Land of the free, home of the brave, you're from North America aren't you?";
  }
  else if (max == southmerca) {
    message = "¿Eres de Sudamérica?";
  }
  // Display result
  //document.getElementById('result-text').innerHTML = counts;
   document.getElementById('result-text').innerHTML = message;
}
