
function add(num : number) : string {
    
    return num+"20"
}

add(10)


function logIn(name : string, email:string, isPaid:boolean=true) {
    
    return name+email
}

logIn("Mack", "mack@gmail.com")


const heros = ["thor", "spiderman", "ironman"]

heros.map((hero):string => {
    return "My hero is "+hero
})


function printNumber(n:number) : void {
    console.log(n)
    // return n;
}

printNumber(5)


function consoleError(err:string) : never {
    
    throw new Error(err)
}

consoleError("New error")

export {}