import { ImageSource, Sound, Resource, Loader } from 'excalibur'
// import fishImage from '../images/fish.png'
import backgroundImage from '../images/castel_backround'

const Resources = {
    // Fish: new ImageSource(fishImage)
    Background: new ImageSource(backgroundImage)
}
const ResourceLoader = new Loader([
    // Resources.Fish
    Resources.Background
])

export { Resources, ResourceLoader }