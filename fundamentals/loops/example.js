// For Loop

for (let number=1; number <= 5; number+=1){
    console.log(number);
}

// Exercise
// Q1: Create a shopping list with 5 items, each items with a name and price
// Using your previous understanding of arrays and objects,
// Show the items we can afford assuming we have 500 to spend.

let shoppingList = [
    {name: 'Cake', price:200},
    {name: 'Biscuit', price:500},
    {name: 'Coke', price:200},
    {name: 'Candle', price:250},
    {name: 'Cream Crackers', price:150},
]

let budget = 500;

for (let index=0; index<shoppingList.length; index+=1){
    // Write our code
    if (shoppingList.at(index).price <= budget){
        console.log(shoppingList.at(index).name)
        budget -= shoppingList.at(index).price
    }
}

// Exercise:
// Q1: Write a loop that prints out the first 5 even numbers.

// Q2: Write a loop that prints from a list of words; the only ones
// that begin and end with a consonant.

// Q3:
// Loop through all numbers from 1-15 and print
// "Fizz" if the number is only divisible by 3
// print "Buzz" if the number is only divisible by 5
// print "FizBuzz" if the number is divisible by both 3 and 5
// and print the number otherwise.

// Q4:
// Create a list containing people; each person should have a name
// an age and height. Loop through this list and for each person print
// A statement like this:
// "Hi my name is [name], I am [age] years old and I am [height] tall."

// Q5:
// Write a code that checks from a list of items in a shop and 
// only shows us items that are less than or equal to our purchasing
// power. For example, if I can only afford 1000, I should only see
// items that are 1000 or less.

// Q6:
// Create a shopping list and  a list of item available in a shop.
// Your shopping list should have a budget for each item for example
// N10 for Cake. And the list of items available in a shop should also 
// have prices for example Cake 100.
// Now assume you are going to the shop to buy the items on your list,
// Once you buy an item, remove it from your list.
// Note that you can only buy items that are less or equal your budget
// At the end of the shopping, lets see the items you purchased, how much
// money you have left and the items not yet purchased.