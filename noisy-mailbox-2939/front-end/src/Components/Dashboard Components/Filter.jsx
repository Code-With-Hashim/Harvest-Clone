import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex, Button, Divider, Text, HStack, Spacer } from '@chakra-ui/react'
import { FaCalendar } from 'react-icons/fa'



export default function DashboardFilter() {

    
    
    return (
        <Flex w='80%' m='auto' justifyContent={'center'} alignItems='center' >
            <HStack borderRadius={10} my='5' mx='5' border={'1px solid black'} justifyContent='center' alignItem='center'>
                <Button size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'} children={<ArrowBackIcon boxSize={4} />}></Button>
                <Divider h='9'  orientation='vertical' />
                <Button size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'} children={<ArrowForwardIcon boxSize={4} />}></Button>
            </HStack >
            {/* <Text as='b' fontSize='3xl'></Text> error */}
            <Spacer />
            <Button bgColor={'white'} border='1px solid black'  children={<FaCalendar />} ></Button>
            <HStack borderRadius={10} my='5' mx='5' border={'1px solid black'} justifyContent='center' alignItem='center'>
                <Button size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'}>Day</Button>
                <Divider h='9'  orientation='vertical' />
                <Button size='sm' m='0.5' colorScheme={'white'} color='black' bgColor={'white'} >Week</Button>
            </HStack >
        </Flex>
    )
}