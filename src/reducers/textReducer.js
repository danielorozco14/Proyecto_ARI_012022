import { types } from "../types/types";

const initialState = {
    data:[],
    active:false
}

export const textReducer = (state = initialState,action) =>{

    switch (action.type) {
       case types.saveText :
           return {
               data: action.payload.arr,
               active: action.payload.active
           }
        
        default:
            return state;
    }

}