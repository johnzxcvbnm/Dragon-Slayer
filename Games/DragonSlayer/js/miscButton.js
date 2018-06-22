
//File contains all the functionality for the misc buttons

// Function Names
// enableMiscButtons()
// closeModal()
// aboutModal()
// playModal()

//Enables all the functionality of the misc buttons
//Misc buttons never get turned off
const enableMiscButtons = () => {
  $("#aboutButton").on("click", aboutModal);
  $("#howToPlayButton").on("click", playModal);
  $("#resetButton").on("click", resetGame );
  $("#closeButton").on("click", closeModal);
  $("#closePlayButton").on("click", closeModal);
}

//Function to close the 'About' and the 'How to Play' modals
const closeModal = () => {
  $("#modal-aboutTextbox").hide(400);
  $("#modal-playTextbox").hide(400);
  $("#modal").hide(400);
}

//Function to display the 'About' modal
const aboutModal = () => {
  $("#modal").show(400);
  $("#modal-aboutTextbox").show(400);
}

//Function to display the 'How to Play' modal
const playModal = () => {
  $("#modal").show(400);
  $("#modal-playTextbox").show(400);
  $("#modal-playTextbox").attr("diplay", "flex");
}
