

interface Sqaure {
    kind : "square",
    side : number
}

interface Circle {
    kind : "circle",
    radius : number
}

type Shape = Sqaure | Circle


function getArea(shape : Shape) {
    
    if(shape.kind==="circle")
    {
        return 3.14*shape.radius*shape.radius
    }

    return shape.side*shape.side
}

const obj = {
    kind : "circle",
    radius : 20
}


type Fish = {
    swim() : void
}

type Bird = {
    fly() : void
}


function isFish(pet:Fish | Bird) : pet is Fish {
    
    return (pet as Fish) !== undefined
}

function getFood(pet:Fish | Bird) {
    
    if(isFish(pet))
    {
        pet
        console.log("Fish food")
    }
    else
    {
        pet
        console.log("Bird food")
    }
}

// getArea()