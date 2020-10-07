import { WEB_URL }from '../config'
import VolunteerSearch from '../containers/VolunteerSearch'


const VolunteerSearchRoute = [
    {
        path : WEB_URL.VolunteerSearch,
        exact : true,
        isProtected : false,
        component : VolunteerSearch
    }
]

export default VolunteerSearchRoute