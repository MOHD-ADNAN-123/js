//WE CAN ITERATE OBJECTS USING FOR IN LOOPS

let obj ={
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}
for (const key in obj) {
    console.log(`for key ${key} the value is ${obj[key]}`);
}
//obj[key] ==> value


//**** FOR IN (ARRAY) ******

//for of => give  the values bydefault
//for in => give the keys or index
let arr =["js","rb","java","cpp"]
for (const i in arr) {
    console.log(i);
    console.log(arr[i]);
}

//MAPS ARE NOT ITERABLE USING FOR IN 