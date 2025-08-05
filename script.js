 //Convert
 
 document.getElementById("convertBtn").addEventListener("click", function () {
    const from = document.getElementById("fromNumber").value;
    const to = document.getElementById("toNumber").value;
    const input = document.getElementById("inputNumber").value;
    let result = "";

    if (from === "binary" && to === "decimal") {
      result = parseInt(input, 2);
    } 
    
    else if (from === "decimal" && to === "binary") {
      result = parseInt(input, 10).toString(2);
    }
    
    else {
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


 