import { useFilePicker } from "use-file-picker";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveText } from "../actions/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSave, faUpload} from "@fortawesome/free-solid-svg-icons";

export const  FileChooser = () =>{
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: ".txt"
    });
    const dispatch = useDispatch();

    const handleSaveText = (e) =>{
        let data = e.split(" ");

        dispatch(saveText(data))
    }

 
    return (
        <>
        <div className="container mt-4">
            <h5>Encriptar texto: </h5>
            <br/>
            <button className="btn btn-primary" onClick={() => openFileSelector()}><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon> Seleccione archivo de texto</button>
            <br />
                {filesContent.map((file, index) => (
                    <div key={index}>
                    <h2>{file.name}</h2>
                    <div key={index}>{file.content}</div>
                    <br/>
                    <button className="btn btn-success" onClick={()=>handleSaveText(file.content)}> 
                    <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Guardar Texto
                    </button>
                    <br />
                    </div>
                ))}
        </div>
           
        </>
    );
    }
