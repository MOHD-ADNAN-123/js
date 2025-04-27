let score = "33"

//console.log(typeof score);


//TO CONVERT IT FROM STRING TO NUMBER
let value = Number(score)    
//console.log(typeof value);



//SIMILARLY WE HAVE String() , Boolean() etc


//IMPORTANT
let random = "abcd"
let val = Number(random)
//console.log(val);     
//THE OUTPUT IS NaN (NOT A NUMBER) WHOSE TYPE IS NUMBER(a little confusing) 


/* 
Number FUNCTION
NULL -> 0
UNDEFINED -> NaN
TRUE ->1;
FALSE ->0;
*/ 


//Boolean()
let a = 1
let Passs = Boolean(a)
//console.log(Passs);

/*
BOOLEAN FUNCTION
 1--> true
0--> false
""--> false
"AnythingInsideIt"-->true
*/


//String()
let anynum = 10
let StringAnynum = String(anynum)
//console.log(StringAnynum);
//console.log(typeof StringAnynum);


// ************************************** OPERATIONS *******************************************




//TO GET NEGATIVE OF ANY NUMBER
let val1 = 10
let negVal1 = - val1   
//console.log(negVal1);

//CONCATENATION OF STRING
let str1 ="Mohd"
let str2 = "Adnan"
let str3 =str1+str2;
console.log(str3);

//IF THE STRING IS FIRST --> EVERYONE WILL BE CONSIDERED AS STRING
 console.log("1"+2+2); //122
 //FIRST EVERYTHING WILL BE ADD THEN CONVERT TO STRING
 console.log(1+2+"2");  //32


 //+ OPERATOR CONVERT TO NUMBER
 console.log(+true);
 console.log(+false);
   
 console.log(+"");       //FOR EMPTY STRINGS -> OUTPUT IS 0
 console.log(+"adnan");  //FOR NON EMPTY STRINGS -> OUTPUT IS NaN



//PREFIX AND POSTFIX

//POSTFIX => FIRST VALUE IS ASSIGNED THEN IT IS INCREASED
//PREFIX => FIRST VALUE IS INCREASED THEN IT IS ASSIGNED

let x =100
let y =x++;  //FIRST 100 WILL BE ASSIGNED Y

console.log(x); //THEN ITS VALUE WILL INCREASE TO 101
console.log(y);    //100 WAS ASSIGNED

let z = ++ x   //TESTING VALUE FIRST INCREASED TO 102 AND THEN ASSIGNED TO TT
console.log(z);      //OUTPUT WILL BE 102


 
 
 


