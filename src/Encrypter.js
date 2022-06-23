import React from 'react'
import { useSelector } from 'react-redux';
import { DataShower } from './components/DataShower';
import { FileChooser } from './components/FileChooser'
import { HeaderApp } from './components/HeaderApp'

export const Encrypter = () => {

    const {active} = useSelector( state => state.text );

    return (
        <>
            <HeaderApp/>

            {(!active) &&
                <FileChooser/>
            }

            { (active) &&
                <DataShower/>
            }
        </>
    )
}

// 4 revueltas
// 3 loroco con queso y frijol con queso
// 2 de loroco con queso
// 2 de frijo de queso