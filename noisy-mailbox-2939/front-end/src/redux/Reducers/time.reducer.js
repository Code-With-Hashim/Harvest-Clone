import { editTimer, getTimer, postTimer } from "../Types.js/time.type"

const timeInitState = {
    loading : false,
    error : false,
    success : false,
    timerData : []
}

export const userPostReducer = (state = timeInitState , {type , payload}) => {
    
    switch(type) {
        case postTimer : {
            return {
                ...state,
                success : !state.success
            }
        }

        case getTimer : {

            console.log(payload)

            return {
                ...state,
                success : true,
                timerData : payload
            }
        }

        case editTimer : {
            return {
                ...state,
                success : !state.success
            }
        }

        default : {
            return state
        }
    }

}