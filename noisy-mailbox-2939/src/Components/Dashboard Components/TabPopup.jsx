import { AddIcon } from '@chakra-ui/icons'
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, Button, Grid, GridItem, Center, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel,
    Select,
    Textarea,
    NumberInput,
    NumberInputField,

}
    from '@chakra-ui/react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const days = [
    { day: 'Mon', fullDay: 'Monday' },
    { day: 'Tue', fullDay: 'Tuesday' },
    { day: 'Wed', fullDay: 'Wednesday' },
    { day: 'Thu', fullDay: 'Thursday' },
    { day: 'Fri', fullDay: 'Friday' },
    { day: 'Sat', fullDay: 'Saturday' },
    { day: 'Sun', fullDay: 'Sunday' },
    { day: 'Week', fullDay: 'Total Week' }
]




const initalState = {
    ProjectName : '',
    ClientName : 'Example ClientName',
    ProjectDesign : '',
}

export default function TabPopUp() {
    const [data, setData] = useState()
    const { setDay } = useContext(AuthContext)



    const handelDay = (day) => {
        setDay(day)
    }


    return (
        <Center>
            <Grid w='90%' m='auto' display={'grid'} gridTemplateColumns='repeat(6,1fr)'>
                <GridItem colSpan={1}>
                    <OpenModal />
                </GridItem>
                <GridItem colSpan={5}>
                    <Tabs isFitted>
                        <TabList>
                            {
                                days.map((d) => <Tab onClick={() => handelDay(d.fullDay)} key={d.day}>{d.day}</Tab>)
                            }
                        </TabList>
                        <TabPanels >
                            <TabPanel>
                                
                            </TabPanel>
                            <TabPanel>
                                <p>World</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </GridItem>
            </Grid>
        </Center>
    )
}

function EmptyTabList() {
    return (
        <Box display={'flex'} justifyContent='center' alignItems={'center'} bgColor={'gray'} h='400px' Box='full'>
            <Text color={'gray.800'} fontSize={'4xl'}>
                No Data Added here
            </Text>
        </Box>
    )
}

function OpenModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isDay } = useContext(AuthContext)
    const [data, setData] = useState(initalState)

    const handelData =(e)=> {
        const {name , value} = e.target;

        setData({...data , [name] : value})
    }

    const handelSubmit = () => {
        console.log(data)
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme={'green'} p='6' children={<AddIcon boxSize={'7'} />}></Button>
            <Center>
            <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <Center bgColor={'gray.200'}><Text as='b' my='2'>New Time entry for {isDay}</Text></Center>
                    <ModalBody>
                        <FormControl rowGap={2}>
                            <FormLabel>Project/Task</
                            FormLabel>
                            <Select name='ProjectName' onChange={handelData} placeholder='Example Client'>
                                <option value={'Example Project'}>
                                    Example Project
                                </option>
                            </Select>
                            <Select name='ProjectDesign' onChange={handelData} my='3' placeholder='Demo Design'>
                                <option value='Design'>
                                    Design
                                </option>
                                <option value='Marketing'>
                                    Marketing
                                </option>
                                <option value='Programming'>
                                    Programming
                                </option >
                                <option value='Project Managment'>
                                    Project Managment
                                </option>
                            </Select>
                            <Box my='3' display={'flex'} columnGap='5' >
                                <Textarea resize={'none'} size='sm' placeholder='Notes' />
                                <NumberInput h='3' placeholder='0.00'>
                                    <NumberInputField w='150px' h='80px' fontSize='4xl' textAlign={'right'} placeholder='0.00' />
                                </NumberInput>
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent='left' gap='5'> 
                        <Button onClick = {handelSubmit} colorScheme={'green'}>Start timer</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </Center>
        </>
    )
}