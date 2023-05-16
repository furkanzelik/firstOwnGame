import { Actor, DisplayMode, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor {

    constructor(){
        super({
            height: 1200,
            width: 1200
        });
    }

    onInitialize(engine){
        this.graphics.use(Resources.Background.toSprite())
        this.anchor = new Vector(0,0)

    }
} 