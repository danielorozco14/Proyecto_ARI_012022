import React from 'react'
import exportFromJSON from 'export-from-json'


export const FileExport = () => {
    
    const data = [{ foo: 'foo'}, { bar: 'bar' }]
    const fileName = 'download'
    const exportType =  exportFromJSON.types.json
    
    exportFromJSON({ data, fileName, exportType })
    
    return (
        <button onClick={()=>exportFromJSON}>FileExport</button>
    )
}
