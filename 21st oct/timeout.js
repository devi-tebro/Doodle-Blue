console.log("start");
setTimeout(()=>{
    console.log("task completed");
} , 2000);
console.log("continue working");

//

console.log("A");
setTimeout(()=>{
    console.log("B");
},0);
console.log("C");