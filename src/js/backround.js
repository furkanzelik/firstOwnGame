import { Actor, CollisionType, Graphic, GraphicsGroup, Tile, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor{
    offset

constructor() {
    super({
        width: 800,
        height: 600,
        pos: new Vector(0, 500),
        anchor: new Vector(0, 0)
    })
    
}

    onInitialize(engine){
        const tile = Resources.BG.toSprite() 
        this.offset = tile.width

        // make var for members array 
        let x = [ ]
        // loop for the members
        for (let i = 0; i < 10; i++) {
            // add object to members array, x pos based on i
            x.push(
            {
                graphic: tile,
                pos: new Vector(tile.width*i,0),
            })

        }
        const group = new GraphicsGroup({
            
            members: x


        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)    
        this.graphics.offset = new Vector (0,-30)   
        this.vel = new Vector(-110, 0)

        this.body.collisionType = CollisionType.Fixed
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 500)
        }
    }
    
}