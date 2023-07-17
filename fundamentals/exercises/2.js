// Q1. Implement a function processOrderList that:

// 1. Takes 3 arguments:
// - An order list named 'orderlist'
// - A number 'orderId' and 
// - A string 'state' that is either processing or delivered. 
// Orderlist is an array of order objects. An order object has 
// the following schema:
// {id:number, state:string}

// 2. Updates the orderlist depending on the state and returns the updated
// list. If the state is processing, it updates the object in the list
// having id as orderId, to have the state processing. If the state is 
// delivered, it deletes the object from the list having the id of orderId.

// 3. If there is no order with the given orderId, then the function returns
// the list orderList unchanged.

const processOrderList = (orderList, orderId, state) => {
    for (let i=0; i<orderList.length; i+=1){
        if (orderList[i].id == orderId){
            if (state != 'delivered'){
                orderList[i].state = state
            }else{
                orderList.splice(i, 1);
            }
        }
    }
    return orderList
}

orderList = [
    {id:1, state:'pending'},
    {id:2, state:'pending'},
    {id:3, state:'pending'},
]
orderId = 1
state = 'processing'

console.log(processOrderList(orderList, orderId, state));