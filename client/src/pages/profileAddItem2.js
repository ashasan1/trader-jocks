import React, {useState} from 'react';
import Axios from 'axios'; //library to allow the https request to the cloudinary api
import '../../src/profileAddItem.css';
// import {Image} from 'cloudinary-react';

// ----------delete----------------------------------------------------
// import { gql, graphql } from 'react-apollo';
// import Dropzone from 'react-dropzone';
// import cloudinary from '../../../server/utils/cloudinary';
//---------------------------------------------------------------------


function Upload() {
    const [imageSelected, setImageSelected] = useState("");
    // const [previewSource, setPreviewSource] = useState('');
    // response.data.secure_url
    
    const uploadImage = () => {
        // console.log(files[0]);
        const formData = new FormData() 
        formData.append("file", imageSelected);
        formData.append("upload_preset", "trader_jocks_V2_preset" );

        Axios.post(
        "https://api.cloudinary.com/v1_1/dui0ghwal/image/upload", 
        formData
        ).then((response)=> {
        console.log(response);

        });
    };

    return (
        // <div>
        //     <input 
        //         type="file" 
        //         onChange={(event) => {
        //             setImageSelected(event.target.files[0]);
        //         }} 
        //     />  
        //     <button onClick={uploadImage}> Upload Image</button> 
        //     {/* if there is a image that has been selected then display a preview */}
        //     {/* {previewSource && (
        //         <img src={response.data.secure_url}
        //         alt="selected image"
        //         style={{ height: '300px' }}
        //         /> )} */}
        // </div>

        <div>
        <h1 className="title">Upload an Image</h1>
        {/* <Alert msg={errMsg} type="danger" />
        <Alert msg={successMsg} type="success" /> */}
        <form onSubmit={handleSubmitFile} className="form">
            <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className="form-input"
            />
            <button className="btn" type="submit">
                Submit
            </button>
        </form>
        {previewSource && (
            <img
                src={previewSource}
                alt="chosen"
                style={{ height: '300px' }}
            />
        )}
    </div>
    );
}
    
    
export default Upload;
    
// class Upload extends React.Component {
//   state = {
//     name: '',
//     file: null,
//   };

//   onDrop = async files => {
//     this.setState({ file: files[0] });
//   };

//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   submit = async () => {
//     const { name, file } = this.state;

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'trader_jocks_V2_preset');

//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/dui0ghwal/image/upload`,
//       formData,
//     );

//     const graphqlResponse = await this.props.mutate({
//       variables: {
//         name,
//         publicId: response.data.public_id,
//       },
//     });

//     this.props.history.push(`/addItem/${graphqlResponse.data.item.id}`);
//   };

//   render() {
//     return (
//       <div>
//         <input title="name" onChange={this.onChange} value={this.state.title} />
//         <Dropzone onDrop={this.onDrop}>
//           <p>Try dropping some files here, or click to select files to upload.</p>
//         </Dropzone>
//         <button onClick={this.submit}>Submit</button>
//       </div>
//     );
//   }
// }

// const CreateChampionMutation = gql`
//   mutation($name: String!, $publicId: String!) {
//     createChampion(name: $name, publicId: $publicId) {
//       id
//     }
//   }
// `;

// export default graphql(CreateChampionMutation)(Upload);
// export default graphql(CreateChampionMutation)(Upload);