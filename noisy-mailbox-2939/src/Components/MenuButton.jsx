import {
    Box, Button, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    Divider,
    Image,
    HStack,
    Center
} from "@chakra-ui/react"

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { FaAndroid, FaApple } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function Menubutton() {

    const Navigate = useNavigate()

    return (
        <Accordion pos='fixed' w='full' zIndex={2} bgColor='rgba(29,30,28,1.0)' allowToggle>
            <AccordionItem  autoFocus={false} border="none">
                {({isExpanded}) => (
                    <>
                    <Box  display={{base : 'flex' , lg : 'none' }} justifyContent='space-between' alignItems={'center'}>
                    <Box>
                     <Image src={'https://i.ibb.co/hZ3X010/Black-White-Logo.png'} w={40} />
                    </Box>
                    <Box>
                    <AccordionButton>
                        <Button color="white" bgColor="gray" colorScheme="black" leftIcon={isExpanded ? <CloseIcon /> : <HamburgerIcon />}>
                            Menu
                        </Button>
                    </AccordionButton>
                    </Box>
                </Box>
                
                <AccordionPanel color={'white'} pb={4} textAlign='left'>
                    <Box>
                    <Text as='b'  >Why Harvest ?</Text>
                    <Divider my="5"/>
                    <Text as='b' >Features</Text>
                    <Divider  my="5"/>
                    <Text as='b' >Customers</Text>
                    <Divider my="5"/>
                    <Text as='b' >Integrations</Text>
                    <Divider my="5"/>
                    <Text as='b' >Pricing</Text>
                    <Divider my="5"/>
                    </Box>
                    <HStack >
                        <Button  onClick={()=> Navigate('/harvest/dashboard/time')} _hover={{color : 'rgba(250,93,0,100%)'}} fontSize='xl' w='full' color="white" bgColor="gray" colorScheme="black">
                            Sign in
                        </Button>
                        <Button onClick={()=> Navigate('/signup')} _hover={{color : 'rgba(250,93,0,100%)'}} fontSize='xl' w='full' color="white" bgColor="gray" colorScheme="black">
                            Try Harvest Free
                        </Button>
                    </HStack>
                    <Box py='10'>
                        <Center my='4'>Get the Mobile app:</Center>
                        <HStack>
                            <Button fontSize='xl' w='full' color={'white'} bgColor='gray' leftIcon={<FaApple boxSize='3'/>}>
                                iPhone
                            </Button>
                            <Button fontSize='xl' w='full' color={'white'} bgColor='gray' leftIcon={<FaAndroid boxSize='3'/>}>
                                Android
                            </Button>
                        </HStack>
                    </Box>
                </AccordionPanel>
                </>
                )}    
            </AccordionItem>
        </Accordion>
    )
}