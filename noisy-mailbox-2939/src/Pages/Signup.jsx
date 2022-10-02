import {
    Box, Image, FormControl,
    FormLabel,
    Button,
    Divider,
    Text,
    Input,
    Stack,
    Grid,
    GridItem,


} from "@chakra-ui/react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import { NavLink } from "react-router-dom";


const initalState = {
    firstName:'',
    lastName:'',
    email: "",
    password: "",
}

const PostUser = (formData) => {

    return axios.post('https://authodegya.herokuapp.com/registeration', formData)

}

export default function Signup() {
    
    const [formData, setFormData] = useState(initalState)

    const handelInput = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

  


    const handelForm = () => {
        PostUser(formData).then((res) =>
        alert('Succesfully Created Account')
         
        )
        .catch((err) => console.log('Something is issue please refresh again'))

    }




    return (
        <Box backgroundImage="url('https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/auras/aura-top-right-corner.png')"
            bgSize={'100%'}
            backgroundRepeat="no-repeat"
        >
            <FormControl textAlign={'left'} py='10' w='35%' m='auto'>
                <NavLink to='/'><Image src="https://i.ibb.co/2WTGg3M/Signu-Page-Logo.png" ></Image></NavLink>
                <Text mt='5' py='5' as='b' fontSize='3xl'>Start your free 30-day trial.</Text>
                <Text fontSize='lg'>Fully Functional. No credit card Required</Text>
                <Button my='2' mt='5' bgColor={'white'} border='1px solid gray' _hover={{ border: '1px solid black' }} leftIcon={< FaGoogle />} w='full' >Sign up with Google</Button>
                <Stack direction='row' justifyContent={'center'} alignItems='center'>
                    <Divider w='20%' h='0.4' bgColor='gray' orientation="horizontal" />
                    <Text py='5'  >or with your email below</Text>
                    <Divider w='20%' h='0.4' bgColor='gray' orientation="horizontal" />
                </Stack>
                <Grid rowGap={3} templateRows={'repeat(5,1fr)'} templateColumns={'repeat(3,1fr)'}>
                <GridItem colSpan={1}>
                        <FormLabel>First Name</FormLabel>
                    </GridItem>
                    <GridItem colSpan={2}>
                    <Input  onChange={handelInput} name='firstName' value={formData.firstName} border='1px solid gray' bgColor="white" type='text' />
                    </GridItem>
                
                <GridItem colSpan={1}>
                        <FormLabel>Last Name</FormLabel>
                    </GridItem>
                    <GridItem colSpan={2}>
                    <Input colSpan={2} onChange={handelInput} name='lastName' value={formData.lastName} border='1px solid gray' bgColor="white" type='text' />
                    </GridItem>
                
                <GridItem colSpan={1}>
                        <FormLabel>Company Name</FormLabel>
                    </GridItem>
              <GridItem colSpan={2} >
              <Input   border='1px solid gray' bgColor="white" type='text' />
              </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel>Work Email</FormLabel>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Input onChange={handelInput} name='email' value={formData.email} border='1px solid gray' bgColor="white" type='email' />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel>Password</FormLabel>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Input onChange={handelInput} name='password' value={formData.password} border='1px solid gray' bgColor="white" type='password' />
                    </GridItem>
                </Grid>
                <Button onClick={handelForm} colorScheme='green' w='full' mt={10}>Create My Account</Button>
            </FormControl>

        </Box>
    )
}