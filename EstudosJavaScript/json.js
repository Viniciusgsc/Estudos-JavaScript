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

const todosJSON = JSON.stringify(todos);//transformando objeto em JSON
const todosList = JSON.parse(todosJSON) //Transformando JSON em Lista

console.log(todosJSON)
console.log(todosList)