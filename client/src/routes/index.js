import HomeRoute from "./Home.Routes";
import VolunteerRegistrationRoute from "./VolunteerRegistration.Routes";
import BloodBankRegistrationRoute from "./BloodBankRegistration.Routes";
import VolunteerDashboardRoute from "./VolunteerDashboard.Routes";
import LoginRoute from "./Login.Routes";

export default [
    ...HomeRoute,
    ...VolunteerRegistrationRoute,
    ...BloodBankRegistrationRoute,
    ...VolunteerDashboardRoute,
    ...LoginRoute,
];
