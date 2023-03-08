

enum Size {
    small,
    medium,
    large
}

const tShirtSize : Size = Size.medium

type Employee = {id:number, name:string}

let employee : Employee


employee = {
    id : 23,
    name : "abc"
}

type Quantity = 50 | 100

let a : Quantity = 100


// function greet(name : string | null | undefined) {
    
//     if(name)
//     {
//         console.log("Lets meet")
//     }
//     else
//     {
//         console.log("Meet not possible")
//     }
// }

// greet(null)



function greet <Type>(name : Type) : Type{
    
    return name;
}

greet(null)


type Customer = {
    birthday : Date
}


function getCustomer(id : number) : Customer | null {

    return id===0 ? null : {birthday : new Date()}
}

let customer = getCustomer(1)

console.log(customer?.birthday)
