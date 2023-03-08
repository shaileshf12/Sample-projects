
interface User {
    readonly dbId : number,
    email : string,
    userId : number,
    googleId ? : number,
    startTrail():string,
    getCoupon(couponname: string, value:number):number
}

const mack : User = {
    dbId : 12,
    email : "mack@gmail.com",
    userId : 765,
    startTrail : ()=>{
        return "Hi"
    },
    getCoupon: (name:'abc', off:499) => {
        return 499;
    }

}


export {}