const email ="adnan@ai.com"
if(email){
    console.log("GOT THE EMAIL");
}
else{
    console.log("DONT HAVE USER EMAIL");
}

//falsy =>values that evaluate to false when used in a Boolean context 
//false,0,-0,NaN,null,undefined,"",BigInt 0n

//truthy values
// "0" , "false" , [] , {} , function(){}


//****CHECK WHETHER AN ARRAY IS EMPTY OR NOT */
const arr =[];
if(arr.length===0){
    console.log("ARRAY IS EMPTYY");
}

//****CHECK WHETHER AN OBJECT IS EMPTY OR NOT */
const Obj ={};
if(Object.keys(Obj).length===0){
    console.log("OBJECT IS EMPTYY");
}


//************NULL COALESCING OPERATOR**********
let val1;
//val1 = 5??15;                  //IF THE FIRST VALUE IS NULL OR UNDEFINED IT WILL 
val1 =null??10;                 // ASSIGN SECOND OTHERWISE FIRST VALUE WILL BE ASSIGNED
console.log(val1);


//*********TERNIARY OPERATOR********* */

//condition ? true : false;
val1==10 ? console.log("YEAH THIS IS TRUE") : console.log("I KNEW IT WAS FALSE");

