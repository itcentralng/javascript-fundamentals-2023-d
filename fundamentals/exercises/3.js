// An institutiional broker wants to review their books of customers to see
// which are most active. Given a list of trades by customer name, determine
// which customer's account for atleast 5% of the total number of trades.
// Order the list alphabetically ascending by name.
// ["Dialogue", "HP", "iT Central", "Dialogue", "Microsoft", "Dialogue"]



const bestCustomer = (trades)=>{
    let customers = []
    for (let i=0; i<trades.length; i+=1){
        let occurance = 0;
        for (let x=0; x<trades.length; x+=1){
            if (trades[i]==trades[x]){
                occurance+=1
            }
    }
    if ((occurance/trades.length)*100 >= 5){
        if (customers.includes(trades[i]) == false){
            customers.push(trades[i])
        }
    }
}
return customers.sort();
}

trades = ["Dialogue", "Dialogue", "Dialogue", "Dialogue", "Dialogue", "HP", "iT Central", "Dialogue", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Dialogue", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Microsoft", "Apple", "Apple", "Apple", "Apple","Apple", "Apple", "Apple", "Apple", "Apple","Apple", "Apple","Apple", "Apple", "Apple","Apple", "Apple",]

console.log(bestCustomer(trades))