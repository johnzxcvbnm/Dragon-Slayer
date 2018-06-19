//Enables all the functionality of the misc buttons
//Misc buttons never get turned off
const enableMiscButtons = () => {
  $("#aboutButton").on("click", () => { console.log("About was clicked"); });
  $("#howToPlayButton").on("click", () => { console.log("How to play was clicked"); });
  $("#resetButton").on("click", resetGame );
}
