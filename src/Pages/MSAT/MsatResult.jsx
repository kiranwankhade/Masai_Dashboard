import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Heading,
  Button,
  Stack,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  RadioGroup,
  Link,
} from "@chakra-ui/react";

import MsatIcon from "../../Icons/MsatResultIcon.svg";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";
import { BsCode } from "react-icons/bs";
import animation_lmuulnsk_small from "../../Assets/animation_lmuulnsk_small.gif";
import {
  msatResult,
  setCourseAppliedGetAction,
  setSelectedCourse,
} from "../../Stores/MSATReducer/msatAction";
import { fetchCourseData } from "../../Stores/appReducer/action";
function MsatResult({ props }) {
  const [showModal, setShowModal] = useState(true);
  const [selectCourse, setSelectCourse] = useState("");
  const dispatch = useDispatch();
  const { msatResultData } = useSelector((state) => state.radio);
  let user = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    let timerId = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    // dispatch(fetchCourseData(token))
    dispatch(msatResult(token));
  }, []);
  const msatResults = [
    {
      sectionId: "65103f84e33d4e8ad51b4abf",
      sectionScore: 0,
      sectionName: "Reading Fluency",
      isVideoSection: false,
      sectionMaxMarks: 10,
      subSectionScore: ["0", "0", "0", "0", "0"],
    },
    {
      sectionId: "65103f84e33d4e8ad51b4ac5",
      sectionScore: 0,
      sectionName: "VC - 1",
      isVideoSection: false,
      sectionMaxMarks: 10,
      subSectionScore: ["0", "0", "0", "0", "0"],
    },
    {
      sectionId: "65103f84e33d4e8ad51b4ac9",
      sectionScore: 0,
      sectionName: "VC - 2",
      isVideoSection: false,
      sectionMaxMarks: 10,
      subSectionScore: ["0", "0", "0", "0", "0"],
    },
    {
      sectionId: "65103f87e33d4e8ad51b4b0e",
      sectionScore: 0,
      sectionName: "Cognitive Ability",
      isVideoSection: false,
      sectionMaxMarks: 60,
      subSectionScore: ["0", "0", "0", "", "0"],
    },
    {
      sectionId: "65103f88e33d4e8ad51b4b44",
      sectionScore: 0,
      sectionName: "Attention to Detail",
      isVideoSection: false,
      sectionMaxMarks: 15.5,
      subSectionScore: ["0", "0", "0", "", "0"],
    },
    {
      sectionScore: 0,
      sectionName: "Verbal Ability",
      isVideoSection: false,
      sectionMaxMarks: 35,
      subSectionScore: ["0", "0", "0", "", "0"],
    },
  ];

  // console.log("msatResultData", msatResultData);

  const handleRadioChange = (value) => {
    setSelectCourse(value);
  };
  const handleCourseConfirm = () => {
    console.log(selectCourse);
    dispatch(setSelectedCourse(selectCourse));
  };

  const codingTestArray = msatResults.filter(
    (item) =>
      item.sectionName === "Attention to Detail" ||
      item.sectionName === "Cognitive Ability"
  );

  const verbalCommunicationArray = msatResults.filter(
    (item) => item.sectionName === "VC - 1" || item.sectionName === "VC - 2"
  );

  const logicalThinkingArray = msatResults.filter(
    (item) =>
      item.sectionName === "Reading Fluency" ||
      item.sectionName === "Verbal Ability"
  );

  const aptitudeReasoningArray = msatResults.filter(
    (item) =>
      item.sectionName === "Cognitive Ability" ||
      item.sectionName === "Reading Fluency"
  );

  // Function to calculate the sum of subSectionScore
  const calculateScore = (arr) => {
    return arr.reduce((total, current) => {
      const subSectionTotal = current.subSectionScore.reduce(
        (subTotal, score) => {
          return subTotal + Number(score);
        },
        0
      );
      return total + subSectionTotal;
    }, 0);
  };

  //Scores of Each Array
  const codingTestScore = calculateScore(codingTestArray);
  const verbalCommunicationScore = calculateScore(verbalCommunicationArray);
  const logicalThinkingScore = calculateScore(logicalThinkingArray);
  const aptitudeReasoningScore = calculateScore(aptitudeReasoningArray);

  // Percentage Code

  const totalScore = msatResults.reduce(
    (total, section) => total + calculateScore([section]),
    0
  );

  const percentage = parseFloat(((totalScore / 400) * 100).toFixed(2));
  // console.log('percentage:', percentage)

  const cuttOffForUI_Web = percentage >= 35 && percentage <= 50;

  const cuttOffForData_Mobi = percentage > 40;

  const isAnyCutoffMet = cuttOffForUI_Web || cuttOffForData_Mobi;

  return msatResultData.applicationStage === "MSAT_PENDING" ||
    msatResult.applicationStage === "MSAT_PROGRESS" ||
    msatResult.applicationStage === "MSAT_DECISION_PENDING" ? (
    <div>Your MSAT data is loading, please wait....</div>
  ) : (
    <Box mx={"auto"} minH={"100vh"} background={"#F2F6FF;"}>
      <Flex
        background={"#F2F6FF;"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent="center">
        <Box
          display={"flex"}
          position="relative"
          overflow={"hidden"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          w={["90%", "90%", "711px"]}
          px={"24px"}
          h={"424px"}
          textAlign={"center"}
          mx={"auto"}
          mt={"10%"}
          borderRadius={"16px"}
          boxShadow={
            "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          }
          background={"var(--primary-white-fff, #FFF)"}
          border={"1px solid var(--neutral-grey-100, #E5E5E5)"}>
          <Image
            display={["none", "none", "block"]}
            src={MsatIcon}
            position={"absolute  "}
            top={"-4.5rem"}
            left={"-5.5rem"}
          />

          <Heading
            textAlign={"center"}
            as={"h3"}
            fontSize={["20px", "20px", "24px"]}
            fontWeight={"700"}
            lineHeight={["24px", "24px", "32px"]}
            mb={"10px"}
            color={"var(--secondary-blue-500, #3470E4)"}>
            MSAT Result
          </Heading>
          <Text
            textAlign={"center"}
            as={"h3"}
            fontSize={["14px", "14px", "16px"]}
            fontWeight={"700"}
            lineHeight={["16px", "16px", "20px"]}
            color={"var(--neutral-grey-700, #544D4F)"}>
            Congratulations! You have cleared the MSAT!
          </Text>

          <Grid
            mt={"40px"}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={"15px"}>
            <GridItem
              px={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={["100%", "100%", "314px"]}
              h={"63px"}
              borderRadius={"16px"}
              border={"1px solid var(--extended-purple-100, #CFD0EE)"}
              background={" var(--primary-white-fff, #FFF)"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
                w={"40px"}
                h={"40px"}
                borderRadius={"16px"}
                background={"var(--extended-purple-50, #F7F7FF);"}>
                <BsCode fontSize={"1.5rem"} />
              </Box>
              <Flex justifyContent={"space-between"}>
                <Box ml={"2"} textAlign={"start"}>
                  <Text fontSize={"1rem"} fontWeight={"600"}>
                    Coding Test{" "}
                  </Text>
                  <Text
                    color={"var(--neutral-grey-700, #544D4F);"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    as={"span"}>
                    Marks : {codingTestScore}/100{" "}
                  </Text>
                </Box>

                <Text
                  ml={"5.5rem"}
                  color={codingTestScore <= 45 ? "#ba2643" : "#049402"}
                  fontSize={"16px"}
                  fontWeight={"600"}>
                  {codingTestScore <= 45 ? "Failed" : "Passed"}
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              px={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"314px"}
              h={"63px"}
              borderRadius={"16px"}
              border={"1px solid var(--extended-purple-100, #CFD0EE)"}
              background={" var(--primary-white-fff, #FFF)"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
                w={"40px"}
                h={"40px"}
                borderRadius={"16px"}
                background={"var(--extended-purple-50, #F7F7FF);"}>
                <BsCode fontSize={"1.5rem"} />
              </Box>
              <Flex textAlign={"start"} ml={"2"}>
                <Box
                  className="customText"
                  mr={"25px"}
                  fontSize={"1rem"}
                  fontWeight={"600"}
                  boxSizing="content-box">
                  Verbal communication <br />
                  <Text
                    color={"var(--neutral-grey-700, #544D4F);"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    as={"span"}>
                    Marks : {verbalCommunicationScore}/100{" "}
                  </Text>
                </Box>
                <Text
                  // ml={"5.5rem"}
                  color={verbalCommunicationScore <= 45 ? "#ba2643" : "#049402"}
                  fontSize={"16px"}
                  fontWeight={"600"}>
                  {verbalCommunicationScore <= 35 ? "Failed" : "Passed"}
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              px={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"314px"}
              h={"63px"}
              borderRadius={"16px"}
              border={"1px solid var(--extended-purple-100, #CFD0EE)"}
              background={" var(--primary-white-fff, #FFF)"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"40px"}
                h={"40px"}
                borderRadius={"16px"}
                background={"var(--extended-purple-50, #F7F7FF);"}>
                <BsCode fontSize={"1.5rem"} />
              </Box>
              <Flex textAlign={"start"} ml={"2"}>
                <Box
                  className="customText"
                  mr={"4rem"}
                  fontSize={"1rem"}
                  fontWeight={"600"}>
                  Logical Thinking <br />
                  <Text
                    color={"var(--neutral-grey-700, #544D4F);"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    as={"span"}>
                    Marks : {logicalThinkingScore}/100{" "}
                  </Text>
                </Box>
                <Text
                  color={logicalThinkingScore <= 45 ? "#ba2643" : "#049402"}
                  fontSize={"16px"}
                  fontWeight={"600"}>
                  {logicalThinkingScore <= 45 ? "Failed" : "Passed"}
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              px={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"314px"}
              h={"63px"}
              borderRadius={"16px"}
              border={"1px solid var(--extended-purple-100, #CFD0EE)"}
              background={" var(--primary-white-fff, #FFF)"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"40px"}
                h={"40px"}
                borderRadius={"16px"}
                background={"var(--extended-purple-50, #F7F7FF);"}>
                <BsCode fontSize={"1.5rem"} />
              </Box>
              <Flex textAlign={"start"} ml={"2"}>
                <Box
                  className="customText"
                  mr={"2rem"}
                  fontSize={"16px"}
                  fontWeight={"600"}
                  boxSizing="content-box">
                  Aptitude & Reasoning <br />
                  <Text
                    color={"var(--neutral-grey-700, #544D4F);"}
                    fontWeight={"400"}
                    fontSize={"xs"}
                    as={"span"}>
                    Marks : {aptitudeReasoningScore}/100{" "}
                  </Text>
                </Box>
                <Text
                  color={aptitudeReasoningScore <= 45 ? "#ba2643" : "#049402"}
                  fontSize={"1rem"}
                  fontWeight={"600"}>
                  {aptitudeReasoningScore <= 45 ? "Failed" : "Passed"}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          w={["80%", "80%", "531px"]}
          h={["100%", "424px"]}
          borderRadius={"16px"}
          border={"1px solid var(--neutral-grey-100, #E5E5E5)"}
          boxShadow={
            "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          }
          background={"var(--primary-white-fff, #FFF)"}
          mx={"auto"}
          mt={"10%"}
          flexDirection={"column"}>
          <Box
            borderTopRightRadius={"16px "}
            borderTopLeftRadius={"16px "}
            background={" var(--extended-yellow-100, #FFF3CC);"}
            display={"flex"}
            gap={"0.3rem"}
            w={["100%", "100%", "531px"]}
            flexDirection={"column"}
            alignItems={"center"}
            p={"24px 12px 20px 12px"}>
            <Text fontSize={"1rem"} fontWeight={"sm"}>
              Based on your MSAT result you have cleared cut off for 2 courses.
            </Text>
            <Text fontSize={"1rem"} fontWeight={"bold"}>
              Select course that you want to apply for or Retake MSAT.
            </Text>
          </Box>
          <Box>
            <Flex
              px={"15px"}
              mt={1}
              justifyContent={"space-around"}
              p={"2"}
              borderBottom={"2px solid #CCC;"}
              m={"auto"}>
              <Box>Courses</Box>
              <Box>Cut-off clear</Box>
            </Flex>
            <RadioGroup
              onChange={handleRadioChange}
              defaultValue=""
              display={"flex"}
              borderBottom={"2px solid #CCC"}>
              <Stack
                spacing="0.8rem"
                px={"15px"}
                pt={3}
                // pr={["13%", "13%", "146px"]}
                p={"4"}
                borderRight={"2px solid #CCC"}>
                <Radio
                  size="sm"
                  colorScheme="blue"
                  value="ui/uxDesign"
                  disabled={!msatResultData.backend_web_development}>
                  backend development
                  <Link color={"blue"} href="">
                    (view details)
                  </Link>
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="blue"
                  value="webDevelopment"
                  disabled={!msatResultData.full_stack_web_development}>
                  Full Stack Web Development{" "}
                  <Link color={"blue"} href="">
                    (view details)
                  </Link>
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="blue"
                  value="dataAnalyst"
                  disabled={!msatResultData.data_analytics}>
                  Data Analyst
                </Radio>
                <Radio
                  size="sm"
                  colorScheme="blue"
                  value="androidDevelopment"
                  disabled={!msatResultData.mobile_development}>
                  Android Development
                </Radio>
              </Stack>

              <Stack mt={3} ml={2} spacing="0.8rem" p={"4"} m={"auto"}>
                {/* For UX/UI Design and Web Development */}
                {msatResultData.full_stack_web_development ? (
                  <MdOutlineDone color="green" />
                ) : (
                  <RxCross1 color="red" />
                )}

                {/* For Web Development */}
                {msatResultData.backend_web_development ? (
                  <MdOutlineDone color="green" />
                ) : (
                  <RxCross1 color="red" />
                )}

                {/* For Data Analyst */}
                {msatResultData.data_analytics ? (
                  <MdOutlineDone color="green" />
                ) : (
                  <RxCross1 color="red" />
                )}

                {/* For Android Development */}
                {msatResultData.mobile_development ? (
                  <MdOutlineDone color="green" />
                ) : (
                  <RxCross1 color="red" />
                )}
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            mx={3}
            pb={"25px"}
            mt={3}
            display={"flex"}
            gap={2}
            justifyContent={"flex-end"}>
            <Button
              color={"rgb(52, 112, 228)"}
              background={"rgb(242, 247, 255)"}
              onClick={handleCourseConfirm}
              disabled={!isAnyCutoffMet}>
              confirm course
            </Button>
            <Button
              _hover={{ bg: "rgb(242, 247, 255)", color: "rgb(52, 112, 228)" }}
              color={"rgb(242, 247, 255)"}
              background={"rgb(52, 112, 228)"}
              as={"a"}
              href="/">
              retake msat
            </Button>
          </Box>
        </Box>
      </Flex>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalOverlay />
          <ModalContent bg="transparent" shadow={"none"}>
            <ModalBody>
              <Image m={"auto"} src={animation_lmuulnsk_small} alt="" />
              <Text
                fontWeight="bold"
                letterSpacing={"wider"}
                fontFamily="sans-serif"
                fontSize="3xl"
                textAlign={"center"}
                color={"#6fcd9e"}>
                <Text fontWeight={"800"}>Congratulations! </Text>
                You have cleared the MSAT!
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}

export default MsatResult;
