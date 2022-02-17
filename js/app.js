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
function getInput(inputName) {
  const inputText = document.getElementById(inputName + "-input");
  const input = parseFloat(inputText.value);
  return input;
}

function getExpenses(food, rent, clothes) {
  const expenses = food + rent + clothes;
  return expenses;
}
function getBalance(incomeAmount, expensesAmount) {
  const balance = incomeAmount - expensesAmount;
  return balance;
}
// enable disabled buttons when input is filled
enableButton("calculate", "calculate");
enableButton("save", "save");
// calculate button handle
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const income = getInput("income");
    const foodExpense = getInput("food");
    const rentExpense = getInput("rent");
    const clothesExpense = getInput("clothes");
    const totalExpenses = document.getElementById("total-expenses");
    const totalBalance = document.getElementById("total-balance");
    // expense calculation
    const expenses = getExpenses(foodExpense, rentExpense, clothesExpense);
    // balance calculation
    const balance = getBalance(income, expenses);
    // show output
    totalExpenses.innerText = expenses;
    totalBalance.innerText = balance;
  });
