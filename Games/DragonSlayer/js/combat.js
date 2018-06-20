//Pushes text to the text box
const pushText = (text) => {
  $("#textBox").html( $("#textBox").html() + text);
}

//Generates the new field of view
const fieldOfView = () => {
  $("#enemyBox").hide();
  $(".square").hide();

  for(let i = playerPos[0] - 7; i <= playerPos[0] + 7; i++){
    for(let x = playerPos[1] - 4; x <= playerPos[1] + 4; x++){
      $(`#${i}-${x}`).show();
    }
  }

  //Moves the player's icon to their new position
  $playerImg.appendTo( $(`#${playerPos[0]}-${playerPos[1]}`) );
}

const showEnemy = () => {
  $(".square").hide();
  $("#enemyBox").show();
  $("#enemyImg").attr("src", enemyChar.image);
}

//Function that updates all of the player text in the HUD
const updatePlayerText = () => {
  $("#playerHealth").text( playerChar.health );
  $("#playerPotions").text( playerChar.potions );
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
      if(playerChar.inCombat){
        enemyAttack();
      }
    } else {
      pushText("You can not do that right now.<br><br>");
    } } );

  $("#healButton").on("click", () => {
    if(playerChar.inCombat){
      usePotion();
      enemyAttack();
    } else {
      pushText("You can not do that right now.<br><br>");
    } } );

  $("#retreatButton").on("click", () => {
    if(playerChar.inCombat){
      playerRetreat();
      if(playerChar.inCombat){
        enemyAttack();
      }
    } else {
      pushText("You can not do that right now.<br><br>");
    } } );

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

//Function to determine if the player has managed to run away
const playerRun = () => {
  return Math.random() < playerChar.run;
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
  pushText(`You took a swing at the ${enemyChar.name} and...<br>`);

  if(playerHit()){
    //If the player lands a critical hit on the enemy it deals 3x damage
    if(playerCrit()){
      pushText(`...CRITICAL STRIKE!!!  Your attack dealt ${playerChar.attack * 3} damage!<br>`);
      enemyChar.health -= playerChar.attack * 3;

    //If the player deals regular damage to the enemy
    } else {
      pushText(`...you landed a blow, dealing ${playerChar.attack} damage!<br>`);
      enemyChar.health -= playerChar.attack;
    }

    //Check to see if the player has won
    if(enemyChar.health <= 0){
      //If the player just beat the boss
      //Disable all the buttons and congradulate the player
      if(enemyChar.isBoss){
        playerChar.inCombat = false;
        fieldOfView();
        disableAllButtons();
        pushText("<br>You have slayed the dragon and resuced the princess!  Your epic tale will be told for generations to come!<br>");

      //If the player just beat a regular enemy
      //Congradulate the player and remove them from combat
      } else {
        playerChar.inCombat = false;
        pushText(`<br>You have slain ${enemyChar.name}. Good riddance.<br><br>`);
        fieldOfView();
      }
    }

  //If the player missed their attack
  } else {
    pushText("...and missed!<br>");
  }
}

//Enemy's attack turn
const enemyAttack = () => {
  pushText(`The ${enemyChar.name} attacks and...<br>`);

  //If the enemy hit the player
  if(enemyHit()){
    //If the enemy lands a critical strike
    if(enemyCrit()){
      pushText(`...lands a CRITICAL STRIKE!!!  You took ${enemyChar.attack * 3} damage!<br>`);
      playerChar.health -= enemyChar.attack * 3;
    } else {
      pushText(`...lands a blow!  You took ${enemyChar.attack} damage!<br>`);
      playerChar.health -= enemyChar.attack;
    }

    updatePlayerText();

    //If the player has died
    if(playerChar.health <= 0){
      disableAllButtons();
      pushText("<br>You have died heroicly in battle.  Unfortunately the Dragon is still alive and begins a new age of darkness that will last for one hundred years!");

      $(`#${playerPos[0]}-${playerPos[1]}`).empty();
    }

  //When the enemy misses
  } else {
    pushText(`...misses!<br>`);
  }
}

//Function where the player runs away from battle
//If they're successful, alert them and remove them from combat
//Otherwise just alert them of their failure.
const playerRetreat = () => {
  pushText("You tried to run away and.....<br>");

  if(playerRun()){
    pushText("...managed to get away.<br><br>");
    playerChar.inCombat = false;
    fieldOfView();
  } else {
    pushText("...failed to get away.<br>");
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
  enemyChar.image = data.image;
}


//Reset the player to max health and potions
//Then reset the boss
//Then update the player text in the HUD
const resetPlayer = () => {
  playerChar.health = playerChar.maxHealth;
  playerChar.potions = playerChar.maxPotions;
  playerChar.inCombat = false;
  fieldOfView();
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
    pushText("You look for a potion, but alas you just wasted your time for you have no more potions.<br>");
  }
}
