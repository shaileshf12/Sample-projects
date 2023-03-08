"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.courseCount = 1;
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getCount", {
        get: function () {
            return this.courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCount", {
        set: function (count) {
            this.courseCount = count;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var newUser = new User("Mack", "mack@gmail.com", "Mumbai");
// // newUser.city = "Mumbai"
newUser.setCount = 5;
console.log(newUser.getCount);
console.log(newUser);
