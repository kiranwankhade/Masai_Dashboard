import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  useDisclosure,
  Image,
  Center,
  ModalFooter,
  Flex,
  CloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import admitCradTop from "../Icons/admitTop.png";

import admitCradBottom from "../Icons/admitbottom.png";

import admitCardLogo from "../Icons/admitLogo.png";

import admitAdmisson from "../Icons/admitAdmisson.png";

import { useNavigate } from "react-router-dom";
import {
  FaDiscord,
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const AdmitCardPopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { users, isAuth, isLoading, isError, token } = useSelector(
    (val) => val.authReducer
  );


  const navigate = useNavigate();

  const today = new Date();
  const formattedDate = today.toLocaleString("default", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  useEffect(() => {
    // Automatically opens the modal when the component mounts
    onOpen();
    // Closes the modal after 6 seconds
    //   const timer = setTimeout(() => {
    //     handleClose();
    //   }, 6000);

    // Cleanup the timer if the component is unmounted
    //   return () => clearTimeout(timer);
  }, [onOpen, onClose]);

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />

        <ModalContent>
          <CloseButton
            position="absolute"
            top={0}
            right={0}
            onClick={handleClose}
          />
          <br />
          <ModalBody>
            <Box>
              <Flex
                flexDirection={"column"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <Box>
                  <Image src={admitCradTop} alt="Top Image" w="100%" />
                </Box>

                <Flex
                  p={3}
                  flexDirection={"column"}
                  justifyContent="space-between"
                  alignItems="center"
                  gap={"1rem"}
                >
                  <Flex
                    w={"100%"}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={"1rem"}
                  >
                    <Box  flex={1.5} ml={4}>
                      <Image src={admitCardLogo} alt="Logo" w="100%" />
                    </Box>

                    <Box flex={6}>
                      <Text fontSize={"0.8rem"} color={"black"}>
                        Name:
                        <Text as={"span"} fontWeight={700} fontSize={"1rem"}>
                          {" "}
                          {users.name}
                        </Text>
                      </Text>

                      <Text fontSize={"0.8rem"} color={"black"}>
                        Course:
                        <Text as={"span"} fontWeight={700} fontSize={"1rem"}>
                          {" "}
                          Full Stack Web Development
                        </Text>
                      </Text>

                      <Text fontSize={"0.8rem"} color={"black"}>
                        Date:
                        <Text
                          as={"span"}
                          fontWeight={700}
                          fontSize={"1rem"}
                          textAlign={"justify"}
                        >
                          {" "}
                          {formattedDate}
                        </Text>
                      </Text>
                    </Box>
                  </Flex>

                  <Flex
                    w={"100%"}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={"1.5rem"}
                  >
                    <Flex
                      flexDirection={"column"}
                      textAlign={"center"}
                    >
                      <Text
                        fontSize="1.125rem"
                        fontWeight={"bold"}
                        color="#3470e4"
                        textAlign={"center"}
                      >
                        96%*
                      </Text>

                      <Text fontSize="0.625rem" fontWeight={700}>
                        Placement Rate
                        <br />
                        After course completion
                      </Text>
                    </Flex>

                    <Box flex={6}>
                      <Image w={"8.125rem"} src={admitAdmisson} alt="Logo" />
                    </Box>
                  </Flex>
                </Flex>

                <Box>
                  <Image src={admitCradBottom} alt="Bottom Image" w="100%" />
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter mt={"-0.5rem"} display={"flex"} flexDirection={"column"} justifyContent="space-evenly" alignItems={"center"} gap={"0.5rem"}>
            <Text>Share your success with your friends</Text>
            <Flex flexDirection={"row"} justifyContent="space-evenly" alignItems={"center"} gap={"1rem"} cursor={"pointer"}>
              <FaLinkedin fontSize={"1.5rem"} boxSize={6} mr={2} color="#0a66c2"/>
              <FaFacebook fontSize={"1.5rem"}  boxSize={6} mr={2} color="#1877f2"/>
              <FaTwitter fontSize={"1.5rem"}  boxSize={6} mr={2} color="#1da1f2"/>
              <FaDiscord fontSize={"1.5rem"}  boxSize={6} mr={2} color="#3470e4"/>
              <FaLink fontSize={"1.5rem"} boxSize={6} color="#3470e4"/>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdmitCardPopUp;
