import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../Types.js/authenticated.type"

const token = document.cookie.split('jwt=')[1]

const initState = {
    auth : !!token,
    token : token,
    error : false,
    loading : false

}

export const authReducer = (state = initState , {type , payload}) => {


    switch(type) {
        case SIGNUP_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }

        case SIGNUP_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false
            }
        }

        case SIGNUP_ERROR : {
            return {
                ...state,
                loading : false,
                error : true
            }
        }

        case SIGNIN_SUCCESS : {

            payload.cookie('jwt' , payload.token , {
                maxAge : 24 * 60 * 60 * 1000
            })
            console.log(payload)

            return {
                ...state,
                loading : false,
                error : false,
                auth : true,
            }
        }

        case SIGNIN_ERROR : {
            return {
                ...state,
                loading : false,
                error : true
            }
        }

        case SIGNIN_LOADING : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }

        case SIGNOUT_SUCCESS : {
            payload('jwt')
            return {
                 ...state,
                 auth : false,
            }
        }

        default : {
            return state
        }
    }
}