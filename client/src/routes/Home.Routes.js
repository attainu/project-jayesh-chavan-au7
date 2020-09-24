import { WEB_URL } from '../config'
import Home from '../containers/Home'

const HomeRoute = [
    {
        path : WEB_URL.HOME,
        exact : true,
        isProtected : false,
        component : Home
    }
]

export default HomeRoute