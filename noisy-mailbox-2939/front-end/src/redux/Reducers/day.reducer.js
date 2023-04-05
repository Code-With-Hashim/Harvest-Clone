import { decrementDate, decrementDayIndex, incrementDate, incrementDayIndex, setDateType, setTabDayIndex } from "../Types.js/day.type"

const todayDay = () => {
    const date = new Date().getDay()

    return date
}

const todayDate = () => {
    const date = new Date().getTime()

    return date
}

const DayInitState = {
    tabIndex : todayDay() - 1,
    date : todayDate()
}

export const DayReducer = (state = DayInitState , {type , payload}) => {

    switch(type) {

        case incrementDayIndex : {
            if (state.tabIndex >= 6) {
                return {
                    ...state,
                    tabIndex : 0
                }
            } else {
                return {
                    ...state,
                    tabIndex : state.tabIndex + 1
                }
            }
        }

        case decrementDayIndex : {
            if(state.tabIndex <= 0) {
                return {
                    ...state,
                    tabIndex : 6
                }
            } else {
                return {
                    ...state,
                    tabIndex : state.tabIndex - 1
                }
            }
        }

        case setTabDayIndex : {
            // console.log(payload)
            return {
                ...state,
                tabIndex : payload
            }
        }

        case decrementDate : {
            return {
                ...state,
                date : state.date + payload
            }
        }

        case incrementDate : {
            return {
                ...state,
                date : state.date + payload
            }
        }

        case setDateType : {
            return {
                ...state,
                date : payload
            }
        }
        
        default : {
            return state
        }

    }

}