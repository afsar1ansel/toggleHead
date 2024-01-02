import { Box, Text } from "@chakra-ui/react";
import { TfiFacebook  } from "react-icons/tfi";
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsStopwatchFill } from "react-icons/bs";
import { FaTrainSubway } from "react-icons/fa6";
import './footer.css';

function Footer(){
    return(
        <>
        <div className="footer">
            <Box display={"flex"} flexDirection={"column"} gap={5} mt={1}>
                <Text color={"white"}  fontSize={"2rem"}>
                    Contact Us
                </Text>
                <Text color={"white"} mt={1} fontSize={"1.1rem"}  >
                    Address: amet,consectetur sadipiscing elit, sed do
                </Text>
                <Text color={"white"}  fontSize={"1.1rem"}>Email id: eirmod tempor incididunt ut labore</Text>
                <Text color={"white"}  fontSize={"1.1rem"}>Phone no: 1234567890</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={5} mt={1}>
            <Text color={"white"}  fontSize={"2rem"} textAlign={"center"}>
                    Follow us
                </Text>
                <Box display={"flex"} gap={35} mt={1}>
                <TfiFacebook color="white" size={30}/>
                <GrLinkedin color="white" size={30} />
                <GrInstagram color="white" size={30}/>
                <FaTwitter color="white" size={30}/>
                <BsYoutube color="white" size={30}/>
                <FaQuora color="white" size={30}/>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={5} >
                <Text color={"white"}  fontSize={"2rem"}>
                    Head Office
                </Text>
                
                <Box color={"white"}  display={"flex"} gap={10}>
                <ImLocation /> <Text fontSize={"1.1rem"}>Lorem ipsum dolor sit amet, consetetur sadipscing</Text> 
                </Box>
                <Box color={"white"}  display={"flex"} gap={10}>
                <BsStopwatchFill /> <Text fontSize={"1.1rem"}>Lorem ipsum dolor sit amet consectur adipisicing elit.</Text> 
                </Box>
                <Box color={"white"}  display={"flex"} gap={10}>
                <FaTrainSubway /> <Text>Lorem ipsum dolor amet consectetur adipisicing</Text> 
                </Box>
                <Box color={"white"}  display={"flex"} gap={10}>
                <BsStopwatchFill /> <Text fontSize={"1.1rem"}>Lorem opsum asd asdsaweeq Lorem Ipsum</Text> 
                </Box>
            </Box>
        </div>
        <Box h={"50px"} backgroundColor={"#002F5F"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text textAlign={"center"} color={"white"} fontSize={"1.3rem"} backgroundColor={"#002F5F"}>© 2022. All Rights Reserved. The IRM Mindia</Text>
        </Box>
        </>
    )
}

export default Footer