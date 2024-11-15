/* PRIMITIVE DATATYPE
 7 TYPE ----> STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL ,BIGINT
*/

// symbol is mostly used to define id which are unique 
const id = Symbol(123)
const anotherId = Symbol(123)
//they both are different
console.log(id==anotherId);


/* 
REFRENCE TYPE(NON PRIMITIVE)--->
 ARRAYS , OBJECT , FUNCTIONS


 const heroes =["Iron", "Cap", "Shakti"] ;     ------------> ARRAY

 let obj1 = {                                  ------------> OBJECT
    name : "adnan",
    age : 19,
    rollNo : 121312,
 }

 let func= function(){                         ------------->FUNCTION
    console.log("HELLO WORLD");
    
 }

 */


 //JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE AS WE DO NOT NEED TO DEFINE THE DATATYPE

 //DECIMAL VALUES ALSO COMES UNDER NUMBER DATATYPE