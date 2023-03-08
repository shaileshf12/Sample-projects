
// class User {
//     name : string
//     email : string
//     private readonly city : string
//     constructor(name : string, email : string, city : string){
//         this.name = name
//         this.email = email
//         this.city = city
//     }
// }

class User {

    private courseCount = 1
    
    constructor(public name : string, public email : string, private city : string){
        this.name = name
        this.email = email
    }

    get getCount() : number {
        return this.courseCount
    }

    set setCount(count : number) {
        this.courseCount = count
    }

}


let newUser = new User("Mack", "mack@gmail.com", "Mumbai")

newUser.setCount = 5

console.log(newUser.getCount)

console.log(newUser)


export {}