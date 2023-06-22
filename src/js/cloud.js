import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Droplet } from "./droplet";

export class Cloud extends Actor {

  druppel;

  constructor() {
    super({
      width: Resources.Cloud.width,
      height: Resources.Cloud.height
    });

    
    this.graphics.use(Resources.Cloud.toSprite());
    this.pos = new Vector(200, 200);
    this.vel = new Vector(-40, 0);
    this.scale = new Vector(4, 4);

   
  }

  onInitialize(engine) {
    this.druppel = new Droplet(this.x, this.y); // Initialiseer de druppel wanneer de Cloud is geïnitialiseerd
    engine.add(this.druppel);
  }

  onPostUpdate(engine) {
    if (this.pos.x < 0) {
      this.pos = new Vector(600, 200);
    }
  }

  rain() {
    if (this.druppel) {
      this.druppel.fallDown();
    }
  }
}