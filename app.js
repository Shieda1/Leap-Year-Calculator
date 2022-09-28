// https://www.omnicalculator.com/everyday-life/leap-year

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');


let yourYear = v; 

btn.addEventListener('click', function() {
  
  result.textContent = `Is it a leap year?               ${isItaLeapYear()}`;
})

// calculation

function isItaLeapYear() {
  return Number(yourYear.value) % 4 === 0 ? 'Yes' : 'No';
}