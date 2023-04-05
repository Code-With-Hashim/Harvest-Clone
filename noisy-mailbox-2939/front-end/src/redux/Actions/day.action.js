import { decrementDate, decrementDayIndex, incrementDate, incrementDayIndex, setDateType, setTabDayIndex } from "../Types.js/day.type";

export const IncDayIndex = () => ({type : incrementDayIndex})

export const DecDayIndex = () => ({type : decrementDayIndex})

export const setTabIndex = (index) => ({type : setTabDayIndex , payload : index})

export const IncDate = () => ({type : incrementDate , payload : (+24 * 60 * 60 * 1000)})

export const DecDate = () => ({type : decrementDate , payload : (-24 * 60 * 60 * 1000)})

export const setDate = (value) => ({type : setDateType , payload : value})
