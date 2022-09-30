import { Flex, Box, Spacer, ButtonGroup, Button, Image, Show } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import Menubutton from './MenuButton'

const buttonLink = [
    {title : "Why Harvest ?"},
    {title : "Features"},
    {title : "Customers"},
    {title : "Integration"},
    {title : "Pricing"}

]
//

export default function Navbar() {

    return (
        <Box>
            <Show above='lg'>
            <Flex w='full' m='auto' pos={'fixed'} zIndex={2} bgColor={{base : 'rgba(29,30,28,1.0)' , lg : 'white'} }  py='5' boxShadow='base'  px={20} alignItems='center'>
                <NavLink to={'/'}>
                <Box >
                    <Image src='https://i.ibb.co/120Dn3x/Main-Page-Logo.png' w='60%'/>
                </Box>
                </NavLink>
                <Spacer />
                <ButtonGroup colorScheme={"white"} color={{ lg : "black" , sm : 'white' , md : 'black'}} variant='ghost' gap='2'>
                  {
                    buttonLink.map((i) => <Button>{i.title}</Button>)
                  }
                </ButtonGroup>
                <Spacer />
                <ButtonGroup gap='2'>
                    <NavLink to='/harvest/signin'><Button colorScheme={"white"} color="black" variant='ghost'>Sign In</Button></NavLink>
                    <NavLink to={'/signup'}><Button borderRadius={15} px={10} py="3" colorScheme="rgba(250,93,0,100%);">Try Harvest Free</Button></NavLink>
                </ButtonGroup>
                    
            </Flex>
            </Show>
            <Show below='lg'>
            <Menubutton />
            </Show>
            
        </Box>
    )
}