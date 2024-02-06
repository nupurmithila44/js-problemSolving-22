const phones = [
    { name: 'samsung', price: 50000, camera:'12mp', color: 'black'},
    { name: 'iphone', price: 30000, camera:'12mp', color: 'black'},
    { name: 'glaxy', price: 40000, camera:'12mp', color: 'black'},
    { name: 'oppo', price: 90000, camera:'12mp', color: 'black'},
]

function getcheapestphone(phones){
    let min = phones[0];
   for(const phone of phones){
    if(phone.price < min.price){
        min = phone;
    }
   }
   return min;
}
const cheap = getcheapestphone(phones);
console.log(cheap);