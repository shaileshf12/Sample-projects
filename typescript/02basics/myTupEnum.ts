
let tuser : [string, number, boolean]

tuser = ['2', 2, true]


type User = [number, string, boolean]

let newUser : User = [1, "2", false]

newUser[1] = "4"
newUser.push(true)


export {}