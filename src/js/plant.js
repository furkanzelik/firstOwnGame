import { Actor, Resource, Sprite, SpriteSheet, range, Animation, CollisionType,Vector, Timer, Random } from "excalibur";
import { Resources } from "./resources";

export class Plant extends Actor{
    constructor() {
        super({
            width: Resources.Plant.width/2 ,
            height: Resources.Plant.height/2
        
        });

        this.random = new Random(1337);    
        // const growingPlant = SpriteSheet.fromImageSource({
        //     image: Resources.Plant,
        //     grid: { rows: 1, columns: 18, spriteWidth: 512/20, spriteHeight: 32}
        // })

            

        // const id = Animation.fromSpriteSheet(growingPlant, range(0,4), 80)
        // const grow = Animation.fromSpriteSheet(growingPlant, range(5,17), 100)

        // this.graphics.add("id", id)
        // this.graphics.add("grow", grow)
        
        // this.graphics.use(grow)
        
        }
        onInitialize(engine) {            
            
            this.timer = new Timer({
                fcn: () => this.spawn(engine), // Arrow-functie om de juiste context te behouden
                interval: 8000,
                repeats: true
              });

              engine.currentScene.add(this.timer);
              this.timer.start();

              this.graphics.use(Resources.Plant.toSprite())
              this.pos = new Vector(700,460)
              this.vel = new Vector(-250,0)
              // this.scale = new Vector(4,3.5)
              this.body.collisionType = CollisionType.Active
              this.body.useGravity = false;  
        }
        
        spawn(engine) {
            // Verwijder bestaande plant-objecten uit de scene
            engine.currentScene.actors.forEach(actor => {
              if (actor instanceof Plant) {
                actor.kill();
              }
            });
        
            const plant = new Plant();
            plant.pos = new Vector(
                this.random.integer(0,700),
                this.random.integer(0, 600)
              );
          
              engine.currentScene.add(plant);
        }
    }
