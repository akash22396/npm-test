// var Person={
//   name : 'Akash',
//   job : 'Dev',
//   age : 25,

//   personInfo: function(){
//     return `${this.name} - ${this.job} - ${this.age}`;
//   }
// }

// var p = { name: "Rajan", job: "Dev", age: 26 };
// // var p = new Person()
// // console.log(Person.personInfo.apply(p));
// console.log(Person.personInfo.call(Person,['ja']));



console.log('Hello world!')















// console.log(Person.prototype)

// var Exposer = (function() {
//     var privateVariable = 10;

//     var privateMethod = function() {
//     console.log('Inside a private method!');
//     privateVariable++;
//     }

//     var methodToExpose = function() {
//     console.log('This is a method I want to expose!');
//     }

//     var otherMethodIWantToExpose = function() {
//     privateMethod();
//     }

//     return {
//         first: methodToExpose,
//         second: otherMethodIWantToExpose
//     };
// })();

// Exposer.first();        // Output: This is a method I want to expose!
// Exposer.second();       // Output: Inside a private method!
// Exposer.methodToExpose;

// var myVariable = 'global';
// myOtherVariable = 'global';
// function myFunction(){
//  var myVariable = 'local';
//  return myVariable;
// }
// function myOtherFunction(){
//  myOtherVariable = 'local';
//  return myOtherVariable;
// }
// console.log(myVariable); //{1}
// console.log(myFunction()); //{2}
// console.log(myOtherVariable); //{3}
// console.log(myOtherFunction()); //{4}
// console.log(myOtherVariable); //{5}

// function testTruthy(val){
//     return val ? console.log('truthy') : console.log('falsy');
//    }
//    testTruthy(true); //true
//    testTruthy(false); //false
//    testTruthy(new Boolean(false)); //true (object is always true)
//    testTruthy(''); //false
//    testTruthy('Packt'); //true
//    testTruthy(new String('')); //true (object is always true)
//    testTruthy(1); //true
//    testTruthy(-1); //true
//    testTruthy(NaN); //false
//    testTruthy(new Number(NaN)); //true (object is always true)
//    testTruthy({}); //true (object is always true)
//    var obj = {name:'John'};
//    testTruthy(obj); //true
//    testTruthy(obj.name); //true
//    testTruthy(obj.age); //false (age does not exist)
