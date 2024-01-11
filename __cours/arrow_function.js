/*
  On connait 2 manières d'écrire des fonctions en JS
*/
// Function Declaration
function sayHello() {
  // ...
}
// Function Expression
const sayHi = function () {
  // ...
};

/*
  ES6 en ajoute une 3ème
  = fonction fléchée ou ARROW FUNCTION
*/
const sayBye = () => {
  // instructions
};
// les paramètres ne mettent entre les parenthèses
const sayByeWithName = (name) => {
  // instructions
};
// quand il y a UN SEUL PARAMÈTRE, les parenthèses sont optionnelles
const sayByeWithName = name => {
  // instructions
};

// pour le retour, rien de spécial…
const getData = () => {
  // code
  return data;
}
// …sauf quand le retour EST LA SEULE INSTRUCTION
// alors on PEUT oublier les `{}` et le mot-clé `return`
const getAge = (user) => user.age;

/*
  Intérêts

  - moins verbeux
  - plus lisible (la plupart du temps)
*/
document.getElementById('input')
  .addEventListener('click', function (e) {
    return e.target.value;
  });

document.getElementById('input')
  .addEventListener('click', (e) => e.target.value);
