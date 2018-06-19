//File contains all the global variables used in the program
//Variable used to track the player's position using the cordinate system
const playerPos = [15, 15];

//Players stats, used for combat
const playerChar = {
  maxHealth: 100,
  health: 100,
  attack: 10,
  acc: .8, //80%
  crit: .1, //10%
  run: .3, //30%
  maxPotions: 3,
  potions: 3,
  inCombat: false
}

//Who the player is fighting against
const enemyChar = {
  name: "",
  health: 0,
  attack: 0,
  acc: 0,
  crit: 0
}

//The boss of the game
const bossChar = {
  name: "Dragon",
  health: 100,
  attack: 25,
  acc: .7,
  crit: .1,
  position: ""
}
