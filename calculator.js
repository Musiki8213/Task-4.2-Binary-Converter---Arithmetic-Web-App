//Calculator
const calculatorBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");
const output = document.getElementById("binaryResults");

calculatorBtn.addEventListener("click", function () {
  const bin1 = document.getElementById("binary1").value.trim();
  const bin2 = document.getElementById("binary2").value.trim();
  const opera = document.getElementById("operation").value;

  const num1 = parseInt(bin1, 2);
  const num2 = parseInt(bin2, 2);

  if (isNaN(num1) || isNaN(num2)) {
    output.value = "Invalid binary input";
    return;
  }

  let binary;
  if (opera === "add") {
    binary = num1 + num2;
  } else if (opera === "subtract") {
    binary = num1 - num2;
  } else if (opera === "multiply") {
    binary = num1 * num2;
  }

  output.value = binary.toString(2);
});

resetBtn.addEventListener("click", function () {
  document.getElementById("binary1").value = "";
  document.getElementById("binary2").value = "";
  output.value = "";
  document.getElementById("operation").selectedIndex = 0;
});
