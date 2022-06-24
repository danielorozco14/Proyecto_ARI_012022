import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveText, saveTextRead } from '../actions/text';
import { jsonToText, xmlToText } from '../helper/toJson';
import { useForm } from '../hook/useForm';
import { FileExport } from './FileExport';
var XMLParser = require('react-xml-parser');

export const FileUploader=()=>{
    const {dataRead,data} = useSelector( state => state.text );
	const [selectedFile, setSelectedFile] = useState();
	const [selectedFileType, setSelectedFileType] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [text, setText] = useState();
    const [formValues ,handleInputChange] = useForm({
        key:"",
        delimitador:""
    });
    const {key,delimitador} = formValues;
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
            setText(jsonToText(objeto,key,delimitador))
            dispatch(saveTextRead(text))
        }if(selectedFileType=="text/xml"){
            var xml = new XMLParser().parseFromString(selectedFile);
            //Funcion desencriptar xml

            let text = xmlToText(xml,key,delimitador)

            dispatch(saveTextRead(xml))
        }
    }

	return(
        <div>
            <br/>
            <p>Selecciones archivo XML o JSON para desencriptar:</p>
			<input type="file" name="file" placeholder="Hola Mundo"onChange={changeHandler}/>
			{isFilePicked ? (
				<div>
                    <p>Preview del archivo seleccionado:</p>
                    <p>{selectedFile}</p>
                    <br/>
                    <form onSubmit={handleSubmission}>
                        <input type="text" placeholder='Llave' name="key" autoComplete='off' value={key} onChange={handleInputChange}/>
                        <input type="text" placeholder='Delimitador' name="delimitador" autoComplete='off' value={delimitador} onChange={handleInputChange}/>
                        <button>Desencriptar</button>
                    </form>
				</div>
                
			) : (
				<p>Seleccione un archivo para mostrar detalles</p>
			)}
            {/* <ul>
                {
                    data.map( elem => (
                    
                            <li key={elem}>
                                {elem}
                            </li>
                    
                    ))
                }
            </ul> */}

            {(text) && 
            <>
                <br/>
                <div>Preview del texto a guardar:</div>
                <br/>
                <div>{text}</div>    
                <br/>       
                <FileExport datos={text} flag={true}/>
            </>
        }
		</div>
	)
}