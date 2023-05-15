import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            backgroundColor: Color.Gray,
            displayMode: DisplayMode.FillScreen
            // width: 800, height: 600 
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const background = new Background(800,600)
        this.add(background)

    }
}

new Game()
