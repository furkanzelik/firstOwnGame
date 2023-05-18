import { Actor, DisplayMode, Vector } from "excalibur";
import { Resources } from "./resources";

export class Fish extends Actor {

    constructor(){
        super();
    }

    onInitialize(engine){

        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(50,50)
        this.vel = new Vector(80,0) 
    }
} 