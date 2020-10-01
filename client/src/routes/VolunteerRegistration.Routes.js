import { WEB_URL }from '../config'
import VoluteerAuth  from "../containers/VoluteerAuth"


const VolunteerRegistrationRoute = [
    {
        path : WEB_URL.VOLUNTEER_REGISTER,
        exact : true,
        isProtected : false,
        component : VoluteerAuth
    }
]

export default VolunteerRegistrationRoute