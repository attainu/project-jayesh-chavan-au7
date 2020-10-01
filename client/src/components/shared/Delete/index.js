import React from "react";
import "./delete.scss";

const Delete = function ({ deleteHandler }) {
    return (
        <div className="container row delete">
            <div className="col-md-6 d-flex align-items-center image">
                <img
                    className="d-block w-100"
                    src={require("../../../utils/images/warning.png")}
                    alt="..."
                />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <h1 className="display-3">
                        Do you really want Delete this Account ?
                    </h1>
                    <button className="btn btn-danger" onClick={deleteHandler}>
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Delete;
