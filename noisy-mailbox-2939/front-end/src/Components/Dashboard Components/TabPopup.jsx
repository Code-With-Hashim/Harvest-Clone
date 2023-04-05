import { AddIcon, SettingsIcon } from '@chakra-ui/icons'
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
    VStack,
    Input

}
    from '@chakra-ui/react'
import { useContext, useEffect, useRef } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from "react-router-dom"
import { setDate, setTabIndex } from '../../redux/Actions/day.action'
import { GetTimer, PatchTimer, PostTimer } from '../../redux/Actions/timer.action'

const days = [
    { day: 'Mon', fullDay: 'Monday' },
    { day: 'Tue', fullDay: 'Tuesday' },
    { day: 'Wed', fullDay: 'Wednesday' },
    { day: 'Thu', fullDay: 'Thursday' },
    { day: 'Fri', fullDay: 'Friday' },
    { day: 'Sat', fullDay: 'Saturday' },
    { day: 'Sun', fullDay: 'Sunday' },
    // { day: 'Week', fullDay: 'Total Week' }
]


const initalState = {
    clientProject: '',
    clientBillable: '',
    clientNotes : '',
    clientPostTime : new Date().getTime(),
    startPostTime : ''
}

export default function TabPopUp() {
    // const { isDay , setDay } = useContext(AuthContext)
    const [searchParams , setSearchParams] = useSearchParams()
    const {token} = useSelector(({authReducer}) => authReducer)
    const {tabIndex , date} = useSelector(({dayReducer}) => dayReducer)
    const {timerData ,success} = useSelector(({userTimerReducer}) => userTimerReducer)
    const [getTask , setTask]  = useState([])
    const dispatch = useDispatch()
    

    useEffect(()=> {
       
        setSearchParams({day : date })
        dispatch(GetTimer(token))
        
    },[date, setSearchParams , success])

    // useEffect(()=> {
        


    // },[date])

    const handleTabsChange = (index) => {
        dispatch(setTabIndex(index))
        const getTime = searchParams.get('day')
        const isDate = new Date(Number(getTime))

       
        const nextDate =  index - isDate.getDay() + 1
            
        isDate.setDate(isDate.getDate() + nextDate)


        console.log(index)

        dispatch(setDate(isDate.getTime()))

        
        setSearchParams({day : isDate.getTime() })

        
    }

    const handelSubmit = (val) => {
      
    }

    


    return (
        
        <Center>
            <Grid w='90%' m='auto' display={'grid'} gridTemplateColumns='repeat(6,1fr)'>
                <GridItem colSpan={1}>
                    <OpenModal handelSubmit={handelSubmit}/>
                </GridItem>
                <GridItem colSpan={5}>
                    <Tabs index={tabIndex} onChange={(index) => handleTabsChange(index)} isFitted>
                        <TabList>
                            {
                                days.map((d) => <Tab key={d.day}>{d.day}</Tab>)
                            }
                        </TabList>
                        <TabPanels >
                           {
                            days.map((d) => <TabPanel>
                                {timerData.length===0 ? <EmptyTabList /> : <TabDataList Data={timerData} />}
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


function OpenModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { token } = useSelector(({ authReducer }) => authReducer)
    const dispatch = useDispatch()

    const [data, setData] = useState(initalState)

    const handelData = (e) => {
        const { name, value } = e.target;


        setData({ ...data, [name]: value })
    }

    const handleStartTimer= () => {
        const [minute , second] = data.startPostTime.split(':').map(Number)

        if(second) {
            data.startPostTime = minute * 60 + second
        } else {
            data.startPostTime = minute * 60
        }
        
        dispatch(PostTimer(data , token))

    }

    

    

    return (
        <>
            <Button onClick={onOpen} colorScheme={'green'} p='6' children={<AddIcon boxSize={'7'} />}></Button>
            <Center>
                <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        {/* <Center bgColor={'gray.200'}><Text as='b' my='2'>New Time entry for {isDay}</Text></Center> */}
                        <ModalBody>
                            <FormControl rowGap={2}>
                                <FormLabel>Project/Task</
                                FormLabel>
                                <Select name='clientProject' onChange={handelData} placeholder='Example Client'>
                                    <option value={'Example Project'}>
                                        Example Project
                                    </option>
                                </Select>
                                <Select name='clientBillable' onChange={handelData} my='3' placeholder='Demo Design'>
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
                                    <Textarea name={'clientNotes'} onChange={handelData} resize={'none'} size='sm' placeholder='Notes' />
                                        <Input maxLength={'4'} w='150px' h='80px' name='startPostTime' onChange={handelData} fontSize='4xl' textAlign={'right'} placeholder='0:00' />
                                </Box>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter display={'flex'} justifyContent='left' gap='5'>
                            <Button onClick={handleStartTimer} colorScheme={'green'}>Start timer</Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    )
}


function TabDataList({Data}) {

    // const {success} = useSelector(({userTimerReducer}) => userTimerReducer)
    const {token} = useSelector(({authReducer}) => authReducer)
    const dispatch = useDispatch()
    const clearInter = useRef()
    const clearTimer = useRef(null)
    


    function Timer(timer) {
        const minute = Math.floor(timer / 60)

        const second = timer % 60

        return `${minute} : ${second}`
    } 

    const handleStartTime = (id, time) => {
        
    //    setInterval(() => {
    //      dispatch(PatchTimer(id , time , token))
    //     console.log(time)
    //    }, 1000)

        
    }

    return (
        <TableContainer>
  <Table variant='simple'>
    <Thead>
    </Thead>
    <Tbody>
        {
            Data.map((i) => <Tr>
                <Td><VStack>
                    <Text><b>{i.clientProject} </b> ({i.clientBillable})</Text>
                    <Text textAlign={'left'} fontSize={'sm'}>{i.clientNotes}</Text>
                    </VStack></Td>
                <Td>{i.clientBillable}</Td>
                <Td>{Timer(i.startPostTime)}</Td>
                <Td><Button onClick={() => handleStartTime(i._id , i.startPostTime)}>Start</Button></Td>
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
const [data, setData] = useState(initalState)

const handelData = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value })
}

// const handelUpdate = () => {
//     axios.patch(`https://harvest-mock-server-data.onrender.com/${isDay}/${id}`, data)
//     onClose()
// }

// const handelDelete = () => {
//     axios.delete(`https://harvest-mock-server-data.onrender.com/
//     ${isDay}/${id}`);
//     onClose();
//     <TabPopUp></TabPopUp>;
//     <TabDataList></TabDataList>
// }


    return (
        <>
        <Button onClick={onOpen} colorScheme={'green'} >Edit</Button>
        <Center>
            <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <Center bgColor={'gray.200'}><Text as='b' my='2'>New Time entry for </Text></Center>
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
                                    <Input w='150px' h='80px' name='timer' onChange={handelData} fontSize='4xl' textAlign={'right'} placeholder='0:00' />
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent='left' gap='5'>
                        <Button colorScheme={'green'}>Update timer</Button>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme={'red'} >Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    </>
    )
}

