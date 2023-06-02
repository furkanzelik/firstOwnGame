import '../css/style.css'
import { Actor, Color, DisplayMode, Engine, Physics, Timer, Vector, vec } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Knight } from './knight'
import { Background } from './backround'
// import { Plant } from './plant'
import { Cloud } from './cloud'
import { Rock } from './rock'
import { Spawner } from './spawner'
import { Dragon } from './dragon'


export class Game extends Engine {

    constructor() {
        super({ 
             backgroundColor: Color.ExcaliburBlue,
             width:800, height:600
            
        })
        this.start(ResourceLoader).then(() => this.startGame())

        Physics.useArcadePhysics();
         Physics.gravity = vec(0, 900);
         this.showDebug(true)
         
        
    }
 
    startGame() {
        console.log("start de game!")
       
       
        
       let cloud = new Cloud
       this.add(cloud)

       let knight = new Knight
       this.add(knight)

        let spawn = new Spawner
        this.add(spawn)

        let background = new Background
        this.add(background)

        let dragon = new Dragon
        this.add(dragon)

    }
}

new Game()