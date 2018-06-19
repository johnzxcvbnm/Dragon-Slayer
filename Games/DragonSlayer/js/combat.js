//Pushes text to the text box
const pushText = (text) => {
  $("#textBox").html( $("#textBox").html() + text);
}

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
  $("#attackButton").on("click", () => {
    if(playerChar.inCombat){
      playerAttack();
    } else {
      pushText("You can not do that right now.<br><br>");
    } } );

  $("#healButton").on("click", () => {
    if(playerChar.inCombat){
      usePotion();
    } else {
      pushText("You can not do that right now.<br><br>");
    } } );

  $("#retreatButton").on("click", () => {console.log("Clicked retreat button"); });
  $("#sleepButton").on("click", playerSleep);
}

//Function to determine if the player has landed a hit or not
const playerHit = () => {
  return Math.random() < playerChar.acc;
}

//Function to determine if the player has landed a critical strike or not
const playerCrit = () => {
  return Math.random() < playerChar.crit;
}

//Function to determine if the enemy has landed a hit or not
const enemyHit = () => {
  return Math.random() < enemyChar.acc;
}

//Function to determine if the enemy has landed a critical strike or not
const enemyCrit = () => {
  return Math.random() < enemyChar.crit;
}

const playerAttack = () => {
  //If the player lands a hit on the enemy
  if(playerHit()){
    //If the player lands a critical hit on the enemy it deals 3x damage
    if(playerCrit()){
      pushText(`CRITICAL STRIKE!!!<br>Your attack dealt ${playerChar.attack * 3} damage!<br>`);
      enemyChar.health -= playerChar.attack * 3;

    //If the player deals regular damage to the enemy
    } else {
      pushText(`You landed a blow dealing ${playerChar.attack} damage!<br>`);
      enemyChar.health -= playerChar.attack;
    }

    //Check to see if the player has won
    if(enemyChar.health <= 0){
      //If the player just beat the boss
      //Disable all the buttons and congradulate the player
      if(enemyChar.isBoss){
        disableAllButtons();
        pushText("<br>You have slayed the dragon and resuced the princess!  Your epic tale will be told for generations to come!<br>");

      //If the player just beat a regular enemy
      //Congradulate the player and remove them from combat
      } else {
        playerChar.inCombat = false;
        pushText(`<br>You have slain ${enemyChar.name}. Good riddance.<br><br>`);
      }
    }
  } else {
    pushText("You swing and missed!<br>");
  }
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
  // bossChar.health = 100;

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

//Copys an enemy's data to the enemyChar class
const copyEnemy = (data) => {
  enemyChar.name = data.name;
  enemyChar.health = data.health;
  enemyChar.attack = data.attack;
  enemyChar.acc = data.acc;
  enemyChar.crit = data.crit;
  enemyChar.isBoss = data.isBoss;
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
  playerChar.inCombat = false;
  resetBoss();
  updatePlayerText();
}

const usePotion = () => {
  if(playerChar.potions > 0){
    pushText("You used a healing potion to restore your health.<br>");
    playerChar.health = playerChar.maxHealth;
    playerChar.potions--;
    updatePlayerText();
  } else {
    pushText("You have no more potions.<br>");
  }
}
