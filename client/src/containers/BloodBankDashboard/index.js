import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { httpRequest } from '../../httpRequest'
import { getBloodBank } from '../../redux/bloodBank/bloodBankAction'
import NavbarBack from "../../components/shared/NavbarBack";
import BloodBank from '../../components/BloodBankAuth/BloodBank'
import BloodBankUpdate from '../../components/BloodBankAuth/BloodBankUpdate'
import BloodBankVerify from '../../components/BloodBankAuth/BloodBankVerify'
import Delete from '../../components/shared/Delete'
import Loader from '../../components/shared/Loader'

class BloodBankDashboard extends React.Component{
    state = {
        bloodBank : 1,
        Update : 0,
        Verify : 0,
        Delete : 0
    }

    componentDidMount(){
        this.props.getBloodBank()
    }
    
    clickHandler = () => {
        httpRequest.get("/bloodbank/logout").then((responce) => {
            if (responce.data === "done") {
                this.props.history.push("/");
            }
        });
    };

    deleteHandler = () => {
        httpRequest.get("/bloodbank/delete-bank").then((responce) => {
            if (responce.data === "done") {
                this.props.history.push("/");
            }
        });
    };

    navigateToBloodBank = () => {
        this.setState({
            bloodBank : 1,
            Update : 0,
            Verify : 0,
            Delete : 0
        })
    }
    
    render(){
        

        return(
            !this.props.bloodBankData.loading ? (
            <div className="container">
                <NavbarBack
                    clickHandler={this.clickHandler}
                    buttonText={"LogOut"}
                />
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                this.setState({
                                    bloodBank: 1,
                                    Update: 0,
                                    Delete: 0,
                                    verify: 0
                                })
                            }
                        >
                            Blood Bank
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                this.setState({
                                    bloodBank: 0,
                                    Update: 1,
                                    Delete: 0,
                                    verify: 0
                                })
                            }
                        >
                            Update
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                this.setState({
                                    bloodBank: 0,
                                    Update: 0,
                                    Delete: 0,
                                    verify: 1
                                })
                            }
                        >
                            Verify Mob
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                this.setState({
                                    bloodBank: 0,
                                    Update: 0,
                                    Delete: 1,
                                    verify: 0
                                })
                            }
                        >
                            Delete 
                        </button>
                    </li>
                </ul>
                {this.state.bloodBank ? (
                    <BloodBank bloodBankData={this.props.bloodBankData}/>
                ) : this.state.Update ? (
                    <BloodBankUpdate bloodBankData={this.props.bloodBankData} navigate={this.navigateToBloodBank}/>
                ) : (
                    this.state.verify  ? <BloodBankVerify bloodBankData={this.props.bloodBankData} /> :
                    <Delete deleteHandler={this.deleteHandler} />
                )}
            </div>
        ) : (
            <div className="container">
                <NavbarBack 
                    clickHandler={this.clickHandler}
                    buttonText={"LogOut"}
                />
                <Loader/>
            </div>
        ))
    }
}

const mapStateToProps = state => {
    return{
        bloodBankData : state.bloodBank
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBloodBank : () => dispatch( getBloodBank() ) 
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BloodBankDashboard))