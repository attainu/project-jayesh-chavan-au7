import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
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
        const getUser = axios.create({
            baseURL: "http://localhost:4000/",
            withCredentials: true,
        });

        getUser.get("/volunteer/get-user").then((responce) => {
            console.log(responce.data);
        });
    }

    clickHandler = () => {
        const logout = axios.create({
            baseURL: "http://localhost:4000/",
            withCredentials: true,
        });

        logout.get("/volunteer/logout").then((responce) => {
            if (responce.data === "done") {
                this.props.history.push("/");
            }
        });
    };

    deleteHandler = () => {
        const deleteUser = axios.create({
            baseURL: "http://localhost:4000/",
            withCredentials: true,
        });

        deleteUser.get("/volunteer/delete-user").then((responce) => {
            if (responce.data === "done") {
                this.props.history.push("/");
            }
        });
    };

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
                    <Profile />
                ) : this.state.Update ? (
                    <Update />
                ) : (
                    <Delete deleteHandler={this.deleteHandler} />
                )}
            </div>
        );
    }
}

export default withRouter(VolunteerDashbaord);
