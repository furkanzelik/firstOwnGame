import { Actor, Random, Timer } from "excalibur";
import { Rock } from "./rock";
import { Plant } from "./plant";

export class Spawner extends Actor {
  constructor() {
    super();
    this.random = new Random(1337);
  }

  onInitialize(engine) {
    this.spawnRock(engine); // Spawn een rots direct bij het starten

    // Zet de timer voor het spawnen van rotsen
    this.rockTimer = new Timer({
      fcn: () => this.spawnRock(engine),
      interval: 5000, //  elke 5 seconden
      repeats: true,
    });

    engine.currentScene.add(this.rockTimer);

    this.rockTimer.start();

    // Start de plantTimer met een vertraging van 2 seconden
    setTimeout(() => {
      this.spawnPlant(engine); // Spawn een plant direct na de vertraging

      this.plantTimer = new Timer({
        fcn: () => this.spawnPlant(engine),
        interval: 10000, // elke 10 seconden
        repeats: true,
      });

      engine.currentScene.add(this.plantTimer);
      this.plantTimer.start();
    }, 2000); // delay van 2 seconden 
  }

  spawnRock(engine) {
    console.log("Spawn rots");
    const rock = new Rock(
      this.random.integer(0, 800),
      this.random.integer(0, 600)
    );
    engine.currentScene.add(rock);
  }

  spawnPlant(engine) {
    console.log("Spawn plant");
    const plant = new Plant(
      this.random.integer(0, 800),
      this.random.integer(0, 600)
    );
    engine.currentScene.add(plant);
  }
}


