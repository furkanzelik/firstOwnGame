import { Actor, Resource, Sprite, SpriteSheet, range } from "excalibur";
import { Resources } from "./resources";

export class Plant extends Actor{
    constructor() {
        super();
        // const growPlant = SpriteSheet.fromImageSource({
        //     image: Resources.Plant,
        //     grid: { rows: 3, columns: 4, spriteWidth: 96, spriteHeight: 96 }
        // })
        // const idle = growPlant.sprites[0] // geen animatie
        // const growAnimation = Animation.fromSpriteSheet(growPlant, range(0, 3), 80)

        // this.graphics.add("idle", idle)
        // this.graphics.add("growAnimation", growAnimation)

        // this.graphics.use(idle)
    }
    onInitialize(engine) {
        // const plant = Resources.Plant.toSprite()
        // this.graphics = plant
        // this.pos = new Vector(400,300)
        // this.vel = new Vector(0,0)
    }

}