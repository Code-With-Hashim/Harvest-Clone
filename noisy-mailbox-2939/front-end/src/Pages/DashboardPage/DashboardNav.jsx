import { Box, Flex, Spacer , } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import Trigger from "../../Components/Popover"
import Styles from './Navbar.module.css'


const link = [
    { title: 'Time', path: '/harvest/dashboard/time' },
    { title: 'Expenses', path: '/harvest/dashboard/expenses' },
]



export default function DashboardNav() {

  
    return (
        <Box bgColor='rgba(250,93,0,100%)'>
            <Flex px='6rem' justifyContent='space-around' alignItems={'center'}>
                <Box  color={'white'} as='b' w='50%' display={'flex'} justifyContent={{base : 'space-around', lg : "space-between"}} alignItems={'center'} fontSize='sm'>
                    {
                        link.map((i) => <NavLink key={i.path} to={i.path} className={({isActive}) => {
                            return isActive ? Styles.active : Styles.default
                        }}>{i.title}</NavLink>)
                    }
                </Box>
                <Spacer />
                <Box>
                <Trigger />
                </Box>

            </Flex>
            
        </Box>
    )
}