import {types} from '../types/types'

export const saveText = (arr) => {
    return (dispatch)=>{
        dispatch(addText(arr,true))
    }
}

export const addText = (arr,active) =>({
    type:types.saveText,
    payload:{
        arr,
        active
    }
})