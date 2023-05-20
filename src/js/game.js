import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Knight } from './knight'

export class Game extends Engine {

    constructor() {
        super({ 
             backgroundColor: Color.ExcaliburBlue,
             displayMode: DisplayMode.FillScreen
            
        })
        this.start(ResourceLoader).then(() => this.startGame())
        
    }

    startGame() {
        console.log("start de game!")

        let knight = new Knight
        this.add(knight)

    }
}

new Game()