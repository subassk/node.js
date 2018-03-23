//two numbers x and y equal to 4 and 7 respectively. Sum x and y and square the result using Promise

let x = 4;
let y = 7;

sumOfNum(x,y)
    .then(function(result) {
        console.log(`sum result is ${result}`);
        return square(result);
    })
    .then(function(sqrResult) {
        console.log(`square result is ${sqrResult}`);
    })
    .catch(function(err) {
        console.error(`Error Received: ${err}`);
    });

function sumOfNum(x,y){
    return new Promise(function(resolve, reject) {
        if(isNaN(x) || isNaN(y)) {
            reject(new Error("Not a valid number"));
        } else {
            resolve(x + y);
        }
    })
}

function square(num){
    return new Promise(function(resolve, reject){
        if(isNaN(num)){
            reject(new Error ("Not a Number"));
        }
        else{
            let z = num * num;
            resolve(z);
        }
    });
}
