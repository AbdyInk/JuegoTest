var keyAllowed = {};

$(document).keydown(function(e) {
  if (keyAllowed [e.which] === false) return;
  keyAllowed [e.which] = false;
  
  let tecla = event.key;

  if(tecla=="ArrowLeft")
  {
    moveBoxLeft();
  }
  if(tecla=="ArrowRight")
  {
    moveBoxRight();
  }
  
});

$(document).keyup(function(e) { 
  keyAllowed [e.which] = true;
});

$(document).focus(function(e) { 
  keyAllowed = {};
});