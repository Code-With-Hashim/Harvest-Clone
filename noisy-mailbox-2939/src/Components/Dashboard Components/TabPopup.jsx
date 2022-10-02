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
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    VStack

}
    from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios'
import { useSearchParams } from "react-router-dom"

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


const getData = (Day) => {
    return axios.get(`https://harvest-mock-server-data.onrender.com/${Day}`)
}

const initalState = {
    ProjectName: '',
    ClientName: 'Example ClientName',
    ProjectDesign: '',
    notes : '',
    timer : Number(0)
}

export default function TabPopUp() {
    const { isDay , setDay } = useContext(AuthContext)
    const [searchParams , setSearchParams] = useSearchParams()
    const [getTask , setTask]  = useState([])
    

    useEffect(()=> {
       
        setSearchParams({day : isDay.toLowerCase() })
        
    },[isDay, setSearchParams])

    useEffect(()=> {
        
        getData(isDay.toLowerCase()).then((res)=> setTask(res.data))

    },[isDay])

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
                           {
                            days.map((d) => <TabPanel>
                                {getTask.length===0 ? <EmptyTabList /> : <TabDataList Data={getTask} />}
                            </TabPanel>)
                           }
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


const postData = (task,Day) => {
    return axios.post(`https://harvest-mock-server-data.onrender.com/${Day}`, task)
}

function OpenModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isDay } = useContext(AuthContext)
    const [data, setData] = useState(initalState)

    const handelData = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value })
    }

    const handelSubmit = () => {
        postData(data, isDay.toLowerCase())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
        onClose()
        
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
                                    <option >
                                        Design
                                    </option>
                                    <option >
                                        Marketing
                                    </option>
                                    <option >
                                        Programming
                                    </option >
                                    <option >
                                        Project Managment
                                    </option>
                                </Select>
                                <Box my='3' display={'flex'} columnGap='5' >
                                    <Textarea name={'notes'} onChange={handelData} resize={'none'} size='sm' placeholder='Notes' />
                                    <NumberInput h='3' placeholder='0.00'>
                                        <NumberInputField w='150px' h='80px' name='timer' onChange={handelData} fontSize='4xl' textAlign={'right'} placeholder='0.00' />
                                    </NumberInput>
                                </Box>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter display={'flex'} justifyContent='left' gap='5'>
                            <Button onClick={handelSubmit} colorScheme={'green'}>Start timer</Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    )
}


function TabDataList({Data}) {



    

    return (
        <TableContainer>
  <Table variant='simple'>
    <Thead>
    </Thead>
    <Tbody>
        {
            Data.map((i) => <Tr>
                <Td><VStack>
                    <Text><b>{i.ProjectName} </b> ({i.ClientName})</Text>
                    <Text textAlign={'left'} fontSize={'sm'}>{i.notes}</Text>
                    </VStack></Td>
                <Td>{i.ProjectDesign}</Td>
                <Td>{i.timer}</Td>
                <Td><Button>Start</Button></Td>
                <Td><EditModal id={i.id}/></Td>
            </Tr>)
        }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th>Total</Th>
        <Th></Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    )
}

function EditModal({id}) {
const { isOpen, onOpen, onClose } = useDisclosure()
const { isDay } = useContext(AuthContext)
const [data, setData] = useState(initalState)

const handelData = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value })
}

const handelUpdate = () => {
    axios.patch(`https://harvest-mock-server-data.onrender.com/${isDay}/${id}`, data)
    onClose()
}

const handelDelete = () => {
    axios.delete(`https://harvest-mock-server-data.onrender.com/${isDay}/${id}`);
    onClose();

}


    return (
        <>
        <Button onClick={onOpen} colorScheme={'green'} >Edit</Button>
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
                                <option >
                                    Design
                                </option>
                                <option >
                                    Marketing
                                </option>
                                <option >
                                    Programming
                                </option >
                                <option >
                                    Project Managment
                                </option>
                            </Select>
                            <Box my='3' display={'flex'} columnGap='5' >
                                <Textarea name='notes' onChange={handelData} resize={'none'} size='sm' placeholder='Notes' />
                                <NumberInput h='3' placeholder='0.00'>
                                    <NumberInputField w='150px' h='80px' name='timer' onChange={handelData} fontSize='4xl' textAlign={'right'} placeholder='0.00' />
                                </NumberInput>
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent='left' gap='5'>
                        <Button onClick={handelUpdate} colorScheme={'green'}>Update timer</Button>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme={'red'} onClick={handelDelete}>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    </>
    )
}

