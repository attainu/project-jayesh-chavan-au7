import { WEB_URL }from '../config'
import OrganiseContainer from '../containers/OrganiseContainer'


const OrganiseRoute = [
    {
        path : WEB_URL.Organise,
        exact : true,
        isProtected : false,
        component : OrganiseContainer
    }
]

export default OrganiseRoute