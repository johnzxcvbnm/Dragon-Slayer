let currentClass = "";

const exportField = () => {
  
}

const changeColor = (color, myClass) => {
  currentClass = myClass;
  $("#currentButton").css("background-color", color);
}

const colorSquare = (event) => {
  const $mySquare = $(event.currentTarget);
  $mySquare.removeClass();
  $mySquare.addClass("square");
  $mySquare.addClass(currentClass);
}

const generateMap = () => {
  for(let i = 0; i < 30; i++){
    for(let x = 0; x < 30; x++){
      const $mySquare = $("<div>");
      $mySquare.addClass("square");
      $mySquare.attr("id", `${i}-${x}`);
      $mySquare.text(`${i}-${x}`);
      $mySquare.on("click", colorSquare);
      $(".container").append($mySquare);
    }
  }
}

const enableButtons = () => {
  $("#waterButton").on("click", () => { changeColor("#00B2FF", "water"); } );
  $("#plainsButton").on("click", () => { changeColor("#17FF00", "plains"); } );
  $("#forestButton").on("click", () => { changeColor("#135A0C", "forest"); } );
  $("#mountainsButton").on("click", () => { changeColor("#525A51", "mountains"); } );
  $("#desertButton").on("click", () => { changeColor("#EBD81F", "desert"); } );
  $("#townButton").on("click", () => { changeColor("#000000", "towns"); } );
  $("#generateButton").on("click", generateMap);
  $("#exportButton").on("click", exportField);
}

$( () => {
  enableButtons();
});//End of Document Ready Function
