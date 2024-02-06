// const shopingCart = [
//     { name:'sari', price: 3000, Quntity: 3}, 
//     { name:'chori', price: 200, Quntity: 2}, 
//     { name:'shoes', price: 2000, Quntity: 3}, 
// ]

// function carttotal (products){
//     let total = 0;
//     for(const product of products){
//         total = total + product.price
//     }
//     return total;
// }
// const shopingcost = carttotal(shopingCart);
// console.log(shopingcost);


const shopingCart =[
    { name: 'bent', price: 30, quantity: 3},
    { name: 'khopa', price: 20, quantity: 5},
    { name: 'churi', price: 50 , quantity: 2},
    { name: 'chiruni', price: 10, quantity: 1},
]
function  cartTotal(products){
    let total = 0;
for( const product of products){
    cartavarag = product.price * product.quantity;
    total = total + cartavarag;
}
return total;
}
const shopingcost = cartTotal(shopingCart);
console.log(shopingcost);
