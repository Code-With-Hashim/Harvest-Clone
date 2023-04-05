import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex, Button, Divider, Text, HStack, Spacer } from '@chakra-ui/react'
import { FaCalendar } from 'react-icons/fa'
import { DecDate, DecDayIndex, IncDate, IncDayIndex, countDayIndex } from '../../redux/Actions/day.action'



export default function DashboardFilter() {

    const { date } = useSelector(({ dayReducer }) => dayReducer)


    const dispatch = useDispatch()


    const incHandleDate = () => {
        dispatch(DecDayIndex())
        dispatch(DecDate())
    }
    const decHandleDate = () => {
        dispatch(IncDayIndex())
        dispatch(IncDate())
    }

    function getDate() {
        const exactDate = new Date(date)
        const todayDate = new Date()

        // Thu Apr 06 2023 14:01:22 GMT+0530 (India Standard Time)

        const [Day , Month , datex , Year] = exactDate.toString().split(" ")
        const [TDay , TMonth , Tdatex , TYear] = todayDate.toString().split(" ")


        function fullDay () {
            switch(Day) {
                case 'Mon' : return 'Monday'
                case 'Tue' : return 'Tuesday'
                case 'Wed' : return 'Wednesday'
                case 'Thu' : return 'Thursday'
                case 'Fri' : return 'Friday'
                case 'Sat' : return 'Saturday'
                case 'Sun' : return 'Sunday'

                default : {
                    return 'Invalid Day'
                }
            }
        }

        if(Day === TDay &&
           TMonth === Month && 
           datex === Tdatex && 
           TYear === Year  ) {
            return `Today: ${fullDay()}, ${datex} ${Month}`
        } else {
            return `${fullDay()}, ${datex} ${Month}`

        }
        

        // return exactDate
    }


    return (
        <Flex w='80%' m='auto' justifyContent={'center'} alignItems='center' >
            <HStack borderRadius={10} my='5' mx='5' border={'1px solid black'} justifyContent='center' alignItem='center'>
                <Button onClick={incHandleDate} size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'} children={<ArrowBackIcon boxSize={4} />}></Button>
                <Divider h='9' orientation='vertical' />
                <Button onClick={decHandleDate} size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'} children={<ArrowForwardIcon boxSize={4} />}></Button>
            </HStack >
            <Text as='b' fontSize='3xl'>{getDate()}</Text>
            <Spacer />
            <Button bgColor={'white'} border='1px solid black' children={<FaCalendar />} ></Button>
            <HStack borderRadius={10} my='5' mx='5' border={'1px solid black'} justifyContent='center' alignItem='center'>
                <Button size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'}>Day</Button>
                <Divider h='9' orientation='vertical' />
                <Button size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'} >Week</Button>
            </HStack >
        </Flex>
    )
}