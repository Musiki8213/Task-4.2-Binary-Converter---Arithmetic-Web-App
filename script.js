    document.getElementById("convertBtn").addEventListener("click", function () {
    const from = document.getElementById("fromNumber").value;
    const to = document.getElementById("toNumber").value;
    const input = document.getElementById("inputNumber").value;
    let result = "";

    if (from === "binary" && to === "decimal") {
      result = parseInt(input, 2);
    } else if (from === "decimal" && to === "binary") {
      result = parseInt(input, 10).toString(2);
    } else {
      result = input;
    }

    document.getElementById("outputNumber").value = result;
  });

    document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("fromNumber").selectedIndex = 0;
    document.getElementById("toNumber").selectedIndex = 0;
    document.getElementById("inputNumber").value = "";
    document.getElementById("outputNumber").value = "";
  });


  

  document.getElementById("calcBtn").addEventListener("click", function () {
    const bin1 = document.getElementById("binary1").value;
    const bin2 = document.getElementById("binary2").value;
    const op = document.getElementById("operation").value;

    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("calcResult").textContent = "Invalid binary input";
      return;
    }

    let result;
    if (op === "add") {
      result = num1 + num2;
    } else if (op === "subtract") {
      result = num1 - num2;
    } else if (op === "multiply") {
      result = num1 * num2;
    }

    document.getElementById("calcResult").textContent = result.toString(2);
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("binary1").value = "";
    document.getElementById("binary2").value = "";
    document.getElementById("calcResult").textContent = "";
    document.getElementById("operation").selectedIndex = 0;
  });
