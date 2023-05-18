import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import knightImage from '../images/Knight.png'

const Resources = {
    
    
    Fish: new ImageSource(fishImage),
    Knight: new ImageSource(knightImage)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Knight
])

export { Resources, ResourceLoader }