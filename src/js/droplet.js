// import { Actor, Vector } from "excalibur";
// import { Resources } from "./resources";

// class Droplet extends Actor{
//     constructor(){
//         super({
//             pos: new Vector(x, y),
//       width: 10,
//       height: 10,
//       color: Color.Blue,
//         })
//         this.velocity = new Vector(0, 10); // Verticale snelheid van de waterdruppel
//   }
    

//     onInitialize(){

//         this.graphics.use(Resources.Droplet.toSprite())
//         this.pos = new Vector(200, 200);
//         this.vel = new Vector(-40, 0);
//     }
//     onPostUpdate(engine){
//         if(this.pos.x < 0){
//             this.pos = new Vector(600,200)
//         }
//     }
// }
