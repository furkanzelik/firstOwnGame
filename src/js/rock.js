import { Actor, CollisionType, Random, Vector, Timer } from "excalibur";
import { Resources } from "./resources";

export class Rock extends Actor {
  constructor() {
    super({
      width: Resources.Rock.width,
      height: Resources.Rock.height
    });

    this.random = new Random(1337);
  }

  onInitialize(engine) {
    this.timer = new Timer({
      fcn: () => this.spawn(engine), // Arrow-functie om de juiste context te behouden
      interval: 5000,
      repeats: true
    });
    engine.currentScene.add(this.timer);
    this.timer.start();

    this.graphics.use(Resources.Rock.toSprite());
    this.pos = new Vector(900, 460);
    this.scale = new Vector(0.5, 0.5);
    this.vel = new Vector(-250, 0);
    this.body.collisionType = CollisionType.Active;
    this.body.useGravity = false;
  }

  spawn(engine) {
    // Verwijder bestaande Rock-objecten uit de scene
    engine.currentScene.actors.forEach(actor => {
      if (actor instanceof Rock) {
        actor.kill();
      }
    });

    const rock = new Rock(); // Maak een nieuw Rock-object aan

    rock.pos = new Vector(
      this.random.integer(0, 800),
      this.random.integer(0, 600)
    );

    engine.currentScene.add(rock);
  }
}
