import {types} from '../types/types'

export const saveText = (arr) => {
    return (dispatch)=>{
        dispatch(addText(arr,true))
    }
}

export const saveTextRead = (text) => {
    return (dispatch)=>{
        dispatch(addTextRead(text))
    }
}

export const addText = (arr,active) =>({
    type:types.saveText,
    payload:{
        arr,
        active
    }
})

export const addTextRead = (dataRead) =>({
    type:types.saveTextRead,
    payload:{
        dataRead
    }
})