import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import knightImage from '../images/spellun-sprite.png'
import backgroundImage from '../images/ground.png'
import plantImage from '../images/plant_sprite.png'
import cloudImage from '../images/Cloud.png'

const Resources = {

    Knight: new ImageSource(knightImage),
    BG: new ImageSource(backgroundImage),
    Plant: new ImageSource(plantImage),
    Cloud: new ImageSource(cloudImage),
}
const ResourceLoader = new Loader([

    Resources.Knight,
    Resources.BG,
    Resources.Plant,
    Resources.Cloud,
    
])

export { Resources, ResourceLoader }