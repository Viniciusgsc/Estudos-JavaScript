const names = ["Vinicius", "Joao", "Outro", 10, false]; // ARRAY

const teste = names[0] // vendo o elemento 0 do array

console.log(teste);

names.push('Pedro'); //adicionano no final lista

console.log(names);

names.unshift("Fernanda"); // adiconando no inicio da lista

console.log(names);

names.pop(names); // removendo o ultimo elemento

console.log(names);

names[3] = 'Gustavo' // altereando o elemento da 3 posicão

console.log(names);

console.log(names.indexOf('Vinicius')); // vendo a posição do elemento na lista
console.log(names.length) // total de elementos na lista

// -------------- MAP - FILTER E REDUCE --------------//

const numbers = [1, 2, 3, 4, 5];

const numberMultipliedByTwo = numbers.map(function(number){
    return number * 2
})

console.log(numberMultipliedByTwo);

const ages = [0, 13, 27, 30, 22, 40];

const avenages = ages.filter(function(age){
    return age % 2 === 0;
});

console.log(avenages);

const sumOfAges = ages.reduce(function(age, acumulator){
    return acumulator + age;
}, 0);

console.log(sumOfAges);