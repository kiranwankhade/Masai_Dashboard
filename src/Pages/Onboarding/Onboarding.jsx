import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Toast,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Confetti from "../Icons/Confetti.png";
import files from "../Icons/Files.png";

import { PiConfettiFill } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";

import FormData from "./FormData";
import IDVerification from "./IDVerification";
import Consent from "./Consent";
import JoinUs from "./JoinUs";
import CongratulationsPopUp from "./CongratulationsPopUp";

import { FiClock } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { Global, css } from "@emotion/react";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const steps = [
    { text: "1", description: "Form" },
    { text: "2", description: "ID Verification" },
    { text: "3", description: "Consent" },
    { text: "4", description: "Join Us" },
    { text: <PiConfettiFill />, description: "" }, // This represents the final step after "Join Us"
  ];

  const handleNext = () => {
    if(!isCurrentStepValid) {
        toast({
            title: "Validation Error.",
            description: "Please fill in all required fields before proceeding.",
            status: "error",
            position: "top-right",
            duration: "3000",
            isClosable: true, 
        });
        return;
    } 

    if (currentStep === 2) {
      setIsLoading(true);
      // Here you can make any asynchronous call to verify the Aadhar, then:
      setIsLoading(false);
      onOpen();
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleValidationChange = (isValid) => {
    setIsCurrentStepValid(isValid);  
  };

  return (
    <Box p={4}>
      <Box
        h={"10rem"}
        w={"100%"}
        display={["", "", "flex", "flex"]}
        flexDirection="row"
        p={2}
        borderRadius={"15px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"#eefff7"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Box w={"100%"} p={2}>
          <Text
            lineHeight={"2rem"}
            fontSize={"1.5rem"}
            fontWeight={700}
            color={"#6ecd9d"}
          >
            Onboarding
          </Text>

          <Text lineHeight={"2rem"} color={"#544d4f"} fontSize={"0.95rem"}>
            {" "}
            Course: Web Development
          </Text>

          <Flex
            w={["100%", "100%", "60%", "60%"]}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Box>
              <Text
                color={currentStep === 1 ? "white" : "white"}
                bg={currentStep === 1 ? "#6e71cc" : "#6ecd9d"}
                borderRadius={"full"}
                px={2}
                py={currentStep === 1 ? 0 : "0.5rem"}
                width="2rem"
                height="2rem"
                lineHeight="2rem"
                fontSize={currentStep === 1 ? "0.8rem" : "1rem"}
                textAlign={"center"}
              >
                {currentStep === 1 ? (
                  1
                ) : (
                  <Text as={"span"} lineHeight="2.5rem" textAlign={"center"}>
                    <AiOutlineCheck />
                  </Text>
                )}
              </Text>
              <Text
                mt={1}
                fontWeight={currentStep == 1 ? "Bold" : "Bold"}
                fontSize={"0.8rem"}
              >
                Form
              </Text>
            </Box>

            <Divider
              mt={"-1.375rem"}
              borderColor="gray.300"
              borderStyle="dashed"
            />

            <Box>
              <Text
                color={
                  currentStep === 2
                    ? "white"
                    : currentStep === 3 ||
                      currentStep === 4 ||
                      currentStep === 5
                    ? "white"
                    : "black"
                }
                bg={
                  currentStep === 2
                    ? "#6e71cc"
                    : currentStep === 3 ||
                      currentStep === 4 ||
                      currentStep === 5
                    ? "#6ecd9d"
                    : "white"
                }
                borderRadius={"full"}
                px={2}
                py={
                  currentStep === 2
                    ? "0rem"
                    : currentStep === 3 ||
                      currentStep === 4 ||
                      currentStep === 5
                    ? "0.5rem"
                    : "0rem"
                }
                width="2rem"
                height="2rem"
                lineHeight="2rem"
                fontSize={
                  currentStep === 2
                    ? "0.8rem"
                    : currentStep === 3 ||
                      currentStep === 4 ||
                      currentStep === 5
                    ? "1rem"
                    : "0.8rem"
                }
                textAlign={"center"}
              >
                {currentStep === 2 ? (
                  2
                ) : currentStep === 3 ||
                  currentStep === 4 ||
                  currentStep === 5 ? (
                  <Text as={"span"} lineHeight="2.5rem" textAlign={"center"}>
                    <AiOutlineCheck />
                  </Text>
                ) : (
                  2
                )}
              </Text>

              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxWidth="100%"
                fontSize={"0.8rem"}
                mt={1}
                color={"grey.300"}
                fontWeight={
                  currentStep == 2
                    ? "bold"
                    : currentStep === 3 ||
                      currentStep === 4 ||
                      currentStep === 5
                    ? "bold"
                    : ""
                }
              >
                ID Verification
              </Text>
            </Box>

            <Divider
              ml={"-3.125rem"}
              mt={"-1.375rem"}
              borderColor="gray.300"
              borderStyle="dashed"
            />

            <Box>
              <Text
                color={
                  currentStep === 3
                    ? "white"
                    : currentStep === 4 || currentStep === 5
                    ? "white"
                    : "black"
                }
                bg={
                  currentStep === 3
                    ? "#6e71cc"
                    : currentStep === 4 || currentStep === 5
                    ? "#6ecd9d"
                    : "white"
                }
                borderRadius={"full"}
                px={2}
                py={
                  currentStep === 3
                    ? "0rem"
                    : currentStep === 4 || currentStep === 5
                    ? "0.5rem"
                    : "0rem"
                }
                width="2rem"
                height="2rem"
                lineHeight="2rem"
                fontSize={
                  currentStep === 3
                    ? "0.8rem"
                    : currentStep === 4 || currentStep === 5
                    ? "1rem"
                    : "0.8rem"
                }
                textAlign={"center"}
              >
                {currentStep === 3 ? (
                  3
                ) : currentStep === 4 || currentStep === 5 ? (
                  <Text as={"span"} lineHeight="2.5rem" textAlign={"center"}>
                    <AiOutlineCheck />
                  </Text>
                ) : (
                  3
                )}
              </Text>
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxWidth="100%"
                fontSize={"0.8rem"}
                mt={1}
                color={"grey.300"}
                fontWeight={
                  currentStep === 3
                    ? "bold"
                    : currentStep === 4 || currentStep === 5
                    ? "bold"
                    : ""
                }
              >
                Consent
              </Text>
            </Box>

            <Divider
              ml={"-1.12rem"}
              mt={"-1.375rem"}
              borderColor="gray.300"
              borderStyle="dashed"
            />

            <Box>
              <Text
                color={
                  currentStep === 4
                    ? "white"
                    : currentStep === 5
                    ? "white"
                    : "black"
                }
                bg={
                  currentStep === 4
                    ? "#6e71cc"
                    : currentStep === 5
                    ? "#6ecd9d"
                    : "white"
                }
                borderRadius={"full"}
                px={2}
                py={
                  currentStep === 4
                    ? "0rem"
                    : currentStep === 5
                    ? "0.5rem"
                    : "0rem"
                }
                width="2rem"
                height="2rem"
                lineHeight="2rem"
                fontSize={
                  currentStep === 4
                    ? "0.8rem"
                    : currentStep === 5
                    ? "1rem"
                    : "0.8rem"
                }
                textAlign={"center"}
              >
                {currentStep === 4 ? (
                  4
                ) : currentStep === 5 ? (
                  <Text as={"span"} lineHeight="2.5rem" textAlign={"center"}>
                    <AiOutlineCheck />
                  </Text>
                ) : (
                  4
                )}
              </Text>
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxWidth="100%"
                fontSize={"0.8rem"}
                mt={1}
                color={"grey.300"}
                fontWeight={
                  currentStep === 4 ? "bold" : currentStep === 5 ? "bold" : ""
                }
              >
                Join Us
              </Text>
            </Box>

            <Divider
              display={["none", "none", "block", "block"]}
              ml={"-0.5rem"}
              mt={"-1.375rem"}
              borderColor="gray.300"
              borderStyle="dashed"
            />

            <Box display={["none", "none", "block", "block"]}>
              <Text
                bg={"#cfeedf"}
                borderRadius={"full"}
                px={2}
                width="2rem"
                height="2rem"
                lineHeight="2rem"
                py={2}
                fontSize={"0.8rem"}
                textAlign={"center"}
              >
                <Image src={Confetti} />
              </Text>
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxWidth="100%"
                fontSize={"0.8rem"}
                mt={5}
              ></Text>
            </Box>
          </Flex>
        </Box>

        <Box
          h={"11.4rem"}
          p={5}
          w={"12rem"}
          display={["none", "none", "block", "block"]}
        >
          <Box
            bg={"#b7e6cf"}
            border={"1px solid #6ecd9d"}
            borderRadius={"1.5rem"}
            h={"9rem"}
            position={"absolute"}
            top={0}
            // mt={"-6rem"}
            transformOrigin="0 0"
            transform={"rotate(-15deg)"}
            p={6}
          >
            <Image src={files} />
          </Box>
        </Box>
      </Box>

      <Box>
        {currentStep === 1 && <FormData currentStep={currentStep} onValidationChange={handleValidationChange} />}
        {currentStep === 2 && <IDVerification currentStep={currentStep} onValidationChange={handleValidationChange} />}
        {currentStep === 3 && <Consent currentStep={currentStep} onValidationChange={handleValidationChange} />}
        {currentStep === 4 && <JoinUs currentStep={currentStep} />}
        {currentStep === 5 && (
          <CongratulationsPopUp currentStep={currentStep} />
        )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />

        <ModalContent bg="transparent" boxShadow="none">
          <Center flexDirection="column" p={4}>
            <Icon as={FiClock} color={"white"} boxSize={10} mb={2} />
            <Text fontSize="1.05rem" color={"white"} fontWeight="bold">
              Please wait while we are verifying your Aadhar.
            </Text>
          </Center>
        </ModalContent>
      </Modal>

      <Box
        position={{ base: "static", md: "static" }}
        bottom={"0"}
        w={{ base: "100%", md: "100%" }}
        h="4rem"
        bg="white"
        zIndex="1"
        m={"auto"}
        mb={{ base: "12", md: "6" }}
        display={"flex"}
        alignItems={"center"}
        p={{ base: "2", md: "6" }}
        justifyContent={"end"}
        boxShadow="md"
        rounded={{ base: "md", md: "sm" }}
      >
        <Button colorScheme="blue" onClick={handleNext}>
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default Onboarding;
