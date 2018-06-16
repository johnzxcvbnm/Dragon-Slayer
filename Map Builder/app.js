let currentColor = "";

const changeColor = (color) => {
  currentColor = color;
  $("#currentButton").css("background-color", color);
}

const colorSquare = (event) => {
  const $mySquare = $(event.currentTarget);
  $mySquare.css("background-color", currentColor);
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
  $("#waterButton").on("click", () => { changeColor("#00B2FF"); } );
  $("#plainsButton").on("click", () => { changeColor("#17FF00"); } );
  $("#forestButton").on("click", () => { changeColor("#135A0C"); } );
  $("#mountainsButton").on("click", () => { changeColor("#525A51"); } );
  $("#desertButton").on("click", () => { changeColor("#EBD81F"); } );
  $("#townButton").on("click", () => { changeColor("#000000"); } );
  $("#generateButton").on("click", generateMap);
  $()
}

$( () => {
  enableButtons();
});//End of Document Ready Function
