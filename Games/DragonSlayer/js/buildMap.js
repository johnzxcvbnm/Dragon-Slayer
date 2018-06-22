
//Function to build a map using the cordinate system
const buildMap = (water, plains, forest, mountains, desert, towns) => {
  for(let cord of water){
    $(`#${cord}`).removeClass().addClass("water").addClass("square");
  }

  for(let cord of plains){
    $(`#${cord}`).removeClass().addClass("plains").addClass("square");
  }

  for(let cord of forest){
    $(`#${cord}`).removeClass().addClass("forest").addClass("square");
  }

  for(let cord of mountains){
    $(`#${cord}`).removeClass().addClass("mountains").addClass("square");
  }

  for(let cord of desert){
    $(`#${cord}`).removeClass().addClass("desert").addClass("square");
  }

  for(let cord of towns){
    $(`#${cord}`).removeClass().addClass("towns").addClass("square");
  }
}

//Build the default map - by John Kusching
const buildDefaultMap = (playerPos) => {
  defaultPlayerPos(playerPos);
  buildMap(defaultWaterBuild(),
           defaultPlainsBuild(),
           defaultForestBuild(),
           defaultMountainsBuild(),
           defaultDesertBuild(),
           defaultTownsBuild() );
}

//Build the second map - by John Kusching
const buildSecondMap = (playerPos) => {
  // secondPlayerPos(playerPos);
  // buildMap(secondWaterBuild(),
  //          secondPlainsBuild(),
  //          secondForestBuild(),
  //          secondMountainsBuild(),
  //          secondDesertBuild(),
  //          secondTownsBuild() );
}
