// enabling buttons when input is filled
function enableButton(inputContainer, buttonName) {
  document
    .getElementById(inputContainer + "-container")
    .addEventListener("keyup", function (event) {
      var inputField = event.target.value;
      if (inputField != "") {
        document
          .getElementById(buttonName + "-button")
          .removeAttribute("disabled");
      } else {
        document
          .getElementById(buttonName + "-button")
          .setAttribute("disabled", null);
      }
    });
}

enableButton("calculate", "calculate");
enableButton("save", "save");
