const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //compara elemento 2 con el elemento 5 falso
console.log(first == third); //compara elemento 2 con el ultimo eleemento 2 verdadero

