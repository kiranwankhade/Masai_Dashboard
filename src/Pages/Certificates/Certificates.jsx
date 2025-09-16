import React from "react";
import { PiCertificateBold } from "react-icons/pi";
import { Box, Flex, Text, Button, Center } from "@chakra-ui/react";

const Certificates = () => {
  return (
    <Box m={6} mt={0}>
      <Text textAlign={"start"} fontSize={"3xl"} fontWeight={"bold"}>
        My Certificates
      </Text>
      <Flex  alignItems={"center"} h={{base: "80vh", md:"35vw"}} justifyContent={"center"}>
        <Center display={'grid'} m={"auto"}>
          <Flex m={"auto"} alignItems={"center"} justifyContent={"center"}>
            <PiCertificateBold
              fontWeight={"bolder"}
              size={"7rem"}
              color={"#3470e4"}
            />
          </Flex>
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            mt={"6"}>
            No certificate yet
          </Text>
          <Text fontSize={"sm"} textAlign={"center"}>
            Complete all the modules of a particular tutorial to unlock
            certificates{" "}
          </Text>
          <Button
          m={'auto'}
            mt={"4"}
            textAlign={"center"}
            textTransform={"uppercase"}
            letterSpacing={"widest"}
            fontWeight={"semibold"}
            bg={"bg_1"}
            size={"md"}
            color={"white"}
            fontSize={"xs"}
            _hover={{ bg: "#3182ce" }}>
            {" "}
            Explore Tutorials
          </Button>
        </Center>
      </Flex>
    </Box>
  );
};

export default Certificates;
