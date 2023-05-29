import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";

export class Rock extends Actor{
    constructor(){
        super({
            width:600, 
            height: 800,
            pos: new Vector(0, 500),
            anchor: new Vector(0, 0)
        })
    }

    onInitialize(engine){
        
        this.graphics.use(Resources.Rock.toSprite())
        this.pos = new Vector(200,200)
        this.body.collisionType = new CollisionType.Fixed
    }
}