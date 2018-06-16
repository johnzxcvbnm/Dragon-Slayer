const randomGen = () => {
  return Math.floor(Math.random() * 256);
}

const changeColor = (event) => {
  $(event.currentTarget).css("background-color", `rgb(${randomGen()}, ${randomGen()}, ${randomGen()})`);
}

const calculateSquare = (num) => {
  const contArea = parseInt($(".container").css("width")) * parseInt($(".container").css("height"));
  const squareArea = Math.floor(contArea / num);
  return Math.floor(Math.floor(Math.sqrt(squareArea)));
}

const createPad = (num) => {
  $(".container").empty();
  const squareWidth = calculateSquare(num);
  const numRows = Math.floor(parseInt($(".container").css("height")) / squareWidth);
  const numSquares = Math.floor(parseInt($(".container").css("width")) / squareWidth);

  for(let i = 0; i < numRows; i++){
    const $myRow = $("<div>").css( "width", $(".container").css("width") );
    $myRow.css("height", (squareWidth).toString());
    $(".container").append($myRow);

    for(let x = 0; x < numSquares; x++){
      const $square = $("<div>").addClass("square");
      $square.css("width", squareWidth);
      $square.css("height", squareWidth);
      $myRow.append($square);
      $square.on("mouseover", changeColor);
    }
  }

  // for(let i = 0; i < num; i++){
  //   const $square = $("<div>").addClass("square");
  //   $square.css("width", squareWidth);
  //   $square.css("height", squareWidth);
  //   $(".container").append($square);
  //   $square.on("mouseover", changeColor);
  // }
}

const pullInput = () => {
  const myInput = parseInt($("#inputBox").val());
  if(myInput > 0){
    createPad(myInput);
  }
}

$( () => {

  $("#inputButton").on("click", pullInput);
});//End of Document Ready Function
