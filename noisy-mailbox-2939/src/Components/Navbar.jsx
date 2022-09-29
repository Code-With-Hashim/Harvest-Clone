import { Flex, Box, Spacer, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const buttonLink = [
    {title : "Why Harvest ?"},
    {title : "Features"},
    {title : "Customers"},
    {title : "Integration"},
    {title : "Pricing"}

]

export default function Navbar() {

    return (
        <Box>
            <Flex zIndex={2} bgColor={"white"}position={'fixed'}  top={0}  boxShadow='base' minWidth='max-content' px={20} alignItems='center' gap='10'>
                <NavLink to={'/'}>
                <Box >
                    <Image src='data:image/png;base64,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' w={40} />
                </Box>
                </NavLink>
                <Spacer />
                <ButtonGroup colorScheme={"white"} color="black" variant='ghost' gap='2'>
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
            
        </Box>
    )
}