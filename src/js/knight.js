import { Actor, CollisionType, DisplayMode, ExitViewPortEvent, Input, Physics, SpriteSheet, Vector, range, Animation } from "excalibur";
import { Resources } from "./resources";

export class Knight extends Actor {
    constructor() {
        super({
            width: Resources.Knight.width / 4,
            height: Resources.Knight.height / 4
        })
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Knight,
            grid:{rows: 4, columns: 4, spriteHeight: 258 / 4, spriteWidth: 256 / 4}
        })       
        
        const idle = Animation.fromSpriteSheet(runSheet, range(0, 3), 80) // geen animatie
        const runRight = Animation.fromSpriteSheet(runSheet, range(4, 7), 80)

        this.graphics.add("idle", idle)
        this.graphics.add("runright", runRight)

        this.graphics.use(runRight)
    }


    onInitialize(engine) {
        this.pos = new Vector(100,475)
        this.scale = new Vector(1.4,1.4)
        this.body.collisionType = CollisionType.Active
       
    }

    onPreUpdate(engine) {
        
        let ymove = 0;
        
        if(engine.input.keyboard.wasPressed(Input.Keys.Up) || 
          engine.input.keyboard.wasPressed(Input.Keys.Space))
           
          {
            ymove = -550; 
        } 
        

    this.vel = new Vector(0,this.vel.y+ymove) 
    
    }
}