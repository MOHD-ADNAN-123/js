/* ********************************** NUMBERS **************************************** */

const num1 = 400                // JS AUTOMATICALLY DECIDE IT IS A NUMBER
const num2 = new Number(300)    // WE IMPLICITELY DEFINE IT AS A NUMBER

// console.log(num1);
// console.log(num2);

// WE CAN USE SOME PROPERTIES LIKE CHANGING IT INTO STRING WHEN WE USE NEW KEYWORD
//AND ONCE THE NUMBER IS CONVERTED INTO STRING WE CAN USE MULTIPLE PROPERTIES OF STRING 

// console.log(num2.toString().length);


//VERY IMPORTANT PROPERTY -- WE CAN FIX THE DIGIT AFTER THE DECIMAL
// console.log(num2.toFixed(2));

//ROUND OF AND GIVE THE TOTAL NUMBER OF DIGIT AS INSIDE TOPRECISION
const num3 = 1123.44532
// console.log(num3.toPrecision(5));



// **********************************  MATHS  *******************************************

//MATH LIBRARY IS INBUILT

console.log(Math.abs(-6));        // ----> ABSOLUTE VALUE OF A NUMBER
console.log(Math.round(4.7777));  // ----> ROUND OFF TO NEAREST INTEGER

console.log(Math.ceil(4.2));      // ----> SMALLEST INTEGER GREATER OR EQUAL THAN 4  --> 5
console.log(Math.floor(4.9));      // ----> LARGEST INTEGER SMALLER OR EQUAL THAN 4   --> 4

console.log(Math.max(4,6,8,1,4));   // ---> SIMILARLY MIN IS ALSO PRESENT

//++++++++++++++++++++++++++++++++

//VERY IMP
console.log(Math.random());       //----> GENERATES RANDOM VALUES BETWEEN 0 AND 1

//CONCEPT USE IN DICE ROLLING
console.log((Math.random()*6));   //----> GENERATES A RANDOM VALUE BETWEEN 0 AND 6
console.log((Math.random()*6)+1); //----> GENERATES A RANDOM VALUE BETWEEN 1 AND 6
console.log(Math.floor((Math.random()*6)+1))  //---> TO GENERATES ONLY INTEGER VALUES

// FOR SOME RANGE
const min =10
const max = 20

console.log(Math.floor(((Math.random() * (max - min + 1) + min)))); //--> GENERATE BETWEEN 10 AND 20
// VERY IMPORTANT ,DECODE IT AND UNDERSTAND FROM LINE 39

//+++++++++++++++++++++++++++++++++












