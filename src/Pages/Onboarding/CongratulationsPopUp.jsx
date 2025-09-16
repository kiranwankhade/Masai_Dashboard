import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  useDisclosure,
  Image,
  Center,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import congratsFrame from "../Icons/congratsFrame.png";

import congratsGif from "../Icons/CongratsGIF.gif";
import { useNavigate } from "react-router-dom";
import AdmitCardPopUp from "./AdmitCardPopUp";

const CongratulationsPopUp = ({ currentStep }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  useEffect(() => {
    // Automatically opens the modal when the component mounts
    onOpen();
    // Closes the modal after 6 seconds
    const timer = setTimeout(() => {
      currentStep++;
      handleClose();
    }, 6000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [onOpen, onClose]);

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={handleClose} isCentered size="xl">
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" bgImg={congratsGif} />

        <ModalContent
          width={["80%", "60%", "50%", "40%"]}
          bg={"transparent"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Completion Animation */}
          <Center>
            <Image
              src={congratsFrame}
              width={["100%", "100%", "50%", "60%"]}
              fit="contain"
            />
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CongratulationsPopUp;
