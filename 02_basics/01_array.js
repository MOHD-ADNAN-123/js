//***************ARRAYS  ==> NON PRIMITIVE TYPE*******************


//DECLARATION

//1ST
const MyArr = [0 , 1 , 2 , 3 , 4 , 5]
const Myheroes =["adnan","Utkarsh","Akshay"]

//2ND
const Arr =new Array(1,2,3,4);


//ACCESSING THE ELEMENT
console.log(MyArr[3]);   //ZERO BASED INDEXING


// ***********************METHODS OF ARRAY*****************************8 


//PUSH METHOD => TO ADD A NEW ELEMENT
MyArr.push(6);
console.log(MyArr);

//POP => REMOVE LAST VALUE 
MyArr.pop()
console.log(MyArr);

//UNSHIFT => ADD VALUE AT THE STARTING
MyArr.unshift(7);
console.log(MyArr);

//SHIFT => TO REMOVE THE FIRST ELEMENT
MyArr.shift(); 

//INCLUDES => TO SEARCH FOR A VALUE 
console.log(MyArr.includes(8));
console.log(MyArr.includes(4));

//INDEXOF => TO GET A INDEX OF ANY ELEMENT
console.log(MyArr.indexOf(8));    //-1 ->IF NOT PRESENT
console.log(MyArr.indexOf(4));


//ARRAY TO STRING(COMMA SEPARATED)
const MyArr2 =MyArr.join();
console.log(MyArr2);
console.log(typeof MyArr2);



//****SLICE & SPLICE*****

console.log("A ", MyArr);  //=>ORIGINAL ARRAY

//SLICE
const Myn1 = MyArr.slice(1,3)   //=>3 EXCLUDED
console.log(Myn1);              //=>COPY OF ORIGINAL
console.log("B ", MyArr);        //NO CHANGE IN ORIGINAL ARRAY


//SPLICE
const Myn2 =MyArr.splice(1,3);  //=>3 INCLUDED
console.log(Myn2);              
console.log("C ", MyArr);       //=>CHANGE IN ORIGINAL ARRAY









 




