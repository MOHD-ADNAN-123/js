//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

//TO AVOID POLLUTION FROM GLOBAL SCOPE
(function chai(){
    console.log("CONNECTED");
})() ;                  // SEMICOLON IS USED TO END IT(*must use)

//IIFE WILL BE EXECUTED IMMEDIATELY


//**************CAN BE USED WITH ARROW FUNCTION*******
(()=>{
    console.log("CONNECTED AGAIN");
})();

//****WITH PARAMETERS ALSO ****/
((name)=>{
    console.log(`WELCOME ${name}`);
})("ADNAN");