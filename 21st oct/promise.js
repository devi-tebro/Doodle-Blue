//task  
const bank= new Promise((resolve, reject)=>{
    const payment="success";
    if (payment==="success"){
        resolve("payement successful");
    }
    else{
        reject(new Error("payment failed"));
    }
});

bank
.then((result)=>console.log(result))
.catch((error)=>console.log(error));