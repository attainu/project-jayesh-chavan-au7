import React from "react";

const Loader = function () {
    return (
        <div
            className="d-flex w-100 justify-content-center align-items-center"
            style={{ height: "500px" }}
        >
            <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader