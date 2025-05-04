//*****************CONTROL FLOW****************

//********if********* 
if(2==="2"){                           //False
    console.log("CORRECT");
}
//NOTE => '===' ALSO CHECK THE DATATYPE

//********if and else******** 
if(2=="2"){                          //True
    console.log("Executed");
}
else{
    console.log("NOT EXECUTED");   
}

//CAN ALSO WRITE IN ONE LINE
const balance =500;
if(balance>400) console.log("ENOUGH BALANCE");


//************IF ,ELSE IF AND ELSE************ */
let marks=75;
if (marks>=90) {
    console.log("Grade: A");
} else if (marks>=75) {
    console.log("Grade: B");
} else if (marks>=60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// WE CAN ADD CONDITIONS USING &&(AND) , ||(OR)
const age =20;
const bal =500;
if(age>18 && bal >400){
    console.log("CAN BUY THE TICKET");
}
else if(age>18 || bal>400){
    console.log("GO TO HELP DESK"); 
}


//**********SWITCH CASE*********** 
switch (marks) {
    case :
        
        break;

    default:
        break;
}
