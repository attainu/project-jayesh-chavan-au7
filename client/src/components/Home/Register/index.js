import React from 'react'
import { useHistory } from 'react-router-dom'
import './register.scss'

const Register = function () {
    
    const history = useHistory()

    return(
        <div className="register">
            <hr/>
            <div className="row">
                <div className="col-sm-6 register__content">
                    <h1 className="display-4">
                        Register As Volunteer
                    </h1>
                    <div className="register__ul">
                            <dl className="dl-horizontal">
                                <dt>You can register as a volunteer</dt>
                                <dd>You will get notifications of all the blood camps around you </dd>
                                <dt>Register your blood type with us </dt>
                                <dd>You will be notified when someone is in urgent need of you blood type.</dd>
                                <dt>You can be a regular Donar</dt>
                                <dd>You can be regular donar both for blood and money.</dd>
                                <dt>Do some good</dt>
                                <dd>This is your chance to do something good for the society.</dd>
                            </dl>
                            <button className="btn btn-primary" onClick={() => history.push('/volunteer-signup')}  >Register as Voluteer</button>
                    </div>
                </div>
                <div className="col-sm-6 register__content">
                    <h1 className="display-4">
                        Register As Blood Bank
                    </h1>
                    <div className="register__ul">
                            <dl className="dl-horizontal">
                                <dt>If you are Blood bank official</dt>
                                <dd>You can register your bank with us.</dd>
                                <dt>Benefits of our Network</dt>
                                <dd>You will get access to our donar network.</dd>
                                <dt>Host Blood camps</dt>
                                <dd>You can notify donars through our network whenever you host a camp.</dd>
                                <dt>Live updates</dt>
                                <dd>You can share live updates about your bank and your needs.</dd>
                            </dl>
                            <button className="btn btn-primary" onClick={() => history.push('/bloodbank-signup')} >Register as Blood Bank</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register