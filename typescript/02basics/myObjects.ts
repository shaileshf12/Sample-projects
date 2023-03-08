
// function createUser({name:string, isPaid:boolean}) {
    
// }

// createUser({name :'John', isPaid:true})


// function createCourse() : {name : string, price : number} {
    
//     return {name : "jenny", price:100}
// }

// createCourse()


// type User = {
//     name : string,
//     email : string,
//     isActive : boolean
// }


// function createUsers(user:User) {
    
// }

// createUsers({name : "", email:"", isActive:true})



type User = {
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean,
    creditCard ?: number 
}

let myUser : User = {
    _id : "1234",
    name : "Mack",
    email : "mack@gmail.com",
    isActive : false
}

myUser.name = "John"

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate &  {
    cvv : number
}

// myUser._id = "12"