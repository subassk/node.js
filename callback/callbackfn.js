//two numbers x and y equal to 7 and 4 respectively. Sum x and y and square the result using callback


sumOfNum(3,4,function(result){
    console.log(`The sum of two numbers ${result}`);
    square(result);
})

function sumOfNum(x,y,callback){
    z = x + y;
    callback(z);
}

function square(num){
   var  sqresult = num * num;
   console.log(sqresult);
}
