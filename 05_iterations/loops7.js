//******************MAP******************* */

const Mynum =[1,2,3,4,5,6,7,8,9,10]

//ADD 10 TO EVERY NUMBER
const newNum =Mynum.map((num)=>{
    return num=num+10;
})
//console.log(newNum);

//CHAINING =>WE CAN USE FUNTION AFTER FUNCTION
const UserNum = Mynum
.map((num)=>{return num*10})       //MULTIPLICATION WILL BE DONE FIRST  
.map((num)=>{return num+1})        //1 WILL BE ADDED AFTER MULTIPLICATION
.filter((num)=>{return num>=50});       

//console.log(UserNum);

