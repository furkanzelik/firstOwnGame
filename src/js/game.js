import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Font, FontUnit, Label, Physics, Timer, Vector, vec, ScreenElement } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Knight } from './knight'
import { Background } from './backround'
import { Cloud } from './cloud'
import { Spawner } from './spawner'
import { UI } from './text'




export class Game extends Engine {

    UI;

    constructor() {
        super({ 
            backgroundColor: Color.ExcaliburBlue,
            width: 800,
            height: 600
        });
        this.start(ResourceLoader).then(() => this.startGame());

        Physics.useArcadePhysics();
        Physics.gravity = vec(0, 900);
        // this.showDebug(true);
    }

    startGame(engine) {
        console.log("start de game!");

        let cloud = new Cloud();
        this.add(cloud);

        let knight = new Knight();
        this.add(knight);

        let spawn = new Spawner();
        this.add(spawn);

        let background = new Background();
        this.add(background);

        this.UI = new UI()
        this.add(this.UI)
    }

    onPostUpdate() {
        this.UI.updateScore(this.clock.elapsed() / 10)
    }
}

new Game();
