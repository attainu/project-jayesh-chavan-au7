import React from "react";
import { connect } from 'react-redux'
import { getAllVolunteer } from '../../redux/volunteerSearch/volunteerSearchAction'
import Loader from "../shared/Loader";
import _ from 'lodash'
class Volunteers extends React.Component{
    state = {
        currentPage : 1,
        options : {hasNextPage : false, hasPrevPage : false},
        city : "Pune",
        docs : null
    }
    
    componentDidMount(){
        this.props.getAllVolunteer(this.state.currentPage,this.state.city)
    }

    componentDidUpdate(prevProps){
        if(this.props.allVolunteers.AllVolunteer !== prevProps.allVolunteers.AllVolunteer){
            this.setState({
                options : {
                    hasNextPage : this.props.allVolunteers.AllVolunteer.hasNextPage,
                    hasPrevPage : this.props.allVolunteers.AllVolunteer.hasPrevPage
                },
                docs : this.props.allVolunteers.AllVolunteer.docs
            })
        }
    }

    nextHandler = async () => {
        try {
            await this.setState({ currentPage : this.state.currentPage + 1})
            this.props.getAllVolunteer(this.state.currentPage,this.state.city)
        } catch (error) {
            console.log(error);
        }
    }

    prevHandler = async () => {
        try {
            await this.setState({ currentPage : this.state.currentPage - 1})
            this.props.getAllVolunteer(this.state.currentPage,this.state.city)
        } catch (error) {
            console.log(error);
        }
    }

    render(){

        return (
            this.props.allVolunteers.Loading ? (
                <div className="container-fluid banksearch">
                    <h1 className="display-3 text-center">Registered Volunteers</h1>
                    <Loader />
                </div>
            ) : (
                <div className="container-fluid banksearch">
                    <h1 className="display-3 text-center">Registered Volunteers</h1>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className={this.state.options.hasPrevPage ? "page-item" : "page-item disabled"}>
                                <button className="page-link linkbtn" onClick={this.prevHandler}>Previous</button>
                            </li>
                            <li className={this.state.options.hasNextPage ? "page-item" : "page-item disabled"}>
                                <button className="page-link linkbtn" onClick={this.nextHandler}>Next</button>
                            </li>
                        </ul>
                    </nav>
                    <div className="row row-col-1 row-cols-md-2">
                        {
                            _.map(this.state.docs,(profile,idx) =>
                            <div className="card" key={idx}>
                                <div className="row no-gutters">
                                    <div className="col-sm-6 ">
                                        <img
                                            src={
                                                profile.profile_photo ?
                                                `${profile.profile_photo.firebaseUrl}` :
                                                !profile.gender ? require("../../utils/images/Men_icon.jpg") :
                                                profile.gender === "Male" ? require("../../utils/images/Men_icon.jpg") :
                                                require("../../utils/images/Women_icon.jpg")
                                            }
                                            className="card-img"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card-body">
                                            <h1 className="display-3">
                                                {profile.blood_group || `N/A`}
                                            </h1>
                                            <h5 className="card-title">
                                                {profile.first_name
                                                    ? `${profile.first_name} ${profile.last_name}`
                                                    : "First_Name Last_Name"}
                                            </h5>
                                            <p className="card-text">
                                                Date of birth :{" "}
                                                <small className="text-muted">
                                                    {profile.date_of_birth || `N/A`}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                City :{" "}
                                                <small className="text-muted">
                                                    {profile.city || `N/A`}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small
                                                    className={
                                                        profile.status
                                                            ? "text-success"
                                                            : "text-danger"
                                                    }
                                                >
                                                    {profile.status ? `Active` : `Offline`}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            )
        )
    }

    
};

const mapStateToProps = state => {
    return{
        allVolunteers : state.allVolunteers
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getAllVolunteer : (page,city) => dispatch( getAllVolunteer(page,city) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Volunteers);
