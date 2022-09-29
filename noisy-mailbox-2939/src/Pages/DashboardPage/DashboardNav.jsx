import { Box, Flex, Spacer , } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import Trigger from "../../Components/Popover"
import Styles from './Navbar.module.css'

const link = [
    { title: 'Time', path: '/harvest/dashboard/time' },
    { title: 'Expenses', path: '/harvest/dashboard/expenses' },
    { title: 'Projects', path: '/harvest/dashboard/projects' },
    { title: 'Team', path: '/harvest/dashboard/team' },
    { title: 'Reports', path: '/harvest/dashboard/reports' },
    { title: 'invoices', path: '/harvest/dashboard/invoices' },
    { title: 'Manage', path: '/harvest/dashboard/manage' },
]



export default function DashboardNav() {
    return (
        <Box bgColor='rgba(250,93,0,100%)'>
            <Flex px='6rem' justifyContent='space-around' alignItems={'center'}>
                <Box  color={'white'} as='b' w='50%' display={'flex'} justifyContent='space-around' alignItems={'center'} fontSize='sm'>
                    {
                        link.map((i) => <NavLink to={i.path} className={({isActive}) => {
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