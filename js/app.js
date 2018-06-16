// textBox
// sleepButton
// retreatButton
// healButton
// attackButton
// downButton
// rightButton
// leftButton
// upButton
// playerPotions
// playerHealth
// playerName
// resetButton
// howToPlayButton
// aboutButton
// mainSection (class)

//Players current position in the map
const playerPos = [20, 15];


const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);;
  return `rgb(${red}, ${blue}, ${green})`;
}

const fieldOfView = () => {
  $(".square").hide();

  for(let i = playerPos[0] - 7; i <= playerPos[0] + 7; i++){
    for(let x = playerPos[1] - 4; x <= playerPos[1] + 4; x++){
      $(`#${x}-${i}`).show();
    }
  }
}

const generateDivs = () => {
    for(let i = 0; i < 50; i++){
      for(let x = 0; x < 50; x++){
        const $mySquare = $("<div>");
        $mySquare.addClass("square");
        $mySquare.attr("id", `${i}-${x}`);
        $mySquare.text(`${i}-${x}`);
        $mySquare.hide();
        $(".mainSection").append($mySquare);
      }
    }
    fieldOfView();
  // for(let i = 0; i < 135; i++){
  //   const $mySquare = $("<div>");
  //   $mySquare.addClass("square");
  //   $mySquare.attr("id", i);
  //   $mySquare.css("background-color", randomColor());
  //   $(".mainSection").append($mySquare);
  // }
}

const movePlayer = (x, y) => {
  playerPos[0] += x;
  playerPos[1] += y;
  fieldOfView();
}

const enableMoveButtons = () => {
  $("#upButton").on("click", () => { movePlayer(0, -1) } );
  $("#downButton").on("click", () => { movePlayer(0, 1) } );
  $("#leftButton").on("click", () => { movePlayer(-1, 0) } );
  $("#rightButton").on("click", () => { movePlayer(1, 0) } );
}

const disableMoveButtons = () => {
  $("#upButton").off();
  $("#downButton").off();
  $("#leftButton").off();
  $("#rightButton").off();
}

$( () => {
  generateDivs();
  enableMoveButtons();
  disableMoveButtons();
});
