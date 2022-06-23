import { useFilePicker } from "use-file-picker";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveText } from "../actions/text";

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
            <button onClick={() => openFileSelector()}>Seleccione archivo de texto.</button>
            <br />
            {filesContent.map((file, index) => (
                <div key={index}>
                <h2>{file.name}</h2>
                <div key={index}>{file.content}</div>
                <br/>
                <button onClick={()=>handleSaveText(file.content)}>Guardar Texto</button>
                <br />
                </div>
            ))}
        </>
    );
    }
