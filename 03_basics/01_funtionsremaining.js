//****************FUNCTIONS******************** */

//FOR UNKNOWN NUMBER OF PARAMETERS => WE USE REST METHOD
function CartPriceAdder(...num1){
    return num1;
}
console.log(CartPriceAdder(200,400,500));
//NOW WE CAN PASS ANY NUMBER OF VALUES=> IT WILL BE PUT INTO AN ARRAY


//CartPriceAdder(val1,val2,...num1){}
//WHILE CALLING FIRST TWO VALUES WILL GO TO VAL1 AND VAL2 AND REST WILL GO INSIDE AN ARRAY


//***************OBJECTS IN FUNCTIONS************ */
const user ={
    username:"adnan",
    price:199,
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
//or
handleobject({username:"sam",price:399})  //OBJECT

//************************************************* */

//*********ARRAYS IN FUNCTION*****************8 */
const priceArray = [100,200,300]

function handleArray(anyArray){
    return anyArray[1];
}
console.log(handleArray(priceArray));
console.log(handleArray([100,200,300]));

//***************************************************8 */