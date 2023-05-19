// pobieramy formularz i dodajemy nasłuchiwanie na submit
const form = document.getElementById('exercise-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // zapobiegamy domyślnej akcji przesłania formularza

  // pobieramy wartości wybrane przez użytkownika
  const type = document.getElementById('type').value;
  const daysPerWeek = document.getElementById('days').value;

  // generujemy listę ćwiczeń na podstawie wyborów użytkownika
  const exerciseList = generateExerciseList(type, daysPerWeek);

  // wyświetlamy listę ćwiczeń na stronie
  const exerciseListContainer = document.getElementById('exercise-list');
  exerciseListContainer.innerHTML = exerciseList;
}

function generateExerciseList(type, daysPerWeek) {
    let exerciseList = [];
  
    if (type === 'siłowe') {
      const exercises = ['Przysiady', 'Pompki',  'Deska', 'Mountain climbers','Wspięcia na palce',];
      exerciseList = exercises.slice();
  
      if (daysPerWeek >= 2) {
        exerciseList.push('Brzuszki');
      }
      if (daysPerWeek >= 3) {
        exerciseList.push('Przysiady sumo');
      }
      if (daysPerWeek >= 4) {
        exerciseList.push('Wiosłowanie');
      }
      if (daysPerWeek >= 5) {
        exerciseList.push('Podciąganie na drążku');
      }
      if (daysPerWeek >= 6) {
        exerciseList.push('Przysiady z hantlami');
      }
      if (daysPerWeek === 7) {
        exerciseList.push('Bieganie');
      }
    }
  
    if (type === 'cardio') {
      const exercises = ['Bieganie','Rower stacjonarny','Jazda na hulajnodze','Skakanka','Jazda na rolkach',];
      exerciseList = exercises.slice();
  
      if (daysPerWeek >= 2) {
        exerciseList.push('Jazda na rowerze');
      }
      if (daysPerWeek >= 3) {
        exerciseList.push('Taniec');
      }
      if (daysPerWeek >= 4) {
        exerciseList.push('Pływanie');
      }
      if (daysPerWeek >= 5) {
        exerciseList.push('Nordic walking');
      }
      if (daysPerWeek >= 6) {
        exerciseList.push('Kręgle');
      }
      if (daysPerWeek === 7) {
        exerciseList.push('Piłka nożna');
      }
    }
  
    if (type === 'kalistenika') {
      const exercises = ['Pompki diamentowe','Szczupak', 'Dipy','Pajacyki','Plank z unoszeniem rękami'];
      exerciseList = exercises.slice();
      if (daysPerWeek >= 2) {
        exerciseList.push('Brzuszki');
      }
      if (daysPerWeek >= 3) {
        exerciseList.push('Mountain climbers');
      }
      if (daysPerWeek >= 4) {
        exerciseList.push('Przysiady sumo');
      }
      if (daysPerWeek >= 5) {
        exerciseList.push('Podciąganie na drążku');
      }
      if (daysPerWeek >= 6) {
        exerciseList.push('Kołyska');
      }
      if (daysPerWeek === 7) {
        exerciseList.push('Bieganie');
      }
    }
    
    // generujemy listę ćwiczeń w formie listy nieuporządkowanej
    const listItems = exerciseList.map(exercise => `<li>${exercise}</li>`).join('');
    const exerciseListHTML = `<br><h3>Oto twój plan ćwiczeń na dziś:</h3><ul>${listItems}</ul>`;
    
    return exerciseListHTML;
}
