//Enables all the functionality of the misc buttons
//Misc buttons never get turned off
const enableMiscButtons = () => {
  $("#aboutButton").on("click", aboutModal);
  $("#howToPlayButton").on("click", playModal);
  $("#resetButton").on("click", resetGame );
  $("#closeButton").on("click", closeModal);
  $("#closePlayButton").on("click", closeModal);
}

const closeModal = () => {
  $("#modal-aboutTextbox").hide(400);
  $("#modal-playTextbox").hide(400);
  $("#modal").hide(400);
}

const aboutModal = () => {
  $("#modal").show(400);
  $("#modal-aboutTextbox").show(400);
}

const playModal = () => {
  $("#modal").show(400);
  $("#modal-playTextbox").show(400);
}
