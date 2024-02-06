function totalPrice ( pant, shirt, shoe){
    const pantprice = 500;
    const shirtprice = 300;
    const shoesprice = 400;
   const pantTotalprice = pantprice * pant;
   const shirtTotalprice = shirtprice * shirt;
   const shoeTotalprice = shoesprice * shoe;

   const allPrice = pantTotalprice + shirtTotalprice + shoeTotalprice;
    return allPrice;
}

const allquantityprice = totalPrice(2, 3, 1);
console.log(allquantityprice);