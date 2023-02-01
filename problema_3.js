const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //imprime el valor de la constante 12345
console.log(hashedPassword); //no esta definida por el una propiedad del objeto

