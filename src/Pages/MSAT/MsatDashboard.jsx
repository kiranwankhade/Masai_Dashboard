import React ,{useState}from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  RadioGroup,
  Heading,
  Button,
  Stack,
  Radio,
} from "@chakra-ui/react";
import MasaiLogo from "../../Icons/MasaiLogo.svg";
import redBox from "../../Icons/Redboxlogo.svg";
import Relaod from "../../Icons/Reload.svg";
import QuestionMark from "../../Icons/questionMark.svg";
import clock from "../../Icons/timerClock.gif";
import NextArrow from "../../Icons/NextArrow.svg";
function MsatDashboard(props) {
  const [selectedValue, setSelectedValue] = useState("")  

  const handleClearAnswer = () => {
    setSelectedValue(""); 
  };
   
  return (
    <Box display={"flex"} border={"1px solid var(--neutral-grey-100, #E5E5E5)"}>
      <Box w={"75%"} border={"1px solid var(--neutral-grey-100, #E5E5E5)"}>
        <Box
          display={"flex"}
          p={"16px 16px 16px 32px"}
          justifyContent={"flex-end"}
          gap={"78%"}
          borderBottom={"1px solid var(--neutral-grey-100, #E5E5E5)"}
        >
          <Image src={MasaiLogo} alt="masaiLogo" />
          <Button
            fontSize={"14px"}
            fontWeight={"600"}
            lineHeight={"24px"}
            color={"#D61E27"}
            border={"1px solid #FD90A6"}
            background={"#FFFAFB"}
            textTransform={"uppercase"}
          >
            <Image src={redBox} alt="redBox" /> Finish test{" "}
          </Button>
        </Box>

        <Box m={6} h={"74vh"}>
          <Heading
            m={4}
            fontSize={"34px"}
            fontWeight={"700"}
            lineHeight={"40px"}
            as={"h3"}
          >
            Q:1
          </Heading>
          <Box>
            <Heading
              m={4}
              color={"#3B3435"}
              as={"h6"}
              fontSize={"16px"}
              fontWeight={"600"}
              lineHeight={"24px"}
            >
              Who is the CEO of Microsoft?
            </Heading>
            <RadioGroup onChange={setSelectedValue} value={selectedValue}>
              <Stack m={5} spacing="24px">
                <Radio size="md" colorScheme="blue" value="1">
                  Satya Nadella
                </Radio>
                <Radio size="md" colorScheme="blue" value="2">
                  Jeff Bezos
                </Radio>
                <Radio size="md" colorScheme="blue" value="3">
                  Elon Musk
                </Radio>
                <Radio size="md" colorScheme="blue" value="4">
                  Kevin Dom
                </Radio>
              </Stack>
            </RadioGroup>
            <Box mt={12} mx={4} display={"flex"} gap={"8px"} cursor={"pointer"} onClick={handleClearAnswer}>
              <Image src={Relaod} />
              <Text
                color={"#CCC"}
                fontSize={"12px"}
                textTransform={"uppercase"}
                lineHeight={"16px"}
                fontWeight={"600"}
              >
                Clear answer
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          p={"16px"}
          gap={"42%"}
          borderTop={"1px solid var(--neutral-grey-100, #E5E5E5)"}
        >
          <Box display={"flex"} gap={"12px"} alignItems={"center"}>
            <Box
              borderRight={"1px solid var(--neutral-grey-100, #E5E5E5)"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"8px"}
              p={"8px 16px"}
            >
              <Image src={QuestionMark} alt="question mark" />
              <Text
                fontSize={"14px"}
                fontWeight={"600"}
                lineHeight={"24px"}
                textTransform={"uppercase"}
                letterSpacing={"1.25px"}
              >
                Help
              </Text>
            </Box>

            <Text
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              ml={"0.2rem"}
            >
              Correct answer:{" "}
              <Text color={"var(--alert-success, #049402)"} as={"span"}>
                {" "}
                +3
              </Text>
            </Text>
            <Text fontSize={"14px"} fontWeight={"400"} lineHeight={"24px"}>
              Wrong answer:
              <Text color={"var(--shades-red-500, #ED0331)"} as={"span"}>
                {" "}
                -1
              </Text>
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={"24px"}
          >
            <Button
              color={"var(--secondary-blue-500, #3470E4)"}
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"24px"}
              borderRadius={"8px"}
              p={"12px 20px"}
              textTransform={"uppercase"}
              background={"var(--extended-blue-50, #F2F6FF)"}
            >
              Skip
            </Button>
            <Button
              color={"var(--primary-white-fff, #FFF)"}
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"24px"}
              borderRadius={"8px"}
              p={"12px 20px"}
              textTransform={"uppercase"}
              background={"var(--extended-blue-200, #AEC6F4)"}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
      <Box w={"25%"}>
        <Box
          display={"flex"}
          gap={3}
          justifyContent={"flex-start"}
          p={"16px 16px 19px 16px"}
          borderBottom={"1px solid var(--neutral-grey-100, #E5E5E5)"}
        >
          <Image w={"60px"} src={clock} alt="clock" />
          <Box display={"flex"} alignItems={"center"}>
            <Heading
              fontFamily={"Orbitron"}
              fontSize={"32px"}
              letterSpacing={"2.25px"}
              lineHeight={"24px"}
              textTransform={"uppercase"}
              fontWeight={"600"}
            >
              08:51
            </Heading>
          </Box>
          <Box
            fontSize={"20px"}
            lineHeight={"24px"}
            display={"flex"}
            fontFamily={"Orbitron"}
            justifyContent={"flex-end"}
            flexDirection={"column"}
            textTransform={"uppercase"}
            letterSpacing={"2.25px"}
          >
            <Text>Min</Text>
          </Box>
        </Box>
        <Box
          h={["60vh ","60vh","37.9rem"]} 
          
          borderBottom={"1px solid var(--neutral-grey-100, #E5E5E5)"}
        >
          <Box p={5} borderBottom={"1px solid var(--neutral-grey-100, #E5E5E5)"} >
            <Heading
              fontFamily={"Poppins"}
              fontSize={"16px"}
              fontWeight={"700"}
              lineHeight={"20px"}
            >
              Section 01 - Aptitude
            </Heading>
            <Flex gap={"10px"} mt={5} flexWrap={"wrap"}>
            {Array(14).fill(1).map((el, i) =>
              <Box
                display={"flex"}
                fontFamily={"Open Sans"}
                background={"var(--extended-blue-50, #F2F6FF)"}
                borderRadius={"4px"}
                w={"32px"}
                h={"32px"}
                p={"12px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  color={"var(--extended-blue-400, #5D8DE9)"}
                  textTransform={"uppercase"}
                  fontSize={"14px"}
                  fontWeight={"600"}
                >
                  {i+1}
                </Text>
              </Box>
               )}
            </Flex>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}gap={2}mt={2}>
          <Box display={"flex"} gap={2}>
            <Image src={NextArrow}/>
            <Text fontSize={"14px"} lineHeight={"24px"} fontWeight={"600"} color={"var(--neutral-grey-900, #21191B)"}>Next section - Verbal Communication</Text>
          </Box>
          <Box>
            <Text color={"var(--neutral-grey-700, #544D4F)"} fontSize={"14px"} fontWeight={"400"} lineHeight={"24px"}>Number of Questions: <Text color={"var(--neutral-grey-900, #21191B)"} fontWeight={"700"} as={"span"}>15</Text>    Time: <Text color={"var(--neutral-grey-900, #21191B)"} fontWeight={"700"} as={"span"}>10min</Text></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MsatDashboard;
