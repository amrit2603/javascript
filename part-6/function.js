// function tea(typeofTea) {
//     return `making ${typeofTea}`    
// }
// let greet = tea("lemon Tea")
// console.log(greet);


function orderTea(teaType) {
    function confirmOrder() {
        return "order confirmed for chai";
    }
    return confirmOrder()
}
let ele = orderTea("chai")
console.log(ele);
