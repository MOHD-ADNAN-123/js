//this => REFERS TO CURRENT CONTEXT

// const user ={
//     username:"adnan",
//     price:999,

//     welcome: function(){
//         console.log(`${this.username}, welcome to website`);
//         //console.log(this) =>GIVE THE CURRENT CONTEXT
//     }
// }

// user.welcome(); 
// user.username ="sam"       
// user.welcome();

// console.log(this);   //{} => NO CURRENT CONTEXT


//**************************************************88 */
//WE CAN USE THIS INSIDE A FUNCTION
function chai(){
    let username ="adnan"
    console.log(this.username);  //undefined 
}
chai();


//*************ARROW FUNCTION************** */
const Chai = ()=> {
    console.log(this);   //{}
}
Chai();


// SYNTAX      ()=>{}


//BASIC ARROW FUNNCTION
const addTwo = (num1,num2)=> {
    return num1+num2
}
console.log(addTwo(5,10));
 
//IMPLICIT RETURN ARROW FUNCTION  (FOR ONE LINE ONLY) 
//NO RETURN KEYWORD
const add2 = (num1,num2) => num1 + num2

console.log(add2(4,5));