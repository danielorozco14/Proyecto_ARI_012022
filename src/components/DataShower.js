import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { generateJWT } from '../helper/jwt';
import { toJson } from '../helper/toJson';
import { useForm } from '../hook/useForm';
import exportFromJSON from 'export-from-json'
import { FileExport } from './FileExport';


export const DataShower = () => {
    const {data} = useSelector( state => state.text );

    const [formValues ,handleInputChange] = useForm({
        delimitador: ";"
    });
    
    const {delimitador} = formValues;
    
    const [json, setjson] = useState();


    const handleDownloadJSON = (e) =>{
        const data = json
        const fileName = 'EncryptedJSON'
        let exportType =  exportFromJSON.types.json
        exportFromJSON({ data, fileName, exportType })
    }

    const handleDownloadXML = (e) =>{
        const data = json
        const fileName = 'EncryptedXML'
        let exportType =  exportFromJSON.types.xml
        exportFromJSON({ data, fileName, exportType })
    }
    

    const handleLogin = (e) =>{
        e.preventDefault();
        // toJson(data,delimitador);
        setjson(toJson(data,delimitador,"Galatea"))
        // console.log()
    }

    return (
        <>
            <ul>
                {
                    data.map( elem => (
                    
                            <li key={elem}>
                                {elem}
                            </li>
                    
                    ))
                }
            </ul>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Delimitador' name="delimitador" autoComplete='off' value={delimitador} onChange={handleInputChange}/>
            <button>Generar JSON</button>
        </form>

        {(json) && 
            <>
                <br/>
                <div>Preview del JSON generado</div>
                <br/>
                <div>{JSON.stringify(json,null,2)}</div>
                <FileExport datos={json}/>
            </>

        }

        {/* {(json) && 
            <>
                <button onClick={handleDownloadJSON}>Descargar JSON</button>
                <button onClick={handleDownloadXML}>Descargar XML</button>
            </>
        } */}



    </>
    )
}
