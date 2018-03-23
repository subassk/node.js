/ program to write a call back function
var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName =  lastName;
}

Person.prototype.fullname=function(callback){
    str = `${this.firstName} ${this.lastName}`;
    if (this.firstName == null|| this.firstName == undefined || this.lastName == null || this.lastName == undefined){
        callback(new Error(`The firstname or lastname are empty`));
    }
    else
        callback(null,str);

}
var personA = new Person();

personA.fullname(function(err,str){
    if(err)
        console.warn(err);
    else
        console.log(str);
})
