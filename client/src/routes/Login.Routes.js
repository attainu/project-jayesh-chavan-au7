import { WEB_URL } from '../config'
import LoginContainer from '../containers/LoginContainer'


const LoginRoute = [
    {
        path : WEB_URL.LOGIN,
        exact : true,
        isProtected : false,
        component : LoginContainer
    }
]

export default LoginRoute