//************************* DATE **********************************//

const Date1 = new Date();                       //---> OBJECT TYPE
console.log(Date1.toString());                  //---> THEY WILL GIVE IN DIFFERENT FORMATS
console.log(Date1.toDateString());
console.log(Date1.toLocaleDateString());    //--->VERY IMP METHOD


// FORMAT TO GIVE DATE  --> new Date(YEAR , MONTH , DAY)   -->(MONTH START FROM 0)
const Date2 = new Date(2023 , 0 ,12)
console.log(Date2.toDateString());

//ANOTHER FORMAT   -- MM/DD/YY
const Date3 = new Date("01-14-2024")
console.log(Date3.toLocaleString());
console.log(Date1.getTime());      //---> GIVE THE TIME FROM STANDARD 1970 IN MILISECOND



let TimeStamp = Date.now()
console.log(TimeStamp);    //--> GIVE THE ANSWER IN MILISECOND 

console.log(Math.floor(TimeStamp/1000));  // ---> IN SECONDS

let Date4 = new Date()
console.log(Date4.getDay());
console.log(Date4.getMonth());     //----> SIMILARLY WE HAVE DIFFERENT DIFFERENT FUNCTION



