import React, { useState } from "react";
import { httpRequest } from "../../../httpRequest";
import { connect } from "react-redux";
import { storage } from "../../../config/firebase";
import { fetchBloodBankCampSuccess } from "../../../redux/organiserState/organiseStateAction"

const UploadFile = function (props) {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const fileUpload = () => {
        let imageName = props.fileName + "." + file.type.slice(6);
        console.log(imageName);
        const uploadTask = storage.ref(`posters/${imageName}`).put(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    Math.round(
                        snapshot.bytesTransferred / snapshot.totalBytes
                    ) * 100;
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("posters")
                    .child(imageName)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                        const poster = {
                            fileName: imageName,
                            firebaseUrl: url,
                        };
                        httpRequest
                            .post(`/organise/update?id=${props.fileName}`, { poster })
                            .then((responce) => {
                                console.log(responce);
                                props.uploadPoster(responce.data)
                            });
                    });
            }
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fileUpload()
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
                        Upload Poster
                    </button>
                </div>
            </form>
        </div>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        uploadPoster: (poster) =>
            dispatch(fetchBloodBankCampSuccess(poster)),
    };
};

export default connect(null, mapDispatchToProps)(UploadFile);
