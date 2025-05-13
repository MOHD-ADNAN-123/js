//**********FOR LOOP********* */

for (let i = 0; i < 10; i++) {
    //console.log(i);   
}

//NESTED LOOPS
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        //console.log(`VALUE OF I IS ${i} AND VALUE OF J IS ${j}`);
        //console.log(i + "*" + j + "="+i*j);
        
    }
    console.log(" "); 
}

//********USE OF BREAK & CONTINUE*******

//BREAK
for (let i = 0; i < 20; i++) {
    if(i==10) break;
    //console.log(i); 
}

//CONTINUE  
for (let i = 0; i < 20; i++) {
    if(i==10) continue;
    //console.log(i);
}

//**************ARRAY*********

let Myarr = ["A","B","C","D"] 
for (let index = 0; index < Myarr.length; index++) {
    const element = Myarr[index];
    console.log(element);
}