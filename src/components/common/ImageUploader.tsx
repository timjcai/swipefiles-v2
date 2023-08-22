import React, { createRef, useState } from "react";
import { Icon } from "./Icon";

export const ImageUploader = (props) => {
    const [image, setImage] = useState<string>();
    const inputFileRef = createRef();

    const cleanup = () => {
        URL.revokeObjectURL(image && props.image);
        inputFileRef.current.value = null;
    };

    const createImage = (newImage) => {
        if (image) {
            cleanup();
        }
        setImage(newImage);
    };

    const handleOnChange = (e) => {
        e.preventDefault();
        const newImage = e.target.files[0];
        if (newImage) {
            setImage(URL.createObjectURL(newImage));
        }
        props.imageUpload(e);
    };

    const handleFileDrop = (e) => {
        console.log(e);
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dhxonutdu");

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "applicaiton/json",
            },
            body: JSON.stringify(formData),
        };

        await fetch(
            "https://api.cloudinary.com/v1_1/dhxonutdu/image/upload",
            requestOptions
        )
            .then((response) => {
                response.json();
            })
            .then((data) => {
                console.log("Response:", data);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    };

    const handleSubmit = () => {
        uploadImage(image);
    };

    return (
        <div onDrop={handleFileDrop} style={{ border: "1px solid black" }}>
            <div
                alt="image"
                src={image}
                style={{
                    width: "110px",
                    borderRadius: "16px",
                    height: "100px",
                }}
            ></div>
            <input
                ref={inputFileRef}
                accept="image/"
                id="image-upload"
                type="file"
                onChange={handleOnChange}
            />
            <label htmlFor="image-upload">
                <div>
                    {image ? <Icon label="Delete" /> : <Icon label="Upload" />}
                </div>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};
