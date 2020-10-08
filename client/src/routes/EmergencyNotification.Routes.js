import { WEB_URL} from '../config'
import EmergencyNotification from '../components/Home/EmergencyNotification' 

const EmergencyNotificationRoutes = [
    {
        path : WEB_URL.EmergencyNotification,
        exact : true,
        isProtected : false,
        component : EmergencyNotification
    }
]

export default EmergencyNotificationRoutes