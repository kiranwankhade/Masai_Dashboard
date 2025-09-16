import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi"; // using Font Awesome for the camera icon
import { useDropzone } from "react-dropzone";
import React, { useCallback, useEffect, useState } from "react";
import { HiArrowUpTray } from "react-icons/hi2";
import { setBackAdharAction, setFrontAdharAction } from "../../Stores/OnboardingReducer/actions";
import { useDispatch } from "react-redux";

const IDVerification = ({ currentStep, onValidationChange }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [frontAdhar, setFrontAdhar] = useState(null);
  const [backAdhar, setBackAdhar] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const verifyAdhaar = () => {
    const adhaarIsValid = false; // Replace with actual validation logic
    if (!adhaarIsValid) {
      onOpen();
    } else {
      // Continue with other logic
      console.log("Verification successful");
    }
  };


  const onDropFront = useCallback((acceptedFiles) => {
    setFrontAdhar(acceptedFiles[0]);
  }, []);

  const onDropBack = useCallback((acceptedFiles) => {
    setBackAdhar(acceptedFiles[0]);
  }, []);

  const { getRootProps: getRootPropsFront, getInputProps: getInputPropsFront } =
    useDropzone({ onDrop: onDropFront });

  const { getRootProps: getRootPropsBack, getInputProps: getInputPropsBack } =
    useDropzone({ onDrop: onDropBack });
    

  const checkValidation = () => {
    if (frontAdhar) {
      onValidationChange(true); // Inform the parent component that the form is valid
      // console.log(frontAdhar);
      // const imgURL = URL.createObjectURL(frontAdhar)
      // console.log(imgURL);
      dispatch(setFrontAdharAction(token,frontAdhar));
      // dispatch(setBackAdharAction(token,backAdhar));
    } else {
      onValidationChange(false); // Inform the parent component that the form is invalid
    }
  };

  useEffect(() => {
    checkValidation();
  }, [frontAdhar, backAdhar]);

  return (
    <Box p={3} mt={5}>
      <FormControl w={["100%", "100%", "60%", "60%"]} mb={2} isRequired>
        <FormLabel fontSize={["0.85rem"]} fontWeight={"black"}>
          Upload the front side of your Aadhaar for verification
        </FormLabel>
        <Box
          w={"100%"}
          p={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            {...getRootPropsFront()}
            w={"100%"}
            bg={"white"}
            border="1px dashed grey"
            borderRadius="0.5rem"
            p={3}
            textAlign={"center"}
          >
              <Input {...getInputPropsFront()} type="file" name="aadharfront"/>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"0.5rem"}
              cursor="pointer"
              textAlign={"center"}
            >
              <Icon
                as={HiArrowUpTray}
                color={"#6ecd9d"}
                fontSize={"1.3rem"}
                fontWeight={800}
              />{" "}
              Drag &amp; drop here or{" "}
              <Text as={"span"} color="#4f8df0" fontWeight={700}>
                Browse
              </Text>
            </Box>
            {frontAdhar && (
              <Text mt={2} fontSize="sm" color="gray.600">
                File we Got: {frontAdhar.name}
              </Text>
            )}
          </Box>
          <Box
            width="3.4rem"
            height="3.1rem"
            lineHeight="3rem"
            bg="transparent"
            border={"1px solid #e0e2e5"}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={FiCamera}
              color={"#3a74e5"}
              fontSize={"1.5rem"}
              cursor="pointer"
            />
          </Box>
        </Box>
      </FormControl>

      <FormControl w={["100%", "100%", "60%", "60%"]} mb={2} isRequired>
        <FormLabel fontSize={["0.85rem"]} fontWeight={"black"}>
          Upload the Back side of your Aadhaar for verification
        </FormLabel>
        <Box
          w={"100%"}
          p={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Box
            w={"100%"}
            {...getRootPropsBack()}
            bg={"white"}
            border="1px dashed grey"
            borderRadius="0.5rem"
            p={3}
            textAlign={"center"}
          >
            <Input {...getInputPropsBack()} />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"0.5rem"}
              cursor="pointer"
              textAlign={"center"}
            >
              <Icon
                as={HiArrowUpTray}
                color={"#6ecd9d"}
                fontSize={"1.3rem"}
                fontWeight={800}
              />{" "}
              Drag &amp; drop here or{" "}
              <Text as={"span"} color="#4f8df0" fontWeight={700}>
                Browse
              </Text>
            </Box>

            {backAdhar && (
              <Text mt={2} fontSize="sm" color="gray.600">
                Selected: {backAdhar.name}
              </Text>
            )}
          </Box>
          <Box
            width="3.4rem"
            height="3.1rem"
            lineHeight="3rem"
            bg="transparent"
            border={"1px solid #e0e2e5"}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              as={FiCamera}
              color={"#3a74e5"}
              fontSize={"1.5rem"}
              cursor="pointer"
            />
          </Box>
        </Box>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>We Found an Issue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>
              We have found that your Aadhaar details don't match with the
              details you have shared.
            </Text>
            {frontAdhar && (
              <Image
                src={URL.createObjectURL(frontAdhar)}
                alt="Front Aadhaar"
                marginBottom={4}
              />
            )}
            <Text mb={4}>
              Would you like to continue your admission with your Aadhaar
              details?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Reupload
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default IDVerification;
