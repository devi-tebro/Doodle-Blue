function checkStock(item){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (item==="shoes") resolve("in stock");
            else reject("out of stock");
        },500);
    });
}
async function buyitem(){
    try{
        const status=await checkStock("shirt");
        console.log(status);
    }catch(err){
        console.log("error",err);
    }
}
buyitem();