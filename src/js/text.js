import { Color, Font, FontUnit, Label, ScreenElement, Timer, Vector } from "excalibur";


export class UI extends ScreenElement{

    score = 0;
    scoreText

    constructor(){
        super({x:10, y:10})
    }

    onInitialize(engine){
        this.scoreText = new Label({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 32,
                color: Color.Black,
            }),
            pos: new Vector(300,50)
        })
        this.addChild(this.scoreText)
    }
    updateScore(){
        this.score++
        this.scoreText.text = `Score: ${this.score}`
    }   
}
  
