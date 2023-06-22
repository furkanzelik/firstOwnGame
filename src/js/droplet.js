import { Actor } from "excalibur";
import { Resources } from "./resources";

export class Droplet extends Actor {
    constructor(x, y) {
      super({
        width:Resources.Droplet.width,
        height: Resources.Droplet.height,
        
      })
      this.pos.x = x;
      this.pos.y = y;
    }

    onInitialize(){
      this.graphics.use(Resources.Droplet.toSprite())
    }
  
    fallDown() {
      console.log("De waterdruppel valt.");
      // Voeg hier de logica toe voor het laten vallen van de waterdruppel
      this.pos.y += 1;
      this.pos.x -= 4;
    }
  }