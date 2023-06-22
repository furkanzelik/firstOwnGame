import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "./resources";

export class StartScreen extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log('jhghkj')
        let startButton = new Actor({
            pos: new Vector(engine.screen.drawWidth / 2, engine.screen.drawHeight / 2),
            width: Resources.StartButton.width,
            height: Resources.StartButton.height
        })
        startButton.graphics.use(Resources.StartButton.toSprite())
        this.add(startButton)

        startButton.on('pointerup', (event) => {
            engine.goToScene('Level')
        })

        startButton.actions.blink(200,200,10)
    }
}