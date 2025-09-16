import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Image,
  Text,
  Flex,
  Divider,
  Card,
  Link,
} from "@chakra-ui/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

const AlumniCard = ({ data, alumniMessageModal }) => {
  const [modalisOpen, setmodalIsOpen] = useState(false);

  const toggleModal = () => {
    setmodalIsOpen(!modalisOpen);
  };
  const handleMessageModal = () => {
    alumniMessageModal.onOpen();
    toggleModal();
  };
  return (
    <Box onClick={toggleModal}>
      <Card
        maxW="sm"
        mt={"2"}
        p={4}
        height={"235px"}
        w={"343px"}
        borderRadius={"2xl"}>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Image
              alt={data.Name}
              borderRadius={"lg"}
              w={"78px"}
              h={"78px"}
              src={data.Image}
              border={"solid"}
              borderColor={"blue.400"}
              objectFit={"cover"}
            />

            <Box lineHeight={"6"}>
              <Text fontWeight="bold">{data.Name}</Text>
              <Text fontSize={"micro"} fontWeight={"light"}>
                {data.Role}
              </Text>
              <Box w={"20%"}>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <RxLinkedinLogo size={"28px"} color="#0073b5" />
                </a>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Box>
          <Divider
            mt={"2"}
            borderBottomWidth={"2px"}
            colorScheme="black"
            variant="solid"
          />
          <Text
            mt={"1"}
            fontSize={"13px"}
            textAlign={"center"}
            color={"bg_btn"}>
            {data.Role} | {data.Company}
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} gap={0} mt={2}>
          <Box mt={"-1"} ml={"-2"}>
            <RiDoubleQuotesL color="lightGreen" size={"20px"} />
          </Box>
          <Text fontSize={"13px"} noOfLines={2} _firstLetter={""}>
            {" "}
            {data.Description}
          </Text>
        </Flex>
        <Button
          fontSize={"sm"}
          letterSpacing={"widest"}
          size={"sm"}
          bg={"bg_primary"}
          color={"secondary_blue_text"}
          mt={"2"}
          zIndex={1}
          onClick={handleMessageModal}>
          GET IN TOUCH
        </Button>
      </Card>
      <Modal isCentered isOpen={modalisOpen} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent borderRadius={"2xl"}>
          <ModalCloseButton visibility={"hidden"} />
          <Card maxW="md" p={4} borderRadius={"2xl"}>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  alt="Segun Adebayo"
                  borderRadius={"lg"}
                  w={"78px"}
                  h={"78px"}
                  src={data.Image}
                  objectFit={"cover"}
                  border={"solid"}
                  borderColor={"blue.400"}
                />

                <Box lineHeight={"6"}>
                  <Text fontWeight="bold">{data.Name}</Text>
                  <Text fontSize={"micro"} fontWeight={"light"}>
                    {data.Role}
                  </Text>
                  <Link as={"a"} href={data.linkedin}>
                    <RxLinkedinLogo size={"28px"} color="#0073b5" />
                  </Link>
                </Box>
              </Flex>
            </Flex>
            <Box>
              <Divider
                mt={"2"}
                borderBottomWidth={"2px"}
                colorScheme="black"
                variant="solid"
              />
              <Text
                mt={"1"}
                fontSize={"13px"}
                textAlign={"center"}
                color={"bg_btn"}>
                {data.Role} | {data.Company}
              </Text>
            </Box>
            <Box position={"relative"} top={"4"} left={"-4"}>
              <RiDoubleQuotesL color="lightGreen" size={"20px"} />
            </Box>
            <Text fontSize={"13px"}>{data.Description}</Text>
            <Box position={"relative"} top={"-5"} left={"21rem"}>
              <RiDoubleQuotesR color="lightGreen" size={"20px"} />
            </Box>
            <Button
              fontSize={"sm"}
              letterSpacing={"widest"}
              size={"sm"}
              bg={"bg_primary"}
              color={"secondary_blue_text"}
              outline={"none"}
              onClick={handleMessageModal}>
              GET IN TOUCH
            </Button>
          </Card>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default AlumniCard;
