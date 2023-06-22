import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "./resources";

export class EndScreen extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log('jhghkj')
        let gameover = new Actor({
            pos: new Vector(engine.screen.drawWidth / 2, engine.screen.drawHeight / 2),
            width: Resources.Gameover.width,
            height: Resources.Gameover.height
        })
        gameover.graphics.use(Resources.Gameover.toSprite())
        this.add(gameover)

        gameover.on('pointerup', (event) => {
            engine.goToScene('Level')
        })
    }
}