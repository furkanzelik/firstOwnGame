import { Actor, CollisionType,Vector, } from "excalibur";
import { Resources } from "./resources";


export class Plant extends Actor{
    constructor() {
        super({
            width: Resources.Plant.width/2 ,
            height: Resources.Plant.height/2
        
        });
      
        
        }
        onInitialize(engine) {            
            
              this.graphics.use(Resources.Plant.toSprite())
              this.pos = new Vector(900,460)
              this.vel = new Vector(-250,0)
              this.body.collisionType = CollisionType.Active
              this.body.useGravity = false;  

        }
        
    }
