import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { MdOutlineVideoLibrary } from "react-icons/md";

const Tutorials = () => {
  return (
    <Box m={6} mt={0}>
      <Text textAlign={"start"} fontSize={"3xl"} fontWeight={"bold"}>
        My Tutorials
      </Text>
      <Flex alignItems={"center"}   h={{base: "80vh", md:"35vw"}} justifyContent={"center"}>
        <Center display={'grid'} m={"auto"}>
          <Flex m={'auto'} alignItems={"center"} justifyContent={"center"}>
            <MdOutlineVideoLibrary
              fontWeight={"bolder"}
              size={"7rem"}
              color={"#3470e4"}
            />
          </Flex>
          <Text textAlign={'center'} fontSize={"xl"} fontWeight={"bold"} mt={"6"}>
            No tutorials yet
          </Text>
          <Text fontSize={"sm"} textAlign={'center'} >
            To view progress on tutorials, start reading.
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default Tutorials;
