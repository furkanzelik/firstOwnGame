import { Actor, Resource, Sprite, SpriteSheet, range } from "excalibur";
import { Resources } from "./resources";

export class Plant extends Actor{
    constructor() {
        super({
            width: Resources.Plant.width,
            height: Resources.Plant.height
        });

        const growingPlant = SpriteSheet.fromImageSource({
            image: Resources.Plant,
            grid: { rows: 3, columns: 4, spriteWidth: 96, spriteHeight: 96 }
        })

        // const idle = Plant.sprites[0] // geen animatie
        // const grow = Animation.fromSpriteSheet(Plant, range(1, 3), 80)

        // this.graphics.add("idle", idle)
        // this.graphics.add("grow", grow)
        // this.graphics.use(idle)
        
        }
        // onInitialize(engine) {
        //     this.pos = new Vector(400,200)
        //     this.vel = new Vector(-15,0)
        //     this.body.collisionType = CollisionType.Fixed
        // }
        
    }
   

