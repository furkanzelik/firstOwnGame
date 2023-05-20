import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import knightImage from '../images/Knight.png'

const Resources = {

    Knight: new ImageSource(knightImage)
}
const ResourceLoader = new Loader([

    Resources.Knight
])

export { Resources, ResourceLoader }