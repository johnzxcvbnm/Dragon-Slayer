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
  crit: 0,
  isBoss: false,
  image: ""
}

//The boss of the game
const bossChar = {
  name: "Dragon",
  health: 120,
  attack: 25,
  acc: .7,
  crit: .1,
  position: "",
  isBoss: true,
  image: "tiles/dragonTile.png"
}

//Common enemy - Slime
//Low hp, low damage but high acc
//Most common enemy but is ment to wear down the player
const slime = {
  name: "Slime",
  health: 20,
  attack: 5,
  acc: .9,
  crit: .1,
  isBoss: false,
  image: "tiles/slimeTile.png"
}

//Common enemy - Evil Wizard
//Low acc, but high crit
//Mid range enemy ment to keep the player on their toes
const wizard = {
  name: "Evil Wizard",
  health: 40,
  attack: 7,
  acc: .8,
  crit: .4,
  isBoss: false,
  image: "tiles/wizardTile.png"
}

//Common enemy - Skeleton
//High attack, high acc, mid crit
//Most danagerous of the common enemys, ment to try to force the player to use a potion
const skeleton = {
  name: "Skeleton",
  health: 80,
  attack: 10,
  acc: .85,
  crit: .20,
  isBoss: false,
  image: "tiles/skeletonTile.png"
}
