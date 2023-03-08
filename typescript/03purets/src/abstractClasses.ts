
abstract class TakePhoto {

    constructor(public cameramode : string, public filter : string)
    {
        this.cameramode=cameramode
        this.filter=filter
    }

    abstract getSepia() : void
    getRealTime() : number {
        return 10
    }
}


class Instagram extends TakePhoto {

    constructor(public cameramode : string, public filter : string, public burst : number){

        super(cameramode, filter)
    }

    getSepia(): void {

        console.log("sepia")
    }
}

const me = new Instagram('bright', "test", 20)

me.getSepia()

me.getRealTime()