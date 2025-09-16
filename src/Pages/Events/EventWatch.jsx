import React from "react";
import {
  AspectRatio,
  Box,
  Link,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RxLinkedinLogo } from "react-icons/rx";

const EventWatch = () => {
  console.log("Event Watch page");
  return (
    <Box mb={"8"}>
      <AspectRatio
        // h={"80vh"}
        ratio={2}>
        <iframe
          style={{ borderRadius: "22px" }}
          title="naruto"
          src="https://www.youtube.com/embed/7-mkV0MMIh8?si=ssvAExGyvsUEpx9X"
          allowFullScreen
        />
      </AspectRatio>

      <Box
        display={{ base: "block", md: "flex" }}
        mt={"12"}
        ml={"4"}
        alignItems={"center"}
        justifyContent={"space-between"}>
        <Box w={{ base: "100%", md: "20%" }}>
          <Text> About the event</Text>
          <Heading fontSize={"xl"}>Sorting Algorithms Explained</Heading>
          <Heading color={"blue.400"}>Masterclass</Heading>
        </Box>
        <Stack
          border={"solid"}
          m={{ base: "4", md: "0" }}
          borderColor={"gray.300"}
          h={{ base: "1px", md: "10rem" }}></Stack>
        <Box w={"70%"}>
          <Text fontSize={"md"} lineHeight={"6"}>
            Dive into the fascinating world of Sorting Algorithms in Data
            Structures with our informative video! In this comprehensive
            tutorial (Part 1), we unravel the inner workings of various sorting
            algorithms, equipping you with the knowledge to tackle real-world
            data manipulation challenges.
            <br />
            In Part-1 [Iterative sorting Algorithms, their applications]
            <br />
            you will learn,
            <br />
            <br />
            1. Bubble sort
            <br />
            2. Selection sort
            <br />
            3. Insertion sort
            <br />
            Whether you're a coding enthusiast or a beginner looking to
            understand the fundamentals, this video is your gateway to mastering
            sorting algorithms. We'll explore popular algorithms like Bubble
            Sort, Insertion Sort, and Selection Sort, while breaking down their
            mechanisms and discussing their time complexities. By the end of
            this tutorial, you'll have a solid understanding of these sorting
            algorithms, paving the way for more advanced data structure
            concepts.
          </Text>
        </Box>
      </Box>

      <Box border={"solid"}mb={{base: "24", md: '0'}} mt={"6"} borderRadius={"3xl"}>
        <Box
          display={{ base: "block", md: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Box w={{ base: "90%", md: "25%" }} pl={"4"}>
            <Text>Know your speaker</Text>
            <Heading fontSize={"xl"}>Meet</Heading>
            <Heading color={"blue.400"}>Venugopal Panchumarthi</Heading>
          </Box>
          <Stack
            border={"solid"}
            borderColor={"gray.300"}
            m={{base: "4", md: 0}}
            h={{ base: "1px", md: "4rem" }}></Stack>
          <Box w={"70%"} ml={"4"}>
            <Text fontSize={"md"} lineHeight={"6"}>
              With a demonstrated history of working in the higher education
              industry, Venu is a skilled in Computer Science, Algorithms,
              Python (Programming Language), and Data Structures Professional.
              His love for teaching makes him an inspiring mentor.
            </Text>
          </Box>
          <Box >
            <Image 
              position={{base: "static", md: "relative"}}
              h={"160px"}

              right={{base: "0", md:"10"}}
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Venu_2_358e3c29ea.png"
              alt="instructor"
            />
          </Box>
          <Link position={{base: "" , md: "relative"}}
           bottom={ "-16"}  right={"10"} href="">
            <RxLinkedinLogo
              size={"28px"}
              color="#0073b5"
              style={{ borderRadius: "100%" }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default EventWatch;
