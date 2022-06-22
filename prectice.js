console.log("vikas")
let arr = [1, 2, 3];
console.log(typeof arr);
let cond = true;
let vikas = new Promise(function(resolve, reject) {
    if (cond) {
        resolve("it is susses");
    } else {
        reject("it is error");
    }
});