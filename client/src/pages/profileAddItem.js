import React, { useState } from "react";
import Axios from "axios"; //library to allow the https request to the cloudinary api
import "../../src/profileAddItem.css";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../utils/mutations";
const word = require("../utils/soundex");

function Upload() {
  const [imageURL, setImageURL] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [addItem, { error }] = useMutation(ADD_ITEM);

  const submitItemForm = async (event) => {
    event.preventDefault();
    const addItemFormData = {
      title: event.target[1].value,
      description: event.target[3].value,
      imageURL: imageURL,
      price: event.target[4].value,
      playerName: event.target[2].value,
      playerSoundex: word.soundex(event.target[2].value),
    };
    try {
      let { data } = await addItem({ variables: { ...addItemFormData } });
      window.location.href = "/profile";
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    uploadImage(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "trader_jocks_V2_preset");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dui0ghwal/image/upload",
      formData
    ).then((response) => {
      setImageURL(response.data.secure_url);
    });
  };

  return (
    <div className="container additemholder">
      <div>
        <h1 className="title">Upload an Image</h1>

        <form onSubmit={submitItemForm} className="form">
          {previewSource && (
            <img
              src={previewSource}
              alt="Selected Image"
              style={{ height: "300px" }}
            />
          )}
          <div>
            <input
              id="imageURL"
              type="file"
              name="imageURL"
              onChange={handleFileInputChange}
              className="form-input"
            />
            <label id="labeltext" htmlFor="floatingInput">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title of your Item"
            />

            <label id="labeltext" htmlFor="floatingInput">
              Player Name
            </label>
            <input
              type="text"
              className="form-control"
              id="playerName"
              name="playerName"
              placeholder="Michael Jordan"
            />

            <label id="labeltext" htmlFor="floatingInput">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="itemDescription"
              name="itemDescription"
              placeholder="Rookie Card"
            />

            <label id="labeltext" htmlFor="floatingInput">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="itemPrice"
              name="itemPrice"
              placeholder="5000"
            />
          </div>
          <button className="btn" type="submit">
            Submit Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
