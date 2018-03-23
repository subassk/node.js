// Created Subha - Aug,2017
var Person = {
    firstname : '',
    lastname : '',
    greet : function () {
        return "Hello " + this.firstname + ' '+this.lastname;
    }
}

// Object.create is the simplest and cleanest way to set up inheritance. The object 'suba' & 'ssk' share the
// function 'greet' that is inherited from the object 'Person'
var suba = Object.create(Person);
var ssk = Object.create(Person);

suba.firstname = 'Subha';
suba.lastname  = 'Cheran';
console.log(suba.greet());

ssk.firstname = 'SSk';
ssk.lastname = 'Sita';
console.log(ssk.greet());
