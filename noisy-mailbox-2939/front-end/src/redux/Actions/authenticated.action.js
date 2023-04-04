import axios from "axios"
import { 
    SIGNIN_ERROR, 
    SIGNIN_LOADING, 
    SIGNIN_SUCCESS, 
    SIGNUP_ERROR, 
    SIGNUP_LOADING, 
    SIGNUP_SUCCESS
 } from "../Types.js/authenticated.type"

export const userSignUp = (userDetail , toast) => async (dispatch) => {

    dispatch({ type: SIGNUP_LOADING })
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/signup`, userDetail)

        
        data && dispatch({ type: SIGNUP_SUCCESS }) && toast({
            title: data.message,
            variant: 'left-accent',
            isClosable: true,
            position : 'top',
            status: 'success'
          })

    } catch (error) {
        console.log(error)
        dispatch({ type: SIGNUP_ERROR })
        toast({
            title: error.response.data.message,
            variant: 'left-accent',
            isClosable: true,
            position : 'top',
            status: 'error'
          })
    }
}

export const userSignIn = (credential , toast , cookie) => async (dispatch) => {
    dispatch({ type: SIGNIN_LOADING })
    try {

        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`, credential)

        data && data.token && dispatch({type : SIGNIN_SUCCESS , payload : {
            token : data.token ,
            cookie
        }})


    } catch (error) {
        console.log(error)
        dispatch({ type: SIGNIN_ERROR })
        toast({
            title: error.response.data.message,
            variant: 'left-accent',
            isClosable: true,
            position : 'top',
            status: 'error'
          })
    }
}