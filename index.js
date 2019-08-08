console.log(sayHi("Gal"))
function sayHi(name) {
    // return `Hello ${name}`
    // return "Hello ${name" + name + " How are you? my name is: " + robot;
    return `Hello ${name} how are you ? my name is ${getRobotName()}`
}


function getRobotName() {
    return "Hacker!!!"
}


const sayHiOnConst = function (name) {
    return `Hello ${name}`
}

sayHiOnConst("Gan")

//arrow function
// multiple params ? prentecies
// no params ? underscore / empty prentecies
// 1 param ? only parameter , no prentecies
const sayHiArrow = (name) => `Hello ${name} how are you ? my name is ${getRobotName()}`
// console.log(getId())
const getId = () => `id_${Math.random() * 999}`;
console.log(getId())

sayHiArrow()

// function execRandom(aaa) {
//     const result = aaa()
//     console.log(result)
// }

// execRandom(someParamFunction)