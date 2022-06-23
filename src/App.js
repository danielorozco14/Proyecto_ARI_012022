import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { FileChooser } from './components/FileChooser'
import { HeaderApp } from './components/HeaderApp'
import { Encrypter } from './Encrypter'
import { store } from './store/store'

export const App = () => {

    return (
        <>
            <Provider store={ store }>
                <Encrypter/>
            </Provider>
        </>
  )
}
