/**
 * 2017-9-20 Xu JiXins
 */
var animal = function(){}
animal.prototype = {
    m : 'respirable',
    n : 'removable', 
    eat : function(){
        console.log('animal.eat')
    }  
}

var mammal = function(){}
mammal.prototype = {
    a : 'viviparity'
}
mammal.prototype.__proto__ = animal.prototype;

var amphibian = function(){}
amphibian.prototype = {
    b : 'oviparity'
}
amphibian.prototype.__proto__ = animal.prototype;

var cow = function(){}
cow.prototype = {
    c : 'herbivorous'
}
cow.prototype.__proto__ = mammal.prototype;

var dog = function(){}
dog.prototype = {
    d : 'omnivorous'
}
dog.prototype.__proto__ = mammal.prototype;

var tortoise = function(){}
tortoise.prototype = {
    e : 'swimming'
}
tortoise.prototype.__proto__ = amphibian.prototype;

var crocodile = function(){}
crocodile.prototype = {
    f : 'carnivore'

}
crocodile.prototype.__proto__ = amphibian.prototype;

var mm = new cow();
var nn = new dog();
var oo = new tortoise();
var pp = new crocodile();
console.log(mm.c);
console.log(mm.m);
mm.eat();

console.log(typeof Object.create(Function,{}))
console.log(typeof Object.create(Function.prototype,{}))