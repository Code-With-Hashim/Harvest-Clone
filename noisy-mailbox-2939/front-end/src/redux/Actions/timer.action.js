import axios from "axios"
import { editTimer, getTimer, postTimer } from "../Types.js/time.type"

export const PostTimer = (userTimerPost, token) => async (dispatch) => {
    try {

        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/time`, userTimerPost, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        dispatch({type : postTimer})



    } catch (error) {
        console.log(error)
    }
}

export const GetTimer = (token) => async (dispatch) => {

    try {

        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/time`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        dispatch({type : getTimer , payload : data})



    } catch (error) {
        console.log(error)
    }
}

export const PatchTimer = (id , updateTimer , token) => async (dispatch) => {

    try {

        const { data } = await axios.patch(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/time/${id}`, {startPostTime : updateTimer} , {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        dispatch({type : editTimer , payload : data})



    } catch (error) {
        console.log(error)
    }

}

