import { WEB_URL }from '../config'
import BloodBankAuth from '../containers/BloodBankAuth'


const BloodBankRegistrationRoute = [
    {
        path : WEB_URL.BLOOD_BANK_REGISTER,
        exact : true,
        isProtected : false,
        component : BloodBankAuth
    }
]

export default BloodBankRegistrationRoute