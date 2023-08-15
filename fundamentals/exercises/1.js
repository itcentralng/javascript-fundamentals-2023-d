// Q1: Your task is to implement a function Step counter that:
// 1. takes a single parameter K
// 2. Returns a new object representing counter with the initial value of 0
// and with 3 methods:
//          1. Increment: Increment the current value by K
//          2. Decrement: Decrement the current value by K
//          3. Get value: reutrns the current value







const stepCounter = (k)=>{
    value = 0;
    return {
        increment: ()=>{
            value += k
        },
        decrement: ()=>{
            value -= k
        },
        getValue: ()=>{
            return value
        },

    }
}

counter = stepCounter(3)

counter.increment()
console.log(counter.getValue());
counter.increment()
console.log(counter.getValue());
counter.increment()
console.log(counter.getValue());
counter.decrement()
console.log(counter.getValue());