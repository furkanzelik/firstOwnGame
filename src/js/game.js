import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish'
import { MovingFish } from './movingfish'
import { Knight } from './knight'
// import { Background } from './background'

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

        const fish = new Fish()
        this.add(fish)

        const movingfish = new MovingFish()
        this.add(movingfish)

        const knight = new Knight
        this.add(knight)

        // const background = new Background()
        // this.add(background)

    }
}

new Game()
