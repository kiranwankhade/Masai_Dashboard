"use client";

import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import notFound from "../../Assets/404error.svg";
export default function NotFound() {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Box textAlign="center" py={10} px={6}>
        <Image src={notFound} alt="404 error"></Image>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bg="red_color"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <Button
          as={"a"}
          href={"/"}
          colorScheme="btn"
          bg="red_color"
          color="white"
          variant="solid">
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
}
