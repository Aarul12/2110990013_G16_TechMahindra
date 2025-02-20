//Reduce:

// const arr = [5,4,3,2,1];
// var sumOfArr = 0;
// for(let i=0;i<arr.length;i++){
//     sumOfArr+=[i];
// }
// console.log(sumOfArr);
// arr.reduce(function(acc, curr){
//     acc+=curr;
//     return acc;

// },0);
// //0 is initial value

// // acc= accumulator(maintain state or count)
// // curr = current(working as a iterator)

// const users = [
//     {firstName: "Pratiyush", lastName:"Ray", age:20},
//     {firstName: "Pratiyus", lastName:"Ray", age:21},
//     {firstName: "Pratiyu", lastName:"Ray", age:22},
//     {firstName: "Pratiy", lastName:"Ray", age:23},
//     {firstName: "Prati", lastName:"Ray", age:24},
//     {firstName: "Prat", lastName:"Ray", age:25},

// ]
// const ans= users.reduce(function(acc,curr){

// },{})



// dataMap = [2,4,5,86,97,47]

// var maxNumber= 0
// for(let i=0;i<WebTransportDatagramDuplexStream.length;i++){
//     if(maxNumber<dataMap[i]){
//         maxNumber = dataMap[i];
//     }
// }

// console.log(maxNumber);

// dataMao.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0)

// console.log(ansMax);

// reachedRestaurant(function(){
//     console.log("I reached")
// }).then(TableFinding).then(MenuCheck).then(PriceCheck).then(Starter).then(MainCourse)

// const myRestaurantPromise = new Promise(resolve,reject){
//     if(1 >time> 2){
//         resolve("Yes Sucessfully reached")
//     }
//     else{
//         reject("CAN'T Reach")
//     }
// }

// createOrder(Cadt,callback){
//     console.log("ORDER CREATION")
//     orderPayment(orderd, callback){
//         console.log("ORDER PAYMENT")
//         orderPayment(orderd, callback){
//             console.log("ORDER PAYMENT")
//         }
//     }
// }

const cart = ["shoes", "clothes" , "serum", "bag"]
function createOrder(cart){
    const myPromise = new Promise(function(resolve, reject){
        if(cart.length>0){
            resolve("12345")
        }
        else{
            const err = new Error("ERROR FAILED")
            reject(err.message);
        }
    });
    return myPromise;
}
function orderPayment(orderId){
    console.log("ORder Payment Successfull", orderId);
}
function orderSummary(orderId){
    console.log("ORder Summary Created", orderId);
}
function updateWallet(){
    console.log("wallet updated");
}


createOrder(cart)
.then(function(orderId){
    return orderPayment(orderId)
})
.then(function(orderId){
    return orderSummary(orderId)
})
.then(function(){
    return updateWallet()
})

createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("ORDER PLACEd SUCCESSFUL", orderId)
// })
// .then(function orderSummary(orderId){
//     console.log("ORDER Summary", orderId)
// })
// // .then(orderPayment(orderId))
// // .then(orderSummary(orderId))
// // .then(updateWallet)

