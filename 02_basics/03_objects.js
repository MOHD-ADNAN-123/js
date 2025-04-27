//***********************OBJECTS****************** */

// OBJECT CREATED FROM CONSTRUCTOR => SINGLETON
// OBJECT CREATED FROM LITERALS => NOT SINGLETON



//***************USING SYMBOL AS A KEY************** */
// DEFINING A SYMBOL
const mySym = Symbol("Keys");

//USE SQUARE BRACKET INSIDE THE OBJECT

//************************************************* */


//DECLARATION
const User = {
    Name: "ADNAN",
    age: 18,
    [mySym]:"keys1",           //CAN BE ACCESSED USING 2ND WAY ONLY
    email:"adnan@gmail.com",
    location: "DELHI",
    IsLogged: true,
    "full name" :"MOHD ADNAN"   //STRING KEYS CAN ONLY BE ACCESSED USING SECOND METHOD
}

//ACCESSING

//1 
console.log(User.Name);
console.log(User.age);

//2 WAY  
console.log(User["Name"]);  //NEED TO PASS KEYS AS STRINGS
console.log(User["age"]);
console.log(User["full name"]);
console.log(User[mySym]);


//OVERRIDE OR CHANGING THE VALUE
User.email ="adnan@gg.com";
console.log(User["email"]);

//FREEZING A OBJECT
//Object.freeze(User);   //NOW WE CANT CHANGE ANY VALUE

//WE CAN ALSO USE FUNCTIONS
User.greeting = function(){
    console.log("HELLO FROM USER");
}
console.log(User.greeting);   //JUST THE REFRANCE

console.log(User.greeting());  //PROPER EXECUTION



//FUNCTION WITH STRING INTERPOLATION

//THIS CAN ONLY BE USED WHEN WE REFER TO SAME OBJECT 
//HERE THIS WILL REFER TO USER
User.greeting2 = function(){
    console.log(`HELLO FROM ${this.Name}`);
}
console.log(User.greeting2());









