import { WEB_URL }from '../config'
import BloodBankSearch from '../containers/BloodBankSearch'


const BloodBankSearchRoute = [
    {
        path : WEB_URL.BloodBankSearch,
        exact : true,
        isProtected : false,
        component : BloodBankSearch
    }
]

export default BloodBankSearchRoute