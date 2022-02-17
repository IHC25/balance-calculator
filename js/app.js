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
function getSavings(income, save) {
  const savings = income * (save / 100);
  return savings;
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

// save button handle
document.getElementById("save-button").addEventListener("click", function () {
  const save = getInput("save");
  const totalIncome = getInput("income");
  const balanceText = document.getElementById("total-balance").innerText;
  const balanceAmount = parseFloat(balanceText);
  const savingAmount = document.getElementById("total-savings");
  const remainingBalance = document.getElementById("total-remaining");
  // savings calculation
  const savings = getSavings(totalIncome, save);
  // remaining balance calculation
  const remaining = balanceAmount - savings;
  //show output
  savingAmount.innerText = savings;
  remainingBalance.innerText = remaining;
});
