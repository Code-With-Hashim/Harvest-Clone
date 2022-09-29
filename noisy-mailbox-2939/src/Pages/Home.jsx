import {
    SimpleGrid,
    Box,
    Text,
    Image,
    HStack,
    Button,
    ButtonGroup,
    Divider,
    Flex,
    Spacer,
    VStack,
    Stack,
    Grid,
    GridItem,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react'
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'




const brandeImageLink = [
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize' }

]

const content = [
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg', head: 'Time Tracking', text: 'Simple and inituative time tracking your team love.' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg', head: 'Reports & Analysis', text: 'Unlock the insight that help your business thrive' },
    { link: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg', head: 'Invoicing & Payments', text: 'Seamless invoicing and fast online payments' }
]

const buttonSlideData = [
    {
        text: 'We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.',
        writer: 'Noah Gedrich, Zehner',
        img: 'https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=560&height=374&name=home-photo-zehner.jpg'
    },
    {
        text: 'We needed something that worked, something super simple, because we don’t want to have to teach people how to use it as part of onboarding.',
        writer: 'Nick Frandsen, Dovetail',
        img: 'https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-dovetail.jpg?width=560&height=374&name=home-photo-dovetail.jpg'
    },
    {
        text: 'Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.',
        writer: 'Genevieve Laing, Cooper Perkins',
        img: 'https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-cooper.jpg?width=560&height=374&name=home-photo-cooper.jpg'
    },
    {
        text: 'Harvest was key to helping me start my company – it allowed us to move from managing a lot of subcontractors to managing a staff quite easily.',
        writer: 'Sara Holoubek, Luminary Labs',
        img: 'https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-luminary.jpg?width=560&height=374&name=home-photo-luminary.jpg'
    }

]

const learningFeatures = [
    {
        link : "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg",
        head : 'Guides and Templates',
        text : 'Learn how to introduce your team to time tracking and make the most of Harvest'
    },
    {
        link : "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg",
        head : 'Webiners',
        text : 'Watch a quick intro to Harvest or Signup for a live session wiht one of our Experts'
    },
    {
        link : "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg",
        head : 'Help Centers',
        text : 'Find the answers to all of your question or get in touch with one of our friendly Experts.'
    },

]


export default function Home() {
    return (
        <>
        <Navbar />
        <Box zIndex={1} height="auto" bgColor="orange.50">
            <SimpleGrid pt={"10rem"} columns={2}>
                <Box noOfLines={3} textAlign={"left"} ml="10" w={'75%'} >
                    <Text color="orange.400" fontSize="sm">SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST</Text>
                    <Text noOfLines={3} fontFamily={"Monarch,Georgia ,Times New Roman,serif"} fontSize="5xl">Finally, time tracking your team actually wants to use</Text>
                    <HStack mt={5} spacing={3}>
                        <CheckIcon />
                        <Text><b>Time Tracking.   </b>
                            Easy & intuitive time tracking that captures all your time without changing the way you work.</Text>
                    </HStack>
                    <HStack mt={5} spacing={3}>
                        <CheckIcon />
                        <Text><b>Reports & Analysis.   </b>
                            Instantly create reports across projects. Budgets, time, team capacity, cost breakdowns, and more.</Text>
                    </HStack>
                    <HStack mt={5} spacing={3}>
                        <CheckIcon />
                        <Text><b>Invoicing & Payments.   </b>
                            Turn tracked time into invoices. Accept online payments. Sync with QuickBooks and Xero.</Text>
                    </HStack>
                    <ButtonGroup mt={7} spacing={5}>
                        <Button fontSize={'xl'} borderRadius={15} px={10} py="30px" colorScheme="rgba(250,93,0,100%);">Try Harvest Free</Button>
                        <Button fontSize={'xl'} borderRadius={15} px={10} py="30px" colorScheme="black" bgColor={"black"} _hover={{
                            bgColor: "white", color: "black", border: '1px solid black'
                        }}>See Pricing</Button>
                    </ButtonGroup>
                    <Text color={'gray.500'} mt={3}>Free 30-day trial.
                        No credit card required.</Text>
                </Box>
                <Box>
                    <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/paycor/3012-Paycor-Contact-Sale/desktop-features-timesheets-new.png" />
                </Box>
            </SimpleGrid>
            <HStack spacing={5} ml={10} mt={'20px'} >
                <Text fontSize={'xl'} color={'orange.500'}>70,000+</Text>
                <Text fontSize={'lg'} color="gray.500">companies track time with Harvest</Text>
                <Divider h="0.5" bgColor="rgba(250,93,0,100%);" w={"65%"} m="auto" />
            </HStack>
            <Flex py={"8"} w={'95%'} m="auto">
                {
                    brandeImageLink.map((i) => (<><Image src={i.link} /> <Spacer /></>))
                }
            </Flex>
            <Divider h="0.5" bgColor={"rgba(250,93,0,100%);"} w={"100%"} />
            <Grid px="12" mb="5rem" py="20" gap={'2rem'} templateColumns='repeat(3, 1fr)'>
                <GridItem colSpan={1}>
                    <VStack h='100%' spacing={"3rem"}>
                        {
                            content.map((i) => <HStack cursor={"pointer"} py="6" borderRadius={20} spacing={8} px={6} w="100%" border={'1px solid rgba(250,93,0,100%)'} _hover={{ bgColor: "orange.100" }}>
                                <Image src={i.link} />
                                <Box textAlign={'left'}>
                                    <Text fontSize="xl" as='b'>{i.head}</Text>
                                    <Text noOfLines={2}>{i.text}</Text>
                                </Box>
                            </HStack>)
                        }
                    </VStack>
                    <Button pos='relative' right="4rem" fontSize={'xl'} borderRadius={15} px={10} py="30px" colorScheme="black" bgColor={"black"}>Discover all features</Button>
                </GridItem>

                <GridItem h="90%" borderRadius={10} colSpan={2} border={"1px solid black"}>
                    <Image borderRadius={10} src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png"></Image>
                </GridItem>
            </Grid>
            <Divider h="0.5" bgColor={"rgba(250,93,0,100%);"} w={"95%"} m="auto" mb={10} />
            <SimpleGrid py="5rem" columns={2}>
                <Box>
                    <Image src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg' />
                </Box>
                <Box letterSpacing={2} w='90%' textAlign={'left'}>
                    <Text as='b' color="rgba(250,93,0,100%)" fontSize="xl">INTEGRATION</Text>
                    <Heading py='5' fontFamily={'MuotoWeb,sans-serif'}>Integrated with the tools your team already knows and loves</Heading>
                    <Text fontSize="2xl">Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</Text>
                    <Button my='3rem' fontSize={'xl'} borderRadius={15} px={10} py="30px" colorScheme="black" bgColor={"black"}>Browse Integration</Button>
                </Box>

            </SimpleGrid>
            <Divider h="0.5" bgColor={"rgba(250,93,0,100%);"} w={"95%"} m="auto" mb={10} />
            <Box h='auto' py='10' w='90%' m='auto' textAlign={'left'}>
                <Text as='b' color="rgba(250,93,0,100%)" fontSize="xl">CUSTOMER STORIES</Text>
                <Text fontSize={'4xl'}>Helping teams thrive since 2006</Text >
                <Text fontSize={'2xl'}>Teams of all sizes, types, and industries trust Harvest to track their time.</Text>

                <Stack direction={'row'} py={5}>
                    <Divider h="auto" bgColor={"rgba(250,93,0,100%);"} w={"0.5"} orientation='vertical' />

                    <Tabs variant={'unstyled'} defaultIndex={0}>
                        <TabPanels>
                            {
                                buttonSlideData.map((i) => <TabPanel display={'flex'} columns='2' columnGap={"2rem"}>
                                    <Box noOfLines={9} fontSize={'3xl'}>
                                        <Text >{i.text}</Text>
                                        <Heading mt='10' as='h5' fontSize={'xl'}>{i.writer}</Heading>
                                    </Box>
                                    <Divider h="auto" bgColor={"rgba(250,93,0,100%);"} w={"0.5"} orientation='vertical' />
                                    <Image src={i.img} />


                                </TabPanel>)
                            }
                            <Divider h="auto" bgColor={"rgba(250,93,0,100%);"} w={"0.5"} orientation='vertical' />
                        </TabPanels>
                        <TabList>
                        {
                            buttonSlideData.map((i)=> <Tab _selected={{bgColor : 'rgba(250,93,0,100%)'}} w={3} h={8} mx='2' borderRadius={'50%'} border='1px solid rgba(250,93,0,100%)' colorScheme={'orange.200'} bgColor={'orange.'} _hover={{bgColor : 'orange.200'}}>
                        </Tab>)
                        }
                        </TabList>
                    </Tabs>

                    <Divider h="auto" bgColor={"rgba(250,93,0,100%);"} w={"0.5"} orientation='vertical' />
                </Stack>
                <Button my='3rem' fontSize={'xl'} borderRadius={15} px={10} py="30px" colorScheme="black" bgColor={"black"}>Meet Our Customers</Button>
            </Box>
            <Divider h="0.5" bgColor={"rgba(250,93,0,100%);"} w={"95%"} m="auto" mb={10} />
            <SimpleGrid justifyContent={'center'} alignItems='center'  columns={2}  w={'95%'} m='auto'> 
                <Box w='80%' textAlign={'left'}>
                <Text as='b' color="rgba(250,93,0,100%)" fontSize="xl">LEARNING RESOURCES</Text>
                <Text noOfLines={2} fontSize={'5xl'}>Supporting your team along the way</Text >
                </Box>
                <Box>
                <VStack h='100%' spacing={"2rem"}>
                        {
                            learningFeatures.map((i) => <HStack cursor={"pointer"} py='4' borderTop = '1px solid rgba(250,93,0,100%)'   w="90%">
                                
                                <Image src={i.link} />
                                <Box textAlign={'left'}>
                                    <Text fontSize="2xl">{i.head}</Text>
                                    <Text fontSize='xl' noOfLines={2}>{i.text}</Text>
                                </Box>
                                <ArrowForwardIcon w={8} h={8} color='rgba(250,93,0,100%)' />
                            </HStack>)
                        }
                    </VStack>
                </Box>
            </SimpleGrid>
            <Divider h="0.5" bgColor={"rgba(250,93,0,100%);"} w={"100%"} m="auto"  />
            <SimpleGrid w='100%' spacing='20rem' py={'5rem'}  m='auto' columns={2} bgColor={'white'}>
                <Box w='90%' m='auto'  textAlign={'left'}>
                    <Text fontSize={'4xl'}>Start tracking time today</Text>
                    <Text py='8' fontSize={'3xl'}>Join 70,000+ Companies spending their time wisely with Harvest</Text>
                    <Button fontSize={'xl'} borderRadius={15} px={10} py="30px" colorScheme="rgba(250,93,0,100%);">Try Harvest Free</Button>
                    <Box display='flex' alignItems={'center'}>
                    <Text color={'gray.500'} mt={3}>Free 30-day trial.
                        No credit card required.</Text>
                </Box>
                    </Box>
                <Box>
                    <Image src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg' />
                </Box>
            </SimpleGrid>
            <Footer />
        </Box>
        </>
    )
}