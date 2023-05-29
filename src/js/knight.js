import { Actor, CollisionType, DisplayMode, ExitViewPortEvent, Input, Physics, SpriteSheet, Vector } from "excalibur";
import { Resources } from "./resources";

export class Knight extends Actor {
    constructor() {
        super({
            width: Resources.Knight.width,
            height: Resources.Knight.height
        })
        // const runSheet = SpriteSheet.fromImageSource({
        //     image: Resources.Knight,
        // //     grid:{rows: 4, columns: 4}
        // })       
        
        // const idle = runSheet.sprites[0] // geen animatie
        // const runRight = Animation.fromSpriteSheet(runSheet, range(0, 7), 80)

        // this.graphics.add("idle", idle)
        // this.graphics.add("runright", runRight)

        // this.graphics.use(idle)
    }


    onInitialize(engine) {
        this.graphics.use(Resources.Knight.toSprite());
        this.pos = new Vector(100,475)
        this.scale = new Vector(1.4,1.4)
        this.body.collisionType = CollisionType.Active
       
    }

    onPreUpdate(engine) {
        
        let ymove = 0;
        // this.graphics.use('idle')
        

        if(engine.input.keyboard.wasPressed(Input.Keys.Up) || 
          engine.input.keyboard.wasPressed(Input.Keys.Space))
           
          {
            ymove = -500; 
        } 
        

    this.vel = new Vector(0,this.vel.y+ymove) 
    
    }
}