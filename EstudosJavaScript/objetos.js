//Criando um objeto
const person = {
    firstName: 'Vinícius',
    lastName: 'Gabriel',
    age: '18',
    hobbies: ['Assistir Series', 'Assistir Futebol', 'Descansar'],
    dog: {//Criando um objeto dentro de outro objeto;
        name: 'Spayke',
        age: 1,
    },
};
//Acessando as Propriedades
//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

//Realiza a mesma coisa que acima so que simplificado == Destruction
const {firstName: primeiroNome, lastName, age, hobbies, dog:{name:dogName}} = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

const h = person.hobbies[2];
console.log(h)

//person.dog = 'Spayke';
//console.log(person.dog.name);
console.log(dogName)

//lista contendo varios objetos
const todos = [
    {
        id: 1,
        description: 'Estudar Programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'True',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    },

]

//acessando a description do 2 elemento do array;
const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo)