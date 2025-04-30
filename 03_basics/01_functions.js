//********************FUNCTIONS****************

//PARAMETERS => WHICH IS PASSED AT FUNCTION DEFINATION
//ARGUMENTS => WHICH IS PASSED AT FUNCTION CALLING


//************************DECLARATION*********8

function Myfunc(){
    console.log("HELLO");
}
//Myfunc();    // FUNCTION CALLING 
//**************************** */

//***ADDING TWO NUMBERS USING FUNCTION */
function Add2Number(num1,num2){
    let c =num1+num2;
    console.log(c);   
}
Add2Number(3,4);


//******************************************** */
function AddTWONumbers(num1,num2){
    console.log(num1+num2);   
}
const resultt =AddTWONumbers(3,4); //it will print because of console log
console.log("RESULT IS ",resultt);

//RESULT IS UNDEFINED BEACUSE THERE IS NO RETURN 
//************* */

function Add2Numbers(num1,num2){
    return(num1+num2);   
}
const result =Add2Numbers(3,4);
console.log("RESULT IS ",result);

//RESULT IS 7 BEACUSE WE USE RETURN STATEMENT

//NOTE ==> AFTER RETURN WE CANNOT EXECUTE ANY LINES IT BECOMES UNREACHABLE
// //*********************************************** */


//******* FUNCTION WHEN SOMEONE LOGGED IN */
function Loggedin(username){
    if(username === undefined){
        console.log("Please enter a username"); 
    }
    else{
        return `${username} just logged in`
    }
    
}
console.log(Loggedin("Adnan"))
console.log(Loggedin())             //UNDEFINED JUST LOGGED IN
