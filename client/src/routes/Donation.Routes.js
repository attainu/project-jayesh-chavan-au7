import { WEB_URL }from '../config'
import DonateContainer from '../containers/DonationContainer'

const DonationRoute = [
    {
        path : WEB_URL.Donate,
        exact : true,
        isProtected : false,
        component : DonateContainer
    }
]

export default DonationRoute