import { Actor, CollisionType, DisplayMode, ExitViewPortEvent, Input, Physics, Vector } from "excalibur";
import { Resources } from "./resources";

export class Knight extends Actor {
    constructor() {
        super({
            width: Resources.Knight.width,
            height: Resources.Knight.height
        });    
    }


    onInitialize(engine) {
        this.graphics.use(Resources.Knight.toSprite());
        this.pos = new Vector(100,475)
        this.scale = new Vector(1.4,1.4)

        this.body.collisionType = CollisionType.Active
       
    }

    onPreUpdate(engine) {
        
        let ymove = 0;

        if(engine.input.keyboard.wasPressed(Input.Keys.Up) || 
          engine.input.keyboard.wasPressed(Input.Keys.Space))
           {
            ymove = -500;  
        } 
        

    this.vel = new Vector(0,this.vel.y+ymove) 
    }

}