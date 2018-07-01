const playerPos = [15, 15];

//Random background colors.  Used for building the fieldOfView function
const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);;
  return `rgb(${red}, ${blue}, ${green})`;
}

const fieldOfView = () => {
  //Hide the enemy image and the current field of view
  // $("#enemyBox").hide();
  $(".square").hide();

  //Render the squares around the player
  for(let i = playerPos[0] - 7; i <= playerPos[0] + 7; i++){
    for(let x = playerPos[1] - 4; x <= playerPos[1] + 4; x++){
      $(`#${i}-${x}`).show();
    }
  }

  //Moves the player's icon to their new position
  // $playerImg.appendTo( $(`#${playerPos[0]}-${playerPos[1]}`) );
}


//Creates the whole map and appends it to the container.  All squares are given a cordinate as an ID, which is used to create a map with function.
const generateDivs = () => {
    for(let i = 0; i < 50; i++){
      for(let x = 0; x < 50; x++){
        const $mySquare = $("<div>");
        $mySquare.addClass("square");
        $mySquare.attr("id", `${x}-${i}`);
        // $mySquare.text(`${x}-${i}`);
        $mySquare.hide();
        $(".gameField").append($mySquare);
      }
    }

    //Creates a div to hold the enemy picture during combat.  Div only appears during combat.
    // const $myEnemyBox = $("<div>").attr("id", "enemyBox");
    // $myEnemyBox.append( $("<img>").attr("id", "enemyImg") );
    // $myEnemyBox.hide();
    // $(".gameField").append($myEnemyBox);

    // terrainCheck();

    //Render the players field of view
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

//Document Ready function
$( () => {
  generateDivs(); //Generate the squares which make up
});//End of Document Ready Function
