import React from 'react'
import exportFromJSON from 'export-from-json'


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
            {(!flag) && <div>
                
                    <br/>
                    <button onClick={handleDownloadJSON}>Descargar JSON</button>
                    <button onClick={handleDownloadXML}>Descargar XML</button>
                </div>}
            {(flag) && <button onClick={handleDownloadTXT}>Descargar TXT</button>}
        </>
    )
}
