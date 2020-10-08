import HomeRoute from "./Home.Routes";
import VolunteerRegistrationRoute from "./VolunteerRegistration.Routes";
import BloodBankRegistrationRoute from "./BloodBankRegistration.Routes";
import VolunteerDashboardRoute from "./VolunteerDashboard.Routes";
import BloodBankDashboardRoute from './BloodBankDashboard.Routes'
import LoginRoute from "./Login.Routes";
import DonationRoute from './Donation.Routes'
import BloodBankSearch from './BloodBankSearch.Routes'
import VolunteerSearchRoute from './VolunteerSearch.Routes'
import OrganiseRoute from './Organise.Routes'
import EmergencyNotificationRoutes from './EmergencyNotification.Routes'

export default [
    ...HomeRoute,
    ...VolunteerRegistrationRoute,
    ...BloodBankRegistrationRoute,
    ...VolunteerDashboardRoute,
    ...BloodBankDashboardRoute,
    ...LoginRoute,
    ...DonationRoute,
    ...BloodBankSearch,
    ...VolunteerSearchRoute,
    ...OrganiseRoute,
    ...EmergencyNotificationRoutes
];
