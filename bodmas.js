function evaluateBinaryExpression(expr) {
  // Replace binary numbers with decimal equivalents
  const replaced = expr.replace(/\b[01]+\b/g, match => parseInt(match, 2));

  try {
    // Evaluate expression in decimal (BODMAS respected)
    const decimalResult = eval(replaced);
    // Convert result back to binary
    const binaryResult = decimalResult.toString(2);
    return binaryResult;
  } catch (error) {
    return "Invalid Expression";
  }
}

function calculateBinaryBODMAS() {
  const expr = document.getElementById("binaryExpression").value;
  const result = evaluateBinaryExpression(expr);
  document.getElementById("bodmasResult").textContent = result;
}
