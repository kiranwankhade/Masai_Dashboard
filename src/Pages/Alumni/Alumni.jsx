import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Wrap,
  WrapItem,
  Center,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalBody,
  FormControl,
  Textarea,
  ModalCloseButton,
  Grid,
  Skeleton,
} from "@chakra-ui/react";
import { BiUserCircle, BiRupee } from "react-icons/bi";
import { RxBackpack } from "react-icons/rx";
import AlumniCard from "./AlumniCard";
import { useDispatch, useSelector } from "react-redux";
import { getAlumni } from "../../Stores/appReducer/action";

const Alumni = () => {
  const alumniMessageModal = useDisclosure();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));

  const { isLoading, isError, Alumnidata } = useSelector(
    (state) => state.appReducer
  );

  

  useEffect(() => {
    dispatch(getAlumni(token));
  }, []);

  return (
    <Box textAlign={"start"} p={4}>
      {isLoading ? (
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          justifyContent={"space-between"}
          textAlign={"justify"}
          gap={"30px"}>
          <Skeleton height="300px" borderRadius={"15px"} w={"380px"}></Skeleton>
          <Skeleton height="300px" borderRadius={"15px"} w={"380px"}></Skeleton>
          <Skeleton height="300px" borderRadius={"15px"} w={"380px"}></Skeleton>
          <Skeleton height="300px" borderRadius={"15px"} w={"380px"}></Skeleton>
        </Grid>
      ) : (
        <>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            Our Stats
          </Text>
          <Wrap
            spacing="30px"
            mt={"2"}
            display={"flex"}
            align-items={"flex-start"}
            gap={"24px"}>
            <WrapItem>
              <Center
                p={2}
                pl={"6"}
                pr={"6"}
                borderRadius={"12px"}
                background={"linear-gradient(117deg, #FFF 0%, #FFE4E4 100%)"}>
                <Flex
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}>
                  <BiUserCircle size={"2.4rem"} color={"#3470e4"} />
                  <Text
                    color={"secondary"}
                    fontSize={"2xl"}
                    fontWeight={"bolder"}
                    fontFamily={"'Poppins', sans-serif"}>
                    4000+
                  </Text>
                  <Text fontSize={"md"} color={"secondary_gray_text"}>
                    Students Places
                  </Text>
                </Flex>
              </Center>
            </WrapItem>

            <WrapItem>
              <Center
                p={2}
                pl={"8"}
                pr={"8"}
                borderRadius={"12px"}
                background={"linear-gradient(117deg, #FFF 0%, #FFF8E4 100%)"}>
                <Flex
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}>
                  <RxBackpack size={"2.2rem"} color={"#3470e4"} />
                  <Text
                    color={"secondary_orage_text"}
                    fontSize={"2xl"}
                    fontFamily={"'Poppins', sans-serif"}
                    fontWeight={"bolder"}>
                    ₹36 LPA
                  </Text>
                  <Text fontSize={"md"} color={"secondary_gray_text"}>
                    Highest Salary
                  </Text>
                </Flex>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center
                p={2}
                pl={"8"}
                pr={"8"}
                borderRadius={"12px"}
                background={"linear-gradient(117deg, #FFF 0%, #E4FFFA 100%)"}>
                <Flex
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}>
                  <BiRupee size={"2.2rem"} color={"#3470e4"} />
                  <Text
                    color={"secondary_teal_text"}
                    fontSize={"2xl"}
                    fontFamily={"'Poppins', sans-serif"}
                    fontWeight={"bolder"}>
                    ₹6.9 LPA
                  </Text>
                  <Text fontSize={"md"} color={"secondary_gray_text"}>
                    Average CTC
                  </Text>
                </Flex>
              </Center>
            </WrapItem>
          </Wrap>
          <Text fontSize={"16px"} fontWeight={"bold"} mt={"4"}>
            Get your queries resolved now
          </Text>
          <Flex flexWrap={"wrap"} gap={"5"}>
            {Alumnidata &&
              Alumnidata?.map((el) => (
                <Box key={el._id}>
                  <AlumniCard
                    key={el.id}
                    data={el}
                    alumniMessageModal={alumniMessageModal}
                  />
                </Box>
              ))}
          </Flex>
          <Modal
            isCentered
            onClose={alumniMessageModal.onClose}
            isOpen={alumniMessageModal.isOpen}>
            <ModalOverlay />
            <ModalContent borderRadius={"18px"}>
              <ModalHeader
                fontSize={"2xl"}
                fontWeight={"bold"}
                textAlign={"center"}>
                Get in touch!
              </ModalHeader>
              <ModalCloseButton visibility={"hidden"} />
              <ModalBody pb={6}>
                <Text fontSize={"md"} fontWeight={"semibold"}>
                  What would you like to ask Kunal Chaturvedi?
                </Text>
                <FormControl mt={"2"}>
                  <Textarea
                    borderRadius={"12px"}
                    placeholder="Here is a sample placeholder"
                    size="md"
                  />
                  <Flex mt={"4"} justifyContent={"end"}>
                    <Button colorScheme="messenger">SUBMIT</Button>
                  </Flex>
                </FormControl>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
};

export default Alumni;
