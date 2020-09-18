import React from 'react'
import './register.scss'

const Register = function () {
    
    return(
        <div className="register">
            <hr/>
            <div className="row">
                <div className="col-sm-6 register__content">
                    <h1 className="display-4">
                        Register As Voluteer
                    </h1>
                    <div className="register__ul">
                            <dl className="dl-horizontal">
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                            </dl>
                            <button className="btn btn-primary">Register as Voluteer</button>
                    </div>
                </div>
                <div className="col-sm-6 register__content">
                    <h1 className="display-4">
                        Register As Blood Bank
                    </h1>
                    <div className="register__ul">
                            <dl className="dl-horizontal">
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                            </dl>
                            <button className="btn btn-primary">Register as Blood Bank</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register