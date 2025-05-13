//***********REDUCE METHOD********** */

//reduce takes a callback that accumulates a value (acc) 
// as it iterates through the array.

const myNums=[1,2,3]
const initialVal =0;
const mytotal= myNums.reduce((accumalator,currval)=>{
    return accumalator =accumalator+currval
},initialVal)       //initialVal provide first val to the acc

//in simple syntax(MOSTLY USED)
const total =myNums.reduce((acc,curr)=> acc =acc+curr,0);
console.log(total);



//example of adding price in a cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);