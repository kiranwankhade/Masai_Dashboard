import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const Bookmarks = () => {
  return (
    <Box m={6} mt={0}>
      <Flex justifyContent={"space-between"}>
        <Text textAlign={"start"} fontSize={{base: "2xl", md: "3xl"}} fontWeight={"bold"}>
          My Bookmarks
        </Text>
        <Button
          textTransform={"uppercase"}
          variant={"outline"}
          colorScheme="red"
          isDisabled={true}
          fontSize={"sm"}
          size={'sm'}
          letterSpacing={"wide"}>
          Remove all
        </Button>
      </Flex>
      <Flex alignItems={"center"}  h={{base: "80vh", md:"35vw"}} justifyContent={"center"}>
        <Box m={"auto"}>
          <Flex alignItems={"center"}
           justifyContent={"center"} >
            <MdOutlineBookmarkBorder
              fontWeight={"bolder"}
              size={"7rem"}
              color={"#3470e4"}
            />
          </Flex>
          <Text textAlign={'center'} fontSize={"xl"} fontWeight={"bold"} mt={"2"}>
            No bookmarks yet
          </Text>
          <Text  textAlign={'center'} fontSize={"sm"}>
            Click the bookmark icon on the tutorials page to save
            <br />
            important and favourite tutorials in your bookmarks
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Bookmarks;
