// Q1. Create 5 arrays 1 for each of the following:
//      - float
//      - integer
//      - string
//      - boolean
//      - mixed of all the above

list_of_floats = [1.2, 2.5]
list_of_ints = [1, 2]
list_of_strings = ['Nasir', 'Mustapha']
list_of_booelans = [true, false]
mixed_list = [1, 1.2, 'Nasir', true]

console.log(list_of_floats)
console.log(list_of_ints)
console.log(list_of_strings)
console.log(list_of_booelans)
console.log(mixed_list)

// Q2. Create an object that describes a certain student, 
// showing information about the student that includes: the student's:
//  - name, age, gender, school, class
//  - performace in the following subjects:
//      - english, maths, physics

student = {
    name: 'Muhmmad Haruna',
    age: 10,
    gender: 'male',
    school: 'Overcommers International School',
    class: 'Primary 2',
    performance: [
        {subject: 'english', score:50},
        {subject: 'maths', score:50},
        {subject: 'physics', score:50},
    ]
}

console.log(student)

// Q3. // Consider the following array:
var fruits = ["apple", "banana", "orange"];
// How can you check if 'grapes' is present in the array?

console.log(fruits.includes('grapes'))

// Q4 // How would you convert a string containing a number, like "42", into an actual number in JavaScript?
// a) parseInt("42")
// b) Number("42")
// c) parseFloat("42")
// d) toNumber("42")

console.log(parseInt("42"))

// Q5 // How do you check the data type of a variable in JavaScript?
// a) checkTypeOf(variable)
// b) typeof variable
// c) variable.type()
// d) typeOf(variable)

sample_vairable = "Musa Saleeh"
console.log(typeof(sample_vairable))