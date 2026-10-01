function myName(a , b){
    let sum = a + b ;
    return sum;
}
let good = myName(10 , 20);
console.log(good);


function addeer(n){
    function add(b){
        console.log(n+b)
    }
    return add;
}

let addTo5= addeer(5);
addTo5(10);
addTo5(25);
let addTo25 = addeer(25);
addTo25(10);
const greet = () => console.log("Hello!");
greet();


const m =(x,y) => x+y;
console.log(m(5,10));


let pr= x => x*x;
console.log(pr(5));

(function() {

  const secretKey = "2563";

  console.log("IIFE initialized with secret key:", secretKey);

})();

let fruits = ["Apple", "Banana", "Cherry"];
const color = ["red", "green", "blue"];
let name = ["Dhruvi","Dhuni","Khushi"];
console.log(fruits);
console.table(fruits);
console.log(fruits[0]); // Output: Apple
console.log(fruits.at(1));
console.log(fruits.push("orange"));
console.log(fruits.at(3));
console.table(fruits);
console.table(color);
console.table(name);
let marge = fruits.concat(color , name );
console.table(marge);
console.table(fruits.copyWithin(2,0,1));
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
