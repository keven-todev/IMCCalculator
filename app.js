const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m


const form = document.querySelector('form');
form.addEventListener('submit', handleForm);
const score = document.getElementById('score')
const category = document.getElementById('category')

function handleForm(e) { 
  e.preventDefault();

  const sizeInput = document.getElementById("size");
  const weightInput = document.getElementById("weight");
  
  const weightValue = weightInput.value;
  const sizeValue = sizeInput.value;
 
  if (isNaN(weightValue) || isNaN(sizeValue) || weightValue <= 0 || sizeValue <= 0) {
    alert("Veuillez remplir correctement les inputs");
    return;
  };
  
  const calculIMC = (weightValue / Math.pow(sizeValue / 100,2)).toFixed(1);
  const newTab = [];
  newTab.push(calculIMC);
  

  console.log(calculIMC);
  showResult(calculIMC);
}


function showResult(BMI) { 
  const rank = BMIData.find(data => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  }) 

  score.innerText = rank.range;
  category.innerText = rank.name;
  console.log(rank);


 }


 