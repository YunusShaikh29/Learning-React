let age: number = 23

let userName:string;

userName = '23'

let person: {}

person = {
    name: 'yunus', 
    age: 21,
    jobless: true
}

// person = 23

let users: string[] = ['something', 'value', 'data']

let newPerson: {
    name: string,
    age: number,
    isDeveloper: boolean
}

newPerson = {
    name: 'Yunus',
    age: 21,
    isDeveloper: true
}


/* WE can create an array full of a specific type of object with this syntax 👇 */
let people: {name: string, age: number}[];

people = [{name: '25', age: 21 }, {name: 'Josh', age: 32}]


/* Type  Inference! */

// In type Inference, typescript tries on it's own to set a type based on the value we put in a variable!
// So in our example we didn't specify the type, but still when we try to reassign a number to our variable, it gives us error! Saying that number is not assignable to type string! Which is a good feature.

// let myString = 'NextJs Developer'
// myString = 21  //gives error


/* Union types:

Union types allow us to add more flexible and values and types! For example a number or a string to be stored in a variable.
*/
let course: (string | number )[]

course = [21, 22,23,34, 'something', 'anything', 'string3']


/* Type Aliases */

type newPerson = {
    name: string,
    age: number,
    learningReact : boolean
}

let person1: newPerson;

person1 = {
    name: 'Auof', 
    age: 21,
    learningReact: true
}

let person2: newPerson = {
    name: 'Hady', 
    age: 21, 
    learningReact: true
}


function addition(a:number, b:number){
    return a + b
}

function printOutput(value: any){
    console.log(value);
}