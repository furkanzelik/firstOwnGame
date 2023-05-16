import { ImageSource, Sound, Resource, Loader } from 'excalibur'
// import backgroundImage from '../images/castle_backround.png'
import fishImage from '../images/fish.png'
import knightImage from '../images/knight.png.jpg'

const Resources = {
    
    // Background: new ImageSource(backgroundImage),
    Fish: new ImageSource(fishImage),
    Knight: new ImageSource(knightImage)
}
const ResourceLoader = new Loader([
    // Resources.Background,
    Resources.Fish,
    Resources.Knight
])

export { Resources, ResourceLoader }