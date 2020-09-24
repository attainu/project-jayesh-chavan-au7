import { WEB_URL } from '../config'
import VolunteerDashboard from '../containers/VolunteerDashboard'

const VolunteerDashboardRoute = [
    {
        path : WEB_URL.VOLUNTEER_DASHBOARD,
        exact : true,
        isProtected : true,
        component : VolunteerDashboard
    }
]

export default VolunteerDashboardRoute