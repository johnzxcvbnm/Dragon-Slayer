// textBox
// sleepButton
// retreatButton
// healButton
// attackButton
// playerPotions
// playerHealth
// playerName
// resetButton
// howToPlayButton
// aboutButton
// mainSection (class)

//Players current position in the map and image
// const playerPos = [15, 15];
const $playerImg = $("<img>").attr("src", "tiles/playerTile.png");

//Random background colors.  Used for building the fieldOfView function
const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);;
  return `rgb(${red}, ${blue}, ${green})`;
}

//Generates the new field of view
const fieldOfView = () => {
  $(".square").hide();

  for(let i = playerPos[0] - 7; i <= playerPos[0] + 7; i++){
    for(let x = playerPos[1] - 4; x <= playerPos[1] + 4; x++){
      $(`#${i}-${x}`).show();
    }
  }

  //Moves the player's icon to their new position
  $playerImg.appendTo( $(`#${playerPos[0]}-${playerPos[1]}`) );
}

//Creates the whole map and appends it to the container.  All squares are given a cordinate as an ID, which is used to create a map with function.
const generateDivs = () => {
    for(let i = 0; i < 50; i++){
      for(let x = 0; x < 50; x++){
        const $mySquare = $("<div>");
        // $mySquare.addClass("square");
        $mySquare.attr("id", `${x}-${i}`);
        // $mySquare.text(`${x}-${i}`);
        $mySquare.hide();
        $(".mainSection").append($mySquare);
      }
    }

    // terrainCheck();
    fieldOfView();

  //Used to test if the squares would fit into the container
  // for(let i = 0; i < 135; i++){
  //   const $mySquare = $("<div>");
  //   $mySquare.addClass("square");
  //   $mySquare.attr("id", i);
  //   $mySquare.css("background-color", randomColor());
  //   $(".mainSection").append($mySquare);
  // }
}

//Builds the terrain on certain rows to test to see if the player can move properly
const terrainCheck = () => {
  //Water - Col 22
  for(let i = 0; i < 50; i++){
    $(`#22-${i}`).addClass("water").addClass("square");
  }
  //Plains - Col 21
  for(let i = 0; i < 50; i++){
    $(`#21-${i}`).addClass("plains").addClass("square");
  }
  //Forest - Col 19
  for(let i = 0; i < 50; i++){
    $(`#19-${i}`).addClass("forest").addClass("square");
  }
  //Mountain - Col 15
  for(let i = 0; i < 50; i++){
    $(`#12-${i}`).addClass("mountains").addClass("square");
  }
  //Desert - Col 19
  for(let i = 0; i < 50; i++){
    $(`#19-${i}`).addClass("desert").addClass("square");
  }
  //Town - Col 17
  for(let i = 0; i < 50; i++){
    $(`#17-${i}`).addClass("towns").addClass("square");
  }
}

//Checks to see if the player can move onto the next square
const canMove = (x, y) => {
  const $mySquare = $(`#${x}-${y}`);

  //Debugging wether the player can move on 'water' or 'mountains'
  // console.log("Next Move " + $mySquare.attr("id"));
  // console.log("Square Class " + $mySquare.attr("class"));
  // console.log("Has water " + $mySquare.hasClass("water"));
  if( ($mySquare.hasClass("water")) || ($mySquare.hasClass("mountains")) ){
    return false;
  }
  return true;
}

//If the player can move, then do so
const movePlayer = (x, y) => {
  if(canMove(playerPos[0] + x, playerPos[1] + y)){
    playerPos[0] += x;
    playerPos[1] += y;
    fieldOfView();
    if(foundBoss()){
      pushText("You found the boss!");
    } //Add random encounters here
  }
}

//Enables the movement buttons
//If the player is in combat, push a message telling them they can't move
//Else move the player
const enableMoveButtons = () => {
  $("#upButton").on("click", () => {
    if(playerChar.inCombat){
      pushText("You can not move while there is a monster in your way.<br><br>");
    } else {
      movePlayer(0, -1);
    } } );

  $("#downButton").on("click", () => {
    if(playerChar.inCombat){
      pushText("You can not move while there is a monster in your way.<br><br>");
    } else {
      movePlayer(0, 1);
    } } );

  $("#leftButton").on("click", () => {
    if(playerChar.inCombat){
      pushText("You can not move while there is a monster in your way.<br><br>");
    } else {
      movePlayer(-1, 0);
    } } );

  $("#rightButton").on("click", () => {
    if(playerChar.inCombat){
      pushText("You can not move while there is a monster in your way.<br><br>");
    } else {
      movePlayer(1, 0);
  } } );
}

//Reset the game to it's original position
const resetGame = () => {
  $("#playerName").text( prompt("Enter the name of your Champion: ") );
  $("#textBox").html("The Princess has been kidnapped by a Dragon!  His lair is one of the other castles in the land.  Find him and rescue the Princess!<br><br>")
  enableMoveButtons();
  enableCombatButtons();
  buildDefaultMap(playerPos);
  fieldOfView();
  resetPlayer();
}

//Document Ready function
$( () => {
  generateDivs();
  enableMiscButtons();
  resetGame();
  //Enable misc buttons
});//End of Document Ready Function
