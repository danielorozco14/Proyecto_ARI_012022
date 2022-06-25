import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveText, saveTextRead } from '../actions/text';
import { jsonToText, xmlToText } from '../helper/toJson';
import { useForm } from '../hook/useForm';
import { FileExport } from './FileExport';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench} from "@fortawesome/free-solid-svg-icons";


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
            setText(xmlToText(xml,key,delimitador))
            dispatch(saveTextRead(text))
        }
    }

	return(
        <div className='row mt-4'>
           <div className='col-6'>
           <h6>Seleccione archivo XML o JSON para desencriptar:</h6>
			<input className='form-control' type="file" name="file" placeholder="Hola Mundo" onChange={changeHandler}/>
			{isFilePicked ? (
				<div className='card mt-4'>
                    <div className='card-header'>
                        Preview del archivo seleccionado
                    </div>
                    <div className='card-body'>
                    <p>
                        <code>
                            {selectedFile}
                        </code>
                    </p>
                        <br/>
                        <form onSubmit={handleSubmission}>
                            <div className='row'>
                                <div className='col-4'>
                                    <input  className='form-control' type="text" placeholder='Delimitador' name="delimitador" autoComplete='off' value={delimitador} onChange={handleInputChange}/>
                                </div>
                                <div className='col-4'>
                                    <input  className='form-control' type="text" placeholder='Llave' name="key" autoComplete='off' value={key} onChange={handleInputChange}/>
                                </div>
                                <div className='col-4'>
                                    <button className='btn btn-info text-light'><FontAwesomeIcon icon={faWrench}></FontAwesomeIcon> Desencriptar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
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
           </div>
           <div className='col-6'>
            {(text) && 
                <>
                    <br/>
                    <div className='mt-6'>
                        <div className='card'>
                            <div className='card-header'>
                                Preview del texto a guardar
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <code className='text-dark'>
                                            {text}
                                        </code>
                                    </div>
                                    <div className='col d-flex mt-2'>
                                        <div className='mx-auto'>
                                            <FileExport datos={text} flag={true}/>
                                        </div>
                                    </div>
                                </div>                           
                            </div>   
                        </div>        
                    </div>
                    
                </>
            }
           </div>
		</div>
	)
}