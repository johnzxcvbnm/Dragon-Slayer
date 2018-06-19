//Disables all the movement and combat buttons
//Used after the player has won or lost the game
const disableAllButtons = () => {
  $("#attackButton").off();
  $("#healButton").off();
  $("#retreatButton").off();
  $("#sleepButton").off();
  $("#upButton").off();
  $("#downButton").off();
  $("#leftButton").off();
  $("#rightButton").off();
}

//Enables combat buttons
const enableCombatButtons = () => {
  $("#attackButton").on("click", () => {console.log("Clicked Attack Button"); });
  $("#healButton").on("click", () => {console.log("Clicked Heal Button"); });
  $("#retreatButton").on("click", () => {console.log("Clicked retreat button"); });
  $("#sleepButton").on("click", playerSleep);
}

//Pushes text to the text box
const pushText = (text) => {
  $("#textBox").html( $("#textBox").html() + text);
}

const playerSleep = () => {
  if(playerChar.inCombat){
    pushText("You can not sleep with a monster in front of you.<br>");
  } else {
    pushText("You rest through the night and restore all of your health.<br><br>");
    playerChar.health = playerChar.maxHealth;
  }
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
  playerChar.health = playerChar.maxHealth;
  playerChar.potions = playerChar.maxPotions;
  resetBoss();
  updatePlayerText();
}

const usePotion = () => {
  if(playerChar.potion > 0){
    pushText("You used a healing potion to restore your health.<br>");
    playerChar.health = playerChar.maxHealth;
    playerChar.potion--;
    updatePlayerText();
  } else {
    pushText("You have no more potions.<br>");
  }
}
