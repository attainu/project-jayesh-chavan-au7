import React from "react";
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { getAllBloodBank } from '../../redux/bloodBankSearch/bloodBankSearchAction'
import Loader from "../shared/Loader";
import _ from 'lodash'
import "./bloodbanks.scss"
class BloodBanks extends React.Component{
    state = {
        modalIsOpen : true,
        currentPage : 1,
        options : {hasNextPage : false, hasPrevPage : false},
        city : "",
        docs : null
    }
    
    submitHandler = async () => {   
        await this.setState({ modalIsOpen : false })
        this.props.getAllBloodBank(this.state.currentPage,this.state.city)
    }

    componentDidUpdate(prevProps){
        if(this.props.allBloodBanks.AllBloodBank !== prevProps.allBloodBanks.AllBloodBank){
            this.setState({
                options : {
                    hasNextPage : this.props.allBloodBanks.AllBloodBank.hasNextPage,
                    hasPrevPage : this.props.allBloodBanks.AllBloodBank.hasPrevPage
                },
                docs : this.props.allBloodBanks.AllBloodBank.docs
            })
        }
    }

    nextHandler = async () => {
        try {
            await this.setState({ currentPage : this.state.currentPage + 1})
            this.props.getAllBloodBank(this.state.currentPage,this.state.city)
        } catch (error) {
            console.log(error);
        }
    }

    prevHandler = async () => {
        try {
            await this.setState({ currentPage : this.state.currentPage - 1})
            this.props.getAllBloodBank(this.state.currentPage,this.state.city)
        } catch (error) {
            console.log(error);
        }
    }

    modalStyle = {
        content: {
            width: "700px",
            height: "300px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        },
    };

    onchangeHandler = (event) => {
        let city = event.target.value
        this.setState({ city })
    }
    
    render(){

        return (
            this.props.allBloodBanks.Loading || this.state.modalIsOpen ? (
                <div className="container-fluid banksearch">
                    <h1 className="display-3 text-center">Registered BloodBanks</h1>
                    <Loader />
                    <Modal isOpen={this.state.modalIsOpen} style={this.modalStyle}>
                        <h1 className="display-4 text-center text-danger">Geocoding not working !!</h1>
                        <p className="text-muted text-center">please enter city name manually</p>
                        <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => this.onchangeHandler(e)}
                                />
                        </div>
                        <button className="btn btn-success" onClick={this.submitHandler}>
                                Search
                        </button>
                    </Modal>
                </div>
            ) : (
                <div className="container-fluid banksearch">
                    <h1 className="display-3 text-center">Registered BloodBanks</h1>
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
                            _.map(this.state.docs,(bloodBank,idx) =>
                                <div className="card" key={idx}>
                                    <div className="row no-gutters">
                                        <div className="col-sm-6 ">
                                            <img
                                                src={
                                                    require("../../utils/images/blood_bank.jpg")
                                                }
                                                className="card-img"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {bloodBank.name
                                                        ? `${bloodBank.name}`
                                                        : "N/A"}
                                                </h5>
                                                <p className="card-text">
                                                    City :{" "}
                                                    <small className="text-muted">
                                                        {bloodBank.city || `N/A`}
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    State :{" "}
                                                    <small className="text-muted">
                                                        {bloodBank.state || `N/A`}
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    Email :{" "}
                                                    <small className="text-muted">
                                                        {bloodBank.email || `N/A`}
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    Contact :{" "}
                                                    <small className="text-muted">
                                                        {bloodBank.mob_no || `N/A`}
                                                    </small>
                                                </p>
                                                <p className="card-text">
                                                    <small
                                                        className={
                                                            bloodBank.status
                                                                ? "text-success"
                                                                : "text-danger"
                                                        }
                                                    >
                                                        {bloodBank.status ? `Active` : `Offline`}
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
        allBloodBanks : state.allBloodBanks
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getAllBloodBank : (page,city) => dispatch( getAllBloodBank(page,city) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BloodBanks);
