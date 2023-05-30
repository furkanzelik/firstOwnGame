import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import knightImage from '../images/knight-sprite.png'
import backgroundImage from '../images/ground.png'
import plantImage from '../images/cactus.png'
import cloudImage from '../images/Cloud.png'
import rockImage from '../images/Rock_Pile.png'

const Resources = {

    Knight: new ImageSource(knightImage),
    BG: new ImageSource(backgroundImage),
    Plant: new ImageSource(plantImage),
    Cloud: new ImageSource(cloudImage),
    Rock: new ImageSource(rockImage),
}
const ResourceLoader = new Loader([

    Resources.Knight,
    Resources.BG,
    Resources.Plant,
    Resources.Cloud,
    Resources.Rock,
    
])

export { Resources, ResourceLoader }