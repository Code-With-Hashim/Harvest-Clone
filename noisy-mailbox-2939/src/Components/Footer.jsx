import { Box, Flex, Image, Spacer, Text, Button, HStack } from "@chakra-ui/react"
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Harvest = [
    {title : 'Home'},
    {title : 'Why Harvest ?'},
    {title : 'Why Harvest ?'},
    {title : 'Features'},
    {title : 'Integrations'},
    {title : 'Apps'},
    {title : 'Security'},
];

const Community = [
    {title : 'Customer Stories'},
    {title : 'Resources'},
    {title : 'Webiners'},
    {title : 'Help & Support'},
    {title : 'Integrate with Harvest'},
    {title : 'Time Well Spent'},
    {title :  'Time in This Time'}
]


const Company = [
    {title : 'About us'},
    {title : 'Blog'},
    {title : 'Careers'},
    {title : 'Legal'},
    {title : 'Contact Us'}

]


export default function Footer() {
    return (
        <Box bgColor='rgba(29,30,28,1.0)' color='white' py='4.5rem' px='5rem'>

            <Flex boxSize={'auto'}  >
                <Box>
                    <Image width={'80%'} src="https://i.ibb.co/hZ3X010/Black-White-Logo.png" alt='harvest logo' />
                </Box>
                <Spacer />
                <Box textAlign={'left'} >

                    <Text mb='5' fontSize={'2xl'}>Harvest</Text>
                    {
                        Harvest.map((i)=><Text fontSize={'xl'}>{i.title}</Text>)
                    }
                    
                </Box>
                <Spacer />
                <Box textAlign={'left'}>
                    <Text mb='5' fontSize={'2xl'}>Community</Text>
                    {
                        Community.map((i)=><Text fontSize={'xl'}>{i.title}</Text>)
                    }
                    
                </Box>
                <Spacer />
                <Box textAlign={'left'}>
                    <Text mb={5} fontSize={'2xl'}>Company</Text>
                    {
                        Company.map((i)=><Text fontSize={'xl'}>{i.title}</Text>)
                    }
                  
                </Box>
            </Flex>
            <Text border={'1px solid gray'} py='2' borderRadius={'10'} color='gray' bgColor='blackAlpha.50' my='10' fontSize={'md'}>We also make: Harvest Forecast-the fast and simple way to schedule your team across projects</Text>
            <HStack>
                <Text pr={'35rem'} color={'gray'} as='b' fontSize={'xl'}>2006-2022 Harvest</Text>
                <Button color={'gray'} fontSize={'xl'} colorScheme='black' leftIcon={<FaTwitter />}>
                    Twitter
                </Button>
                <Button color={'gray'} fontSize={'xl'} colorScheme='black' leftIcon={<FaLinkedin />}>
                    Linkedin
                </Button>
                <Button color={'gray'} fontSize={'xl'} colorScheme={'black'} leftIcon={<FaInstagram />}>
                    Instagram
                </Button>
            </HStack>
        </Box>
    )
}