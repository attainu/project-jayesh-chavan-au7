import React, { useState } from 'react'
import { httpFileUpload } from '../../../httpRequest'
import { connect } from 'react-redux'
import { fetchVolunteerSuccess } from '../../../redux/volunteer/volunteerAction'
import './fileUpload.scss'
const UploadFile = function (props) {
    
    const [file,setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const fd = new FormData()
        fd.append('file', file, props.fileName+'.'+file.type.slice(6))

        httpFileUpload.post('/profile-upload', fd)
            .then(responce => {
                console.log(responce.data);
                props.updateProfile(responce.data)
                props.navigate()
            }).catch(error => {
                console.log(error);
            })
    }

    return(
        <div className="container fileupload">
            <form onSubmit={e => handleSubmit(e)} >
                <div className="form-group">
                    <input type="file" name="file" className="form-control-file" id="Imgupload"
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <button type="submit" className="btn btn-success">Upload</button>
                </div>
            </form>
        </div>
    )
}

let mapDispatchToProps = dispatch => {
    return{
        updateProfile : updatedProfile => dispatch( fetchVolunteerSuccess(updatedProfile) )
    }
}

export default connect(null,mapDispatchToProps)(UploadFile)