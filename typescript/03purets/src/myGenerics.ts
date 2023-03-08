
const arr : Array<number> = [1]

function identityOne<Type>(val : Type) : Type {
    
    return val
}

identityOne(10)

interface Bottle {
    brand : string,
    type : number
}

function identityTwo<Bottle>(val : Bottle) : Bottle {
    
    return val
}

identityTwo<Bottle>({brand:"", type:2})

function getProducts<T>(products : T[]) : T {
    
    console.log(products.length)
    return products[2]
}

getProducts([3,4,5])


const allBooks = <T>(books : T[]) : T =>{

    return books[1]
}

function anotherFunction<T, U extends number>(m1 : T, m2 : U) : object {
    
    return {
        m1,
        m2
    }
}

// anotherFunction(1, "2")

export {}