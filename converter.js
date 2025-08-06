function hideAllForms() {
  fileForm.style.display = "none";
  temForm.style.display = "none";
  scieForm.style.display = "none";
  metricform.style.display = "none";
}

const plusBtn = document.getElementById("increase");
const minusBtn = document.getElementById("decrease");
const output = document.getElementById("sizeNumber");
let count = 0;

plusBtn.addEventListener("click", function () {
  count++;
  output.value = count;
});
minusBtn.addEventListener("click", function () {
  count--;
  output.value = count;
});
//FILE TRANSFER
const fileBtn = document.getElementById("FileTransferBtn");
const fileForm = document.getElementById("fileTransDiv");

//Hiding and showing the div
function fileShow() {
  hideAllForms();
  if (fileForm.style.display === "none" || fileForm.style.display === "") {
    fileForm.style.display = "block";
  } else {
    fileForm.style.display = "none";
  }
}

//======================================================TEMPERATURE=========================================//

//Calculations
const tempConvert = document.getElementById("tempConvertBtn");
const finalDegreeResults = document.getElementById("degreeResult");

tempConvert.addEventListener("click", function () {
  const degreeNumber = parseFloat(
    document.getElementById("convertNumber").value
  );
  const selectedOption = document.getElementById("degree").value;
  let degreeResults;

  if (isNaN(degreeNumber)) {
    finalDegreeResults.value = "Enter a valid number";
    return;
  }

  if (selectedOption == "celsius") {
    degreeResults = (degreeNumber * 9) / 5 + 32;

    finalDegreeResults.value = `${degreeResults}°F`;
  } else if (selectedOption == "fahrenheit") {
    degreeResults = ((degreeNumber - 32) * 5) / 9;
    finalDegreeResults.value = `${degreeResults}°C`;
  }
});

//Hiding and showing the div
const tempBtn = document.getElementById("TempetatureBtn");
const temForm = document.getElementById("tempDiv");

function tempShow() {
  hideAllForms();
  if (temForm.style.display === "none" || temForm.style.display === "") {
    temForm.style.display = "block";
  } else {
    temForm.style.display = "none";
  }
}

//=======================================================SCIENTIFIC===============================================//

//Calculations

scientificConvertBtn.addEventListener("click", function () {
  const scientInputNumber = document.getElementById("standardNumber").value;
  const scientificOutputFinal = document.getElementById("scientificOutput");

  if (isNaN(scientInputNumber)) {
    scientificOutputFinal.value = "Enter a valid number";
    return;
  }

  const numberScientificInput = Number(scientInputNumber);
  let scientificOutput = numberScientificInput.toExponential();

  scientificOutputFinal.value = scientificOutput;
});

//Hiding and showing the div

const scieBtn = document.getElementById("ScientificBtn");
const scieForm = document.getElementById("scientDiv");

function scienShow() {
  hideAllForms();
  if (scieForm.style.display === "none" || scieForm.style.display === "") {
    scieForm.style.display = "block";
  } else {
    scieForm.style.display = "none";
  }
}

//===============================================METRIC==================================================//

//Calculations

metricConvertBtn.addEventListener("click", function(){
const metricInputNumber = document.getElementById("valueNumber").value;
 const selectMetricOption = document.getElementById("metricFromValues");
 const selectMetricOption2 = document.getElementById("metricToValues");

//giga
 if(selectMetricOption === "giga" && selectMetricOption2 === "mega" ){
    
    metricInputNumber * 1000;

 }else if(selectMetricOption === "giga" && selectMetricOption2 === "kilo"){
      metricInputNumber * 1000000;
 }
 else if(selectMetricOption === "giga" && selectMetricOption2 === "base unit"){
           metricInputNumber * 1000000000;
 }

 else if(selectMetricOption === "giga" && selectMetricOption2 === "milli"){
                metricInputNumber * Math.pow(10, 12);
 }

 else if(selectMetricOption === "giga" && selectMetricOption2 === "micro"){
              metricInputNumber * Math.pow(10, 15);
 }


//mega
 else if(selectMetricOption === "mega" && selectMetricOption2 === "giga"){
metricInputNumber * 0.001;
 }

 else if(selectMetricOption === "mega" && selectMetricOption2 === "kilo"){
metricInputNumber * 1000;
 }

 else if(selectMetricOption === "mega" && selectMetricOption2 === "base unit"){
metricInputNumber * 1000000
 }

 else if(selectMetricOption === "mega" && selectMetricOption2 === "milli"){
metricInputNumber * Math.pow(10, 9);
 }

 else if(selectMetricOption === "mega" && selectMetricOption2 === "micro"){
metricInputNumber * Math.pow(10, 12);
 }

 //milli
 else if(selectMetricOption === "milli" && selectMetricOption2 === "base unit"){
metricInputNumber * 0.001;
 }

 else if(selectMetricOption === "milli" && selectMetricOption2 === "kilo"){
metricInputNumber * Math.pow(10, -6);
 }

 else if(selectMetricOption === "milli" && selectMetricOption2 === "micro"){
metricInputNumber * 1000;
 }
 else if(selectMetricOption === "milli" && selectMetricOption2 === "mega"){
metricInputNumber * Math.pow(10, -9);
 }
else if(selectMetricOption === "milli" && selectMetricOption2 === "giga"){
metricInputNumber * 1000000000;
 }

//kilo

else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }

 //base unit
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }


 //micro
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
 else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }
else if(selectMetricOption === "" && selectMetricOption2 === ""){
metricInputNumber * Math.pow(, );
 }


});





//Hiding and showing the div
const metricBtn = document.getElementById("MetricBtn");
const metricform = document.getElementById("metricDiv");

function metricShow() {
  hideAllForms();
  if (metricform.style.display === "none" || metricform.style.display === "") {
    metricform.style.display = "block";
  } else {
    metricform.style.display = "none";
  }
}
