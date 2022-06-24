import { types } from "../types/types";

const initialState = {
    data:[],
    active:false,
    dataRead:null
}

export const textReducer = (state = initialState,action) =>{

    switch (action.type) {
       case types.saveText :
           return {
                ...state,
               data: action.payload.arr,
               active: action.payload.active,
           }
        case types.saveTextRead : 
           return {
            ...state,
            dataRead: action.payload.dataRead
           }
        
        default:
            return state;
    }

}