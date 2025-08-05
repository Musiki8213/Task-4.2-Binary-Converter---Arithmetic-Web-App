
function hideAllForms() {
  fileForm.style.display = 'none';
  temForm.style.display = 'none';
  scieForm.style.display = 'none';
  metricform.style.display = 'none';
}

const  plusBtn = document.getElementById("increase");
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
}
);
//FILE TRANSFER
const fileBtn = document.getElementById("FileTransferBtn")
const fileForm = document.getElementById("fileTransDiv")


function fileShow(){
    hideAllForms()
     if (fileForm.style.display === 'none' || fileForm.style.display === '') {
      fileForm.style.display = 'block';
      
    }
    else {
      fileForm.style.display = 'none';
    }
}

//TEMPERATURE


const tempBtn = document.getElementById("TempetatureBtn")
const temForm = document.getElementById("tempDiv")


function tempShow(){
    hideAllForms()
     if (temForm.style.display === 'none' || temForm.style.display === '') {
      temForm.style.display = 'block';
    }
    else {
      temForm.style.display = 'none';
    }
}

//SCIENTIFIC


const scieBtn = document.getElementById("ScientificBtn")
const scieForm = document.getElementById("scientDiv")


function scienShow(){
    hideAllForms()
     if (scieForm.style.display === 'none' || scieForm.style.display === '') {
      scieForm.style.display = 'block';
    }
    else {
      scieForm.style.display = 'none';
    }
}



//METRIC

const metricBtn = document.getElementById("MetricBtn")
const metricform = document.getElementById("metricDiv")


function metricShow(){
    hideAllForms()
     if (metricform.style.display === 'none' || metricform.style.display === '') {
      metricform.style.display = 'block';
    }
    else {
      metricform.style.display = 'none';
    }
}