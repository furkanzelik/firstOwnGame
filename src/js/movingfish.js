import { Fish } from "./fish";
import { Actor, DisplayMode, Vector } from "excalibur";


export class MovingFish extends Fish {

    constructor({x,y}){
        super(x,y);
    }

    onInitialize(engine){
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(x,y)
        
    }
} 