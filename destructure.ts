const person:{personName:string, age:number, isAdmin:boolean} = {
    personName: 'Hafiz',
    age: 53,
    isAdmin: true,
}

const {personName, age} = person; // object destructure;


const arrays = ['Abdullah', 17];

const [, userAge] = arrays;