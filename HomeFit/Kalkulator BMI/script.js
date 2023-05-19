const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resultContainer = document.querySelector('#bmi-result');
const statusContainer = document.querySelector('#bmi-status');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  if (isNaN(bmi)) {
    resultContainer.textContent = 'Wprowadź poprawne dane';
    statusContainer.textContent = '';
  } else {
    resultContainer.textContent = bmi;
    statusContainer.textContent = getStatus(bmi);
  }
});

function getStatus(bmi) {
  if (bmi < 18.5) {
    return 'Niedowaga';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Waga prawidłowa';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Nadwaga';
  } else if (bmi >= 30 && bmi < 35) {
    return 'I stopień otyłości';
  } else if (bmi >= 35 && bmi < 40) {
    return 'II stopień otyłości';
  } else {
    return 'III stopień otyłości';
  }
}