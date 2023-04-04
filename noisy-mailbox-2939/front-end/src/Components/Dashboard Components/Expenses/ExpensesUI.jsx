import {
    Box, Text, Button, VStack, Center, Image,
  
    useDisclosure,
    Grid,
    Input,
    Select,
    Textarea,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";


const initalState = {
    date : '',
    ProjectName : '',
    ProjectCategory : '',
    notes : '',
    amount : 0
}


const getExpensesData = () => {
    return axios.get('https://harvest-mock-server-data.onrender.com/Expenses')
}


export default function ExpensesUI() {

    const [data , setData] = React.useState(initalState)
    const [show , setShow] = React.useState(false)
    const [getid , setid ] = React.useState(0)
    const [expenesesData, setExpensesData] = React.useState([])
    const [totalSum , setTotalSum] = React.useState(0)
    
        const handelData = (e) => {
            let {name , value , type} = e.target
    
            if(type === 'number') {
               value =  Number(value)
            }
    
            setData({...data , [name] : value})
        }
    
        const handelSubmit = () => {
            
            if(show) {
                axios.patch(`https://harvest-mock-server-data.onrender.com/Expenses/${getid}` , data)
                setData(initalState)
                onClose()
                setShow(false)
               
            } else {
                axios.post('https://harvest-mock-server-data.onrender.com/Expenses', data)
                .then((res)=> console.log(res))
                .catch((err)=> console.log(err))
                setData(initalState)
               
            }


        }
    
        const {
            isOpen: isVisible,
            onClose,
            onOpen,
        } = useDisclosure({ defaultIsOpen: false })


  

    const handelEdit = (id) => {
        onOpen()
        setShow(true)
        setid(id)        

    }

    const handelDelete = () => {
        axios.delete(`https://harvest-mock-server-data.onrender.com/Expenses/${getid}`)
    }

  
    
    useEffect(()=> {
        getExpensesData().then((res)=> setExpensesData(res.data))
        .catch((err)=> console.log(err))
       
    },[handelSubmit, handelDelete])

    let totalAmount;
    if(expenesesData.length>1) {
       totalAmount =  expenesesData.reduce((a , b) => {
            return (a.amount+b.amount)
      })

    } else if(expenesesData.length === 1) {
        totalAmount = expenesesData[0].amount
    }

    useEffect(()=> {
        setTotalSum(totalAmount)
    },[totalAmount])

    

    
    
    const allData = () => {
        return (
            <Box  mb="5rem" w='90%' m='auto' bgColor={'orange.100'}>
                <TableContainer>
  <Table size='md' variant='striped' colorScheme='orange.100'>
    <Thead bgColor={'teal.100'} color='black'>
      <Tr textAlign={'left'}>
        <Th>Date</Th>
        <Th>into</Th>
        <Th>multiply by</Th>
        <Th ></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        expenesesData.map((i)=> <Tr key={i.id}>
            <Td>{i.date}</Td>
            
            <Td><Box textAlign={'left'}><b>{i.ProjectName}</b> ({i.ProjectCategory})
            <Text>{i.notes}</Text>
            </Box></Td>
            <Td >$ {i.amount}</Td>
            <Td border={'1px soldi black'} bgColor='none'><Button onClick={()=>handelEdit(i.id)}>Edit</Button></Td>
        </Tr>)
      }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th>Total {totalSum}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
            </Box>
        )
    }


    const handelCancel = () => {
        onClose()
        setShow(false)
    }
    
    
       
    

    return (<Box>
        <Box >
            <VStack px='10' my='10'>
                <Text as="b" fontSize={'3xl'}>Expenses</Text>
                <>
            <Button colorScheme={'green'} onClick={onOpen}>Track Expenses</Button>
    
            {isVisible ?
                <Grid bgColor={'orange.100'} templateColumns={'15% 70% 15%'} gap='2' w='full' border={'1px solid orange'} px='5' py='6'>
                   <Box w=''>
                    <Text >Date</Text>
                    <Input name={'date'} onChange={handelData} bgColor={'white'} my='2' type={'date'} />
                   </Box>
                   <Box >
                    <Box>
                    <Text>Project/Category</Text>
                    <Input name={'ProjectName'} onChange={handelData} bgColor={'white'} my='2' placeholder="Enter your Project Category" type={'text'} />
                    <Select name={'ProjectCategory'} onChange={handelData} bgColor={'white'} mb='2' placeholder="Choose a category">
                        <option value="Entertainment">Entertainment</option>
                        <option value="Lodging">Lodging</option>
                        <option value="Meals">Meals</option>
                        <option value="Mileage">Mileage</option>
                        <option value="Other">Other</option>
                        <option value="Transportation">Transportation</option>
                    </Select>
                    <Textarea onChange={handelData} name={'notes'} bgColor={'white'} mb='2' placeholder="Notes (optional)" />
                    <Box  display={'flex'} gap='2'>
                    <Button onClick={handelSubmit} colorScheme={'green'}>{show ? 'Update Expenses': 'Save Expenses' }</Button>
                    <Button onClick={handelCancel}>Cancel</Button>
                    {
                        show ? <Button onClick={handelDelete} colorScheme={'red'}>Delete</Button> : <></>
                    }
                    </Box>
                    </Box>
                   </Box>
                   <Box>
                    <Text mb='2'>Amount</Text>
                    <Input onChange={handelData} name={'amount'} bgColor={'white'} h='100px' type='number'></Input>
                   </Box>
                </Grid>
    
                : <></>
            }
        </>
                
            </VStack>
        </Box>
        <Box>
            {
                expenesesData.length === 0 ? <EmptyTabList /> : allData()
            }
        </Box>
    </Box>)
}




function EmptyTabList() {
    return (
        <Box w='90%' m="auto" bgColor={'blackAlpha.300'} py='6rem' mb='3' >
            <Center>
                <Image src="https://cache.harvestapp.com/static/illustrations/expense_onboard-AAC9C67E.png" />
            </Center>
            <Center>
                <Text>
                    Record those airline tickets, meals, miles, and other expenses in Harvest
                    so you can more accurately budget projects and invoice clients.
                </Text>
            </Center>
        </Box>
    )
}









