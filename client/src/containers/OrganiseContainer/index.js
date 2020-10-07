import React from 'react'
import { connect } from 'react-redux'
import Organise from '../../components/Organise'
import NavbarBack from '../../components/shared/NavbarBack'

class OrganiseContainer extends React.Component{

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
                <h1 className="display-3 text-center">Register Camp</h1>
                <Organise bloodBankCamp={this.props.camp}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        camp : state.organisedCamp.bloodBankCamp
    }
}

export default connect(mapStateToProps,null)(OrganiseContainer)