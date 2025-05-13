//****** FOR OF *********
//WE DONT NEED TO INITIALIZE AND MODIFY

const myArr =[1,2,3,4,5]
 
for (const element of myArr) {
    //console.log(element);
}

//CAN BE USED IN STRINGS ALSO
let str ="MY NAME IS HELLO WORLD"
for (const i of str) {
    if(i==' ') continue
    //console.log(`CHARACTERS ARE ${i}`);
}


//************ MAPS ***********
//COLLECTION OF KEY VALUE PAIR ==> EACH VALUE IS UNIQUE

//declaration
const map =new Map()

//inserting values 
map.set('IN',"INDIA")
map.set('US',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

console.log(map);

//for of in maps
for (const [keys,value] of map) {
    console.log(keys, " ", value);   // WE CAN GET ANY ONE OF THESE VALUES ALONE ALSO 
}

//OBJECTS ARE NOT ITERATABLE USING THESE METHODS
