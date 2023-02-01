const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //muestra el valor de la variable "value"
console.log(secondKey);//muestra los elementos del arreglo [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//muestra el primer elemento del arrego secondkey que es "0"
console.log(willThisWork);//muestra segundo elmento del arreglo cuyo valor se guardo en willThisWork