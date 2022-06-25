import React from 'react'
import exportFromJSON from 'export-from-json'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCode, faFileCode, faDownload} from "@fortawesome/free-solid-svg-icons"


export const FileExport = ({datos,flag}) => {

    const handleDownloadJSON = (e) =>{
        const data = datos
        const fileName = 'EncryptedJSON'
        let exportType =  exportFromJSON.types.json
        exportFromJSON({ data, fileName, exportType })
    }

    const handleDownloadXML = (e) =>{
        const data = datos
        const fileName = 'EncryptedXML'
        let exportType =  exportFromJSON.types.xml
        exportFromJSON({ data, fileName, exportType })
    }
    
    const handleDownloadTXT = (e) =>{
        const data = datos
        const fileName = 'Text'
        let exportType =  exportFromJSON.types.txt
        exportFromJSON({ data, fileName, exportType })
    }
    

    return (
        <>
            {(!flag) && 
            <div>
                <button className='btn btn-info text-light me-3' onClick={handleDownloadJSON}><FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon> Descargar JSON</button>
                <button className='btn btn-warning text-light' onClick={handleDownloadXML}><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> Descargar XML</button>
            </div>}
            {(flag) && <button className='mx-auto btn btn-outline-success' onClick={handleDownloadTXT}><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Descargar TXT</button>}
        </>
    )
}
