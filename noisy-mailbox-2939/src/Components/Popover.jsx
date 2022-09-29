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

export default function Trigger() {

     const {isOpen , onClose , onToggle} = useDisclosure()

    return (
        
        <Popover
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
        >
            <PopoverTrigger>
            <AvatarGroup >
                <Avatar onClick={onToggle} size='sm' bg='teal.500' />
            </AvatarGroup>                
            </PopoverTrigger>
            <Portal >
                <PopoverContent w='100%'>
                    <PopoverArrow />
                    
                    <Box mx='5' as='b' my='2' display='flex' justifyContent={'space-between'} alignItems='center'>
                        <UserAvatar />
                        <Text >User Name</Text>
                    </Box>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' }} py='1' px='2'>My Profile</Text>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' }} py='1' px='2'>My Time Report</Text>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' }} py='1' px='2'>Notification</Text>
                        <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' }} py='1' px='2'>Refer a friend</Text>
                   <Divider />
                   <Text _hover={{bgColor : 'black', color : 'white' , w : 'full' }} my='4' px='2' py='1' >Sign Out</Text>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}