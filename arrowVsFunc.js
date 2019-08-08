const user = {
    email: "gal@ibm.com",
    password: 1111,
    getCredentials: function () {
        return `email: ${this.email} password: ${this.password}`
    }
}
// user.email
// user.password

// in arrow function the scope is lexical means global in this case
// we are looking on the window

const user2 = {
    email: "gal@ibm.com",
    password: 1111,
    getCredentials: () => `email: ${this.email} password: ${this.password}`
}

// user.email
// user.password
const btn = document.querySelector("#getThisContext");
btn.addEventListener("click", function () {
    console.log(this)
})


btn.addEventListener("mouseover", () => {
    console.log(this)
})

const getCredentialsOuter = user.getCredentials;
console.log("bind exapmle")
console.log("bind exapmle")
console.log("bind exapmle")
getCredentialsOuter();

// const getOuter =  user.getCredentials
// getOuter()
// "email: undefined password: undefined"
// getOuter.bind(user)()
// "email: gal@ibm.com password: 1111"
// getOuter.bind(user2)()
// "email: gal@ibm.com password: 1111"
// const getOuterArrow = user2.getCredentials
// undefined
// getOuterArrow 
// () => `email: ${this.email} password: ${this.password}`
// getOuterArrow
// () => `email: ${this.email} password: ${this.password}`
// getOuterArrow.bind(user)()
// "email: undefined password: undefined"