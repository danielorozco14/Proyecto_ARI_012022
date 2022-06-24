import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { saveTextRead } from '../actions/text';
import { useForm } from '../hook/useForm';
var XMLParser = require('react-xml-parser');

export const FileUploader=()=>{
	const [selectedFile, setSelectedFile] = useState();
	const [selectedFileType, setSelectedFileType] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [formValues ,handleInputChange] = useForm({
        key:""
    });
    const {key} = formValues;
    const dispatch = useDispatch();


	const changeHandler = (e) => {

        setIsFilePicked(true);
        setSelectedFileType(e.target.files[0].type);
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setSelectedFile(e.target.result);
        };
	};

    const handleSubmission = (e) =>{
        e.preventDefault();
        if(selectedFileType==="application/json") {
            let objeto = JSON.parse(selectedFile);
            dispatch(saveTextRead(objeto))
        }if(selectedFileType=="text/xml"){
            var xml = new XMLParser().parseFromString(selectedFile);    // Assume xmlText contains the example XML
            dispatch(saveTextRead(xml))
        }
    }

	return(
   <div>
			<input type="file" name="file" placeholder="Hola Mundo"onChange={changeHandler}/>
			{isFilePicked ? (
				<div>
                    <p>{selectedFile}</p>
				</div>
			) : (
				<p>Seleccione un archivo para mostrar detalles</p>
			)}
			<form onSubmit={handleSubmission}>
                <input type="text" placeholder='Llave' name="key" autoComplete='off' value={key} onChange={handleInputChange}/>
            <button>Desencriptar</button>
        </form>
		</div>
	)
}