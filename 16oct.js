//hosting
var a;
console.log(a);
a=10;

//op undefined


let a;
console.log(a);
a=10;

//o/p: undefined


const b;
console.log(b);
b=20;

    //op : error

//temporal dead zone (imp)



greet();
function greet(){
        console.log("hi");
    };

console.log(res);

const res = greet()=>{
    console.log("print");
};

//console : the inner function access the outer function update it in outer fun (update happened in inner func) and uses it further

// CLOSURE
function account(){
    let balance=1000;
    function deposit(amount){
        balance=balance+amount
        console.log("balance amount: "+ balance);
    }
    return deposit;
}
const myacc=account();
myacc(500);
myacc(700);

//async
//promise
