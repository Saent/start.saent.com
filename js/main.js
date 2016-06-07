//---
// main.js

var tabs = document.querySelectorAll('[data-tab]');
var hasSelection = false;


//---
// Toggle visibility of both button and matching instructions
var toggleVisibility = function(target) {
  var selection = target.getAttribute('data-tab');
  var toShow = document.querySelector('[data-instructions=' + selection + ']');

  target.classList.toggle('active');
  toShow.classList.toggle('active');
}



//---
// Handle tab clicking interaction.
// Only show one set of instructions at a time.
var tabClicked = function(e) {
  var target = e.currentTarget;
  var selection = target.getAttribute('data-tab');
  var toShow = document.querySelector('[data-instructions=' + selection + ']');

  if(hasSelection) {
    // make sure it's not already active
    if(!target.classList.contains('active')) {
      // toggle all tabs
      for (var i=0; i < tabs.length; i++) {
        toggleVisibility(tabs[i]);
      }
    }

  } else {
    toggleVisibility(e.currentTarget);
  }
  hasSelection = true;
}


//---
// set event listeners
for (var i=0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabClicked, false);
}
