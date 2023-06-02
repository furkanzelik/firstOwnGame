import { Actor, Animation, range, SpriteSheet, Vector, CollisionType,  } from "excalibur";
import { Resources } from "./resources";

export class Dragon extends Actor{


    constructor(){
        super({
            width: Resources.Dragon.width/4,
            height: Resources.Dragon.height/4,
        })
        const dragonSheet = SpriteSheet.fromImageSource({
            image: Resources.Dragon,
            grid:{rows: 4, columns: 4, spriteHeight: 820 / 4, spriteWidth: 644 / 4}
        })

        // const id = Animation.fromSpriteSheet(dragonSheet,range(0,7),80)
        const flyLeft = Animation.fromSpriteSheet(dragonSheet,range(8,15),80)

        // this.graphics.add("id",id)
        this.graphics.add("flyLeft",flyLeft)

        this.graphics.use(flyLeft)
    }

    onInitialize(engine) {

        this.pos = new Vector(300,175)
        // this.scale = new Vector(1.4,1.4)
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = false
       
    }
   

}