var person = {
    age : 21
};
person.getage = function(){
    return 0;
}

var a = Object.create(person,{
    age : {
        value : 22
    }
});
console.log(a.__proto__);
console.log(a.getage());

a.__proto__.name = 1;
console.log(person.name);

var b = Object.create(person,{});
b.__proto__.sex = 3;
console.log(a.sex);
console.log(a.age,b.age);

var c = [];
console.log(typeof c);
console.log(c.__proto__);
console.log(c.__proto__ ===  Object.prototype);
console.log(c.__proto__ ===  Function.prototype);
console.log(c.__proto__.__proto__ ===  Object.prototype);


var d = '';
console.log(typeof d);
console.log(d.__proto__);
console.log(d.__proto__ ===  Object.prototype);
console.log(d.__proto__ ===  Function.prototype);





