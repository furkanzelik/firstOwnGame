import { Engine, Color, Physics, Vector} from "excalibur";
import { Level } from "./game";
import { ResourceLoader } from "./resources";
import { StartScreen } from "./startScreen";
import { EndScreen } from "./gameover";

export class Game extends Engine{
    constructor() {
        super({ 
            backgroundColor: Color.ExcaliburBlue,
            width: 800,
            height: 600
        });
        this.start(ResourceLoader).then(() => this.startGame());

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 900);
        this.showDebug(true);
    }

    startGame(){
        this.addScene('Startscherm',new StartScreen())
        this.addScene('Level',new Level());
        this.goToScene('Startscherm')

        this.addScene('Eindscherm', new EndScreen())
            
    }
}

new Game()
