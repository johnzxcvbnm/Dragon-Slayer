const playerPos = [15, 15];

const playerChar = {
  health: 100,
  attack: 10,
  acc: 80,
  crit: 10,
  potions: 3
}

const bossChar = {
  name: "Dragon",
  health: 100,
  attack: 25,
  acc: 70,
  crit: 10,
  position: ""
}

//Pushes text to the text box
const pushText = (text) => {
  $("#textBox").html( $("#textBox").html() + text);
}

const foundBoss = () => {
  return bossChar.position === `${playerPos[0]}-${playerPos[1]}`;
}

//Resets the boss health and gives him a random position on the map
const resetBoss = () => {
  //Default max health for the boss
  bossChar.health = 100;

  //Pull all the town squares and set the boss to a random one
  //If the boss is set to the player's initial position, call this function to try again
  const $myTowns = $(".towns");
  const townNumber = Math.floor(Math.random() * $myTowns.length);
  if( `${playerPos[0]}-${playerPos[1]}` === $myTowns.eq(townNumber).attr("id") ){
    resetBoss();
  } else {
    //Boss is not at initial player position so set his location
    bossChar.position = $myTowns.eq(townNumber).attr("id");
  }
}

//Function that updates all of the player text in the HUD
const updatePlayerText = () => {
  $("#playerHealth").text( playerChar.health );
  $("#playerPotions").text( playerChar.potions );
}

//Reset the player to max health and potions
//Then reset the boss
//Then update the player text in the HUD
const resetPlayer = () => {
  playerChar.health = 100;
  playerChar.potions = 3;
  resetBoss();
  updatePlayerText();
}

const usePotion = () => {
  playerChar.health = 100;

}
