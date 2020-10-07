import React, { useState } from "react";
import { httpRequest } from "../../../httpRequest";
import { connect } from "react-redux";
import { storage } from "../../../config/firebase";
import { fetchVolunteerSuccess } from "../../../redux/volunteer/volunteerAction";
import "./fileUpload.scss";
const UploadFile = function (props) {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const fileUpload = () => {
        let imageName = props.fileName + "." + file.type.slice(6);
        const uploadTask = storage.ref(`images/${imageName}`).put(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    Math.round(
                        snapshot.bytesTransferred / snapshot.totalBytes
                    ) * 100;
                console.log(progress);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(imageName)
                    .getDownloadURL()
                    .then((url) => {
                        const profile_photo = {
                            fileName: imageName,
                            firebaseUrl: url,
                        };
                        httpRequest
                            .post("/volunteer/update-user", { profile_photo })
                            .then((responce) => {
                                console.log(responce);
                                props.updateProfile(responce.data);
                                props.navigate();
                            });
                    });
            }
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const desertRef = storage
            .ref("images")
            .child(props.fileName);
        desertRef
            .delete()
            .then(function () {
                fileUpload();
            })
            .catch(function (error) {
                if (error.code === "storage/object-not-found") {
                    fileUpload();
                    return;
                }
                console.log(error);
            });
    };

    return (
        <div className="container fileupload">
            <div className="progress my-2">
                <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <input
                        type="file"
                        name="file"
                        className="form-control-file"
                        id="Imgupload"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type="submit" className="btn btn-success">
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (updatedProfile) =>
            dispatch(fetchVolunteerSuccess(updatedProfile)),
    };
};

export default connect(null, mapDispatchToProps)(UploadFile);
