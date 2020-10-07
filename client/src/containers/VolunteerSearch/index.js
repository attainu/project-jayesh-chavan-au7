import React from 'react'
import { withRouter } from 'react-router-dom'
import Footer from '../../components/Home/Footer'
import NavbarBack from '../../components/shared/NavbarBack'
import Volunteers from '../../components/volunteers'

class VolunteerSearch extends React.Component{

    render(){
        return(
            <div className="container">
                <NavbarBack 
                    clickHandler={() => window.history.back()}
                    buttonText={
                        <i className="fas fa-arrow-left">
                            <span className="lead"> Back</span>
                        </i>
                    }
                />
                <Volunteers/>
                <Footer/>
            </div>
        )}
}

export default withRouter(VolunteerSearch)