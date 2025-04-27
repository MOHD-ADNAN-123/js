// ********************************** STRINGS *****************************************

//String interpolation
// Backticks(``) are used to write statement and if we want to inject variable, we use ${variablName}

let name = "ADNAN"
let age =19;
let AnotherName = "UTKARSH";
let aage="20"
console.log(`MY NAME IS ${name} and my age is ${age}`);
console.log(`MY NAME IS ${AnotherName} AND MY AGE IS ${aage}`);



// ANOTHER WAY TO DECLARE A STRING ---> USING NEW KEYWORD


const StrName = new String("Adnannnnnnnnnn")
// THIS METHOD PROVIDE US MULTIPLE METHODS EXTRAS LIKE INDEX, LENGTH ETC.. WHICH ARE SHOWN BELOW

// console.log(StrName.length)   // ---> LENGTH
// console.log(StrName[5]);      // ---> INDEXING
// console.log(StrName.charAt(5));    // ---> DEFAULT VALUE INSIDE CHARAT IS 0
// console.log(StrName.indexOf("D")); //  ---> IF THE CHARACTER IS NOT PRESENT , RETURNS -1
// console.log(StrName.toUpperCase());   //---> IT DOES NOT CHANGE OUR ORIGINAL STRING

//SLICING OF STRING USING SUBSTRING
const StrName1 = StrName.substring(0,4)   // ---> LAST INDEX DONT COUNT
console.log(StrName1);

// SLICING USING .SLICE
const StrName2 = StrName.slice(0,4)     // ---> WE CAN ALSO GIVE NEGATIVE VALUES

// TO REMOVE STARTING AND TRAILING SPACES- ---> TRIM FUNCTION
StrName3 = "     adnan     "
console.log(StrName3.trim())

//TO REPLACE --->   STRINGNAME.REPLACE('OLD_VALUE','NEW_VALUE')
let StrName4 = "MYHBFDSBKFVDHBHHHCOSDLNFCBHVHCND"
console.log(StrName4.replace('BHH','--'));

//TO SPLIT A STRING -- STRINGNAME.split(splitter)
//GIVE OUTPUT IN ARRAY
console.log(StrName4.split('B'));


