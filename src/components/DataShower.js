import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { generateJWT } from '../helper/jwt';
import { toJson } from '../helper/toJson';
import { useForm } from '../hook/useForm';

export const DataShower = () => {
    const {data} = useSelector( state => state.text );

    const [formValues ,handleInputChange] = useForm({
        delimitador: ";"
    });

    const {delimitador} = formValues;

    const [json, setjson] = useState();


    const handleLogin = (e) =>{
        e.preventDefault();
        // toJson(data,delimitador);
        setjson(toJson(data,delimitador,"Galatea"))
        // generateJWT(json,"Galatea");
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
            <div>{JSON.stringify(json,null,2)}</div>
        }

    </>
    )
}
