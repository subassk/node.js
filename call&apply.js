// call() and Apply()
// The call() and apply() method calls a function with a given "this" value. The difference between call() and apply() is,
//if there are any parameters used in the function then they are listed one after the other using comma as a seperator
//in the call() method and they are listed in array and passed as 1 arg.
// Created by subha jan 1, 2017
var obj1 = {
    name : 'subha',
    age : '38',
    greet: function(){
        console.log(`Hi, I'm ${ this.name } and I'm ${ this.age } years old`);
    }
}

obj1.greet();
obj1.greet.call({name:'ssk',age:'76'});
obj1.greet.apply({name:'sita', age:'72'});

var obj2={
    name:'sita ssk ',
    greet: function(profession){
        console.log(`Hi, I'm ${this.name} and I'm a ${profession}`);
    }
}

obj2.greet('software engineer');
obj2.greet.call({name:'suba ssk'}, 'housewife');
obj2.greet.apply({name:'sita ssk'},['Professor']);
