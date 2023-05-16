import { Actor, DisplayMode, Vector } from "excalibur";
import { Resources } from "./resources";

export class Knight extends Actor{
    constructor(){
        super();
    }

    onInitialize(engine){
        
        this.graphics.use(Resources.Knight.toSprite())
        this.pos = new Vector(300,400)
        this.vel = new Vector(80,0) 

    
    }
}