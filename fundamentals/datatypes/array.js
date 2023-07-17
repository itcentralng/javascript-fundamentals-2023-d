// Initialization
let people = ["Yasir", "Usman", "Bello", "Ramalan"];

let fruits = ["Apple", "Mango", "Cashew", ["Fanta", "Coke", ["Cola", [[[[[]]]]]]]]

let hobbies = ['Swimming', 'Traveling', 'Reading', ['Flying', 'Scuba Diving']]

// Methods
console.log(people.length);
console.log(people.at(3));
console.log(people.concat(hobbies));
console.log(people.includes('Yasir'));
console.log(people.includes('Musa'));
console.log(people.indexOf('Yasir'));
console.log(people.join(' '));
console.log(people.pop());
console.log(people);
console.log(people.push('Musa'))
console.log(people);

console.log(hobbies.at(3).at(1).split(' ').at(1))
console.log(hobbies.at(3).at(1).split(' ').at(1).slice(2, 5))
console.log(hobbies.at(2).slice(0, 4))
console.log(hobbies.at(0).slice(0, 4))
console.log(hobbies.at(2).slice(0, 3).concat(hobbies.at(1).slice(5, 9)))