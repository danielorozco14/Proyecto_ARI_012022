import React from 'react'

export const HeaderApp = () => {
    return (
        <>
            <header>
                <h1>Proyecto Administracion de Riesgos Informaticos</h1>
                <div className="card">
                    <div className="card-header">
                        <h2>Integrantes: </h2>
                    </div>
                    <div className='card-body'>
                        <ul className='list-group'>
                            <li className='list-group-item'>Alexis Mancia #00305018</li>
                            <li className='list-group-item'>Daniel Orozco #00200617</li>
                            <li className='list-group-item'>Moises Rosales #00218916</li>
                            <li className='list-group-item'>Lourdes Moran #00113417</li>
                        </ul>
                    </div>
                </div>                
            </header>
        </>
    )
}
