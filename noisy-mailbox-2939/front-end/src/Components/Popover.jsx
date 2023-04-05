import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    Portal,
    AvatarGroup,
    Avatar,
    Text,
    Box,
    Divider,
    useDisclosure,

} from '@chakra-ui/react'
import UserAvatar from './UserAvatar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Cookies from "js-cookie"
import { useDispatch } from 'react-redux'
import { userSignOut } from '../redux/Actions/authenticated.action'

async function getUserDetail (url , token) {


    const {data} = await axios.get(url , {
        headers : {
            Authorization : `Bearer ${token.jwt}`
        }
    })

    return data

}

export default function Trigger() {

    
     const {isOpen , onClose , onToggle} = useDisclosure()
     const [tokenCookie , setTokenCookie , removeTokenCookie] = useCookies(['jwt'])
     const [userDetail , setUserDetail] = useState({})
     const dispatch = useDispatch()

     
     useEffect(() => {
       getUserDetail(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/user-detail` , tokenCookie)
        .then(res => setUserDetail(res))
        .catch(err => console.log(err))
     }, [])


    return (
        
        <Popover
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
        >
            <PopoverTrigger>
            <AvatarGroup >
                <Avatar name={userDetail && userDetail.fullName && userDetail.fullName.firstName} src={userDetail && userDetail.avatar && userDetail.avatar} onClick={onToggle} size='sm' bg='teal.500' />
            </AvatarGroup>                
            </PopoverTrigger>
            <Portal >
                <PopoverContent w='100%'>
                    <PopoverArrow />
                    
                    <Box mx='5' as='b' my='2' display='flex' justifyContent={'space-between'} alignItems='center'>
                        <UserAvatar props={userDetail && userDetail.avatar && userDetail} />
                        <Text >{userDetail && userDetail.fullName && userDetail.fullName.firstName+" "+userDetail.fullName.lastName}</Text>
                    </Box>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' , cursor : 'pointer'}} py='1' px='2'>My Profile</Text>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' , cursor : 'pointer'}} py='1' px='2'>My Time Report</Text>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' , cursor : 'pointer'}} py='1' px='2'>Notification</Text>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' , cursor : 'pointer'}} py='1' px='2'>Refer a friend</Text>
                   <Divider />
                   <Text onClick={() => dispatch(userSignOut(Cookies.remove))} _hover={{bgColor : 'black', color : 'white' , w : 'full' , cursor : 'pointer' }} my='4' px='2' py='1' >Sign Out</Text>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}