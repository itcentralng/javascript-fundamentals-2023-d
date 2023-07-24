function printYasir(){
    console.log('Hi Yasir');
}

printYasir();

const printUsman = ()=>{
    console.log('Hi Usman');
}

printUsman();

const productOf12and6 = ()=>{
    return 12*6;
}

console.log(productOf12and6()+8);

const productOf = (num1, num2) =>{
    return num1*num2;
}

console.log(productOf(12, 6));

const generateUsername = (fullname)=>{
    let minUsernameLength = 5;
    let nameParts = fullname.split(" ");
    let username = "";
    for (let i = 0; i<nameParts.length; i+=1){
        username += nameParts[i].slice(0, 2);
    }
    if (username.length < minUsernameLength){
        let charsLeft = minUsernameLength - username.length;
        charsLeft = "0".repeat(charsLeft)
        username += charsLeft;
    }
    return username.toLowerCase();
}

console.log(generateUsername('Yasir Bello'));
console.log(generateUsername('Usman Ramalan'));

const ageCounter = (dob=2023)=>{
    return 2023 - dob;
}

console.log(ageCounter())
console.log(ageCounter(1990))
console.log(ageCounter(1995))
console.log(ageCounter(2001))

// Q1: Write a function that returns all the even numbers between a given range.
// Q2: Write a function that takes 'budget' and 'items'; where budget is a number
// and items a list of objects containing names and prices of some items. Make it
// such that your function returns a new list containing only the items that are
// less than or equal the budget.
// Q3: Write a function that takes a list of students with their scores in a 
// particular subject and returns a new list of students with their ranking
// from 1 to any number of students their is. 1 being the best.