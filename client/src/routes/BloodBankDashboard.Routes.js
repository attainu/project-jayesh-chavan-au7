import { WEB_URL } from '../config'
import BloodBankDashboard from '../containers/BloodBankDashboard'

const BloodBankDashboardRoute = [
    {
        path : WEB_URL.BLODD_BANK_DASHBOARD,
        exact : true,
        isProtected : true,
        component : BloodBankDashboard
    }
]

export default BloodBankDashboardRoute