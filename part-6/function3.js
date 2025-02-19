//problem 1

// function makeTea(typeOfTea) {
//     return`serving ${typeOfTea}`
// }
// let greet = makeTea("jamun tea")
// console.log(greet);

//***************************************************************************************************************//


//problem 2

// function orderTea(teaType) {
//     function confirmOrder(){
//         return "order confirmed for chai"
//     }
//     return confirmOrder()
// }
// let greeting = orderTea("Jamun")
// console.log(greeting);




//problem 3

const calculateTotal = (price,quantity) =>price * quantity  // have to use return keyword if we want to write on next line
                                                            // otherwise WRITE ON SAME LINE AS ABOVE

let totalCost = calculateTotal(499 , 100)
console.log(totalCost);
