import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { httpRequest } from '../../httpRequest'
import { getVolunteer } from '../../redux/volunteer/volunteerAction'
import NavbarBack from "../../components/shared/NavbarBack";
import Profile from "../../components/VolunteerAuth/VolunteerProfile";
import Update from "../../components/VolunteerAuth/VolunteerProfileUpdate";
import Delete from "../../components/VolunteerAuth/VolunteerProfileDelete";
import "./volunteerDashboard.scss";

class VolunteerDashbaord extends React.Component {
    state = {
        Profile: 1,
        Update: 0,
        Delete: 0,
    };

    componentDidMount() {
        this.props.getVolunteer()
    }

    clickHandler = () => {
        httpRequest.get("/volunteer/logout").then((responce) => {
            if (responce.data === "done") {
                this.props.history.push("/");
            }
        });
    };

    deleteHandler = () => {
        httpRequest.get("/volunteer/delete-user").then((responce) => {
            if (responce.data === "done") {
                this.props.history.push("/");
            }
        });
    };

    navigateToProfile = () => {
        this.setState({
            Profile: 1,
            Update: 0,
            Delete: 0,
        })
    }

    render() {
        return (
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
                                    Profile: 1,
                                    Update: 0,
                                    Delete: 0,
                                })
                            }
                        >
                            Profile
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                this.setState({
                                    Profile: 0,
                                    Update: 1,
                                    Delete: 0,
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
                                    Profile: 0,
                                    Update: 0,
                                    Delete: 1,
                                })
                            }
                        >
                            Delete Profile
                        </button>
                    </li>
                </ul>
                {this.state.Profile ? (
                    <Profile volunteerData={this.props.volunteerData}/>
                ) : this.state.Update ? (
                    <Update volunteerData={this.props.volunteerData} navigate={this.navigateToProfile}/>
                ) : (
                    <Delete deleteHandler={this.deleteHandler} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        volunteerData : state.volunteer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getVolunteer : () => dispatch( getVolunteer() )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(VolunteerDashbaord));
