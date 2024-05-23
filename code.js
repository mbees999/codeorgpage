var gamestarted = false;
function startgame() {
  show();
  penUp();
  moveTo(160, 130);
  onEvent("buttonUp", "mousedown", function( ) {
    turnTo(0);
    moveForward(10);
  });
  onEvent("buttonDown", "mousedown", function( ) {
    turnTo(180);
    moveForward(10);
  });
  onEvent("buttonLeft", "mousedown", function( ) {
    turnTo(270);
    moveForward(10);
  });
  onEvent("buttonRight", "mousedown", function( ) {
    turnTo(90);
    moveForward(10);
  });
  onEvent("quitButton", "click", function( ) {
    showElement("startButton");
    hide();
  });
}
onEvent("startButton", "click", function( ) {
  gamestarted = true;
  startgame();
  hideElement("startButton");
});
