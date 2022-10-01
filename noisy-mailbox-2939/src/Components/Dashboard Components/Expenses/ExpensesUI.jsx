import { AddIcon } from "@chakra-ui/icons";
import {
    Box, Text, Button, VStack, Center, Image,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure,
    CloseButton,
    Grid,
    HStack,
    Input,
    Select,
    Textarea,
    InputGroup,
    InputLeftElement,
    Spacer
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




export default function ExpensesUI() {
    
    const [expenesesData, setExpensesData] = React.useState([])

    return (<Box>
        <Box >
            <VStack px='10' my='10'>
                <Text as="b" fontSize={'3xl'}>Expenses</Text>
                <AlertClick />
            </VStack>
        </Box>
        <Box>
            {
                expenesesData.length === 0 ? <EmptyTabList /> : <Box>Hello World</Box>
            }
        </Box>
    </Box>)
}


function AlertClick() {

    const [data , setData] = React.useState(initalState)

    const handelData = (e) => {
        let {name , value , type} = e.target

        if(type === 'number') {
           value =  Number(value)
        }

        setData({...data , [name] : value})
    }

    const handelSubmit = () => {
        axios.post('https://harvest-json-server.onrender.com/Expenses', data)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
        setData(initalState)
        onClose()
    }

    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })

    return (<>
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
                <Button onClick={handelSubmit} colorScheme={'green'}>Save Expenses</Button>
                <Button onClick={onClose}>Cancel</Button>
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
    )
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







