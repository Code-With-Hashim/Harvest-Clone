import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex , Button,  Divider,  HStack } from '@chakra-ui/react'



export default function DashboardFilter() {
    console.log(new Date())
    return (
        <Flex w='80%' m='auto' >
            <HStack borderRadius={10} my='5' mx='5' border={'1px solid black'} justifyContent='center' alignItem='center'>
            <Button size='sm' m='0.5' colorScheme={'white'} color = 'black' bgColor={'white'} children={<ArrowBackIcon boxSize={4} />}></Button>
            <Divider orientation='vertical'/>
            <Button size='sm' m='0.5' colorScheme={'white'} color = 'black' bgColor={'white'} children={<ArrowForwardIcon boxSize={4}  />}></Button>
            </HStack >
        </Flex>
    )
}