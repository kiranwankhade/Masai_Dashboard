import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

import { RiArrowRightSLine } from "react-icons/ri";

const Learning = () => {
  const lectures = [
    {
      id: 1,
      lectureName: "JavaScript Tutorial",
      type: "Beginner",
      module: 4,
      duration: "2.5 hours",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Course_Thumbnails_Javascript_cf6756fa76.png",
      certificates: 1117,
    },
    {
      id: 2,
      lectureName: "Figma For Developers",
      type: "Beginner",
      module: 1,
      duration: "49 mins",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Figma_for_Developers_FIGMA_925c0fa725.png",
      certificates: 1070,
    },
    {
      id: 3,
      lectureName: "Basics of Web Development",
      type: "Beginner",
      module: 3,
      duration: "70 mins",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Course_Thumbnails_Web_Development_70fe7a6b9f.png",
      certificates: 1093,
    },
    {
      id: 4,
      lectureName: "Basic of Python in Hindi",
      type: "Beginner",
      module: 13,
      duration: "14 hours",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Basics_of_Python_Hindi_English_a232d8dec1.webp",
      certificates: 0,
    },
    {
      id: 5,
      lectureName: "Basics of Data Analytics",
      type: "Beginner",
      module: 1,
      duration: "1 hours 45 mins",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Basics_of_Data_Analytics_4c81162a5c.webp",
      certificates: 1056,
    },
    {
      id: 6,
      lectureName: "Basics of Android App Development",
      type: "Beginner",
      module: 4,
      duration: "70 mins",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Basics_of_Android_App_Development_0f284d513a.webp",
      certificates: 1012,
    },
    {
      id: 7,
      lectureName: "English Fluency Marathon",
      type: "Beginner",
      module: 50,
      duration: "83 hours",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/EFM_Tutorial_Card_52c4e8d879.webp",
      certificates: 0,
    },
  ];
  const Hired = [
    [
      " Kajal Yadav got an offer from Silaris! 🥳",

      "Rohit Kumar got an offer from Nirogstreet! 🥳",

      "Nisha Sharma got an offer from Orion Express Logistics Pvt Ltd! 🥳",

      "ABHISHEK RAGHUNATH UPADHYAY got an offer from The Matrix Labs! 🥳",

      "Aniket Pandey got an offer from Cloudify! 🥳",
    ],
  ];
  return (
    <Box
      w={["95%"]}
      height={["90%", "none"]}
      m={"auto"}
      overflowY={["auto", "visible"]}
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        scrollbarWidth: "none", // For Internet Explorer and Edge
      }}>
      <Box
        background={"bg_3"}
        mt={"-13px"}
        mb={"25px"}
        ml={"-2"}
        p={"1"}
        h={"24px"}
        flexShrink={"0"}>
        <Marquee
          play={true}
          pauseOnHover={false}
          pauseOnClick={false}
          speed={50}>
          {Hired.map((student, _i) => (
            <Box key={_i} fontSize={"micro"}>
              {student}
            </Box>
          ))}
        </Marquee>
      </Box>
      <Box
        w={"100%"}
        borderRadius="8px"
        background="radial-gradient(143.14% 158.2% at 104.39% 0%, #88A9FD 0%, #6E71CC 100%)"
        boxShadow=" 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
        display="flex"
        justifyContent={{ base: "space-around", md: "space-between" }}
        alignItems="center">
        <Text display={["none", "none", "block", "block"]}></Text>
        <Text
          color="#FFF"
          textAlign="center"
          fontSize={{ base: "1.4rem", md: "1.76rem" }}
          fontWeight="700"
          //   lineHeight="32px"
        >
          Self Learning Courses
        </Text>
        <Image
          src="https://dashboard.masaischool.com/img/courses-banner-icon.png"
          alt="pologon"
        />
      </Box>
      <Box
        mt={5}
        width={"100%"}
        display={"grid"}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
        ]}
        gap={"10px"}>
        {lectures.map((lecture, index) => (
          <Box
            key={index}
            w={"100%"}
            borderWidth="1px"
            borderRadius="15px"
            p={3}
            bgColor={"white"}
            cursor={"pointer"}>
            <Flex
              gap={"15px"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Flex gap={"15px"}>
                <Box boxSize="55px">
                  <Image
                    borderRadius="100%"
                    boxSize="50px"
                    src={lecture.image}
                    alt={lecture.lectureName}
                  />
                </Box>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"space-evenly"}
                  alignItems={"flex-start"}>
                  <Text
                    textAlign={"justify"}
                    fontSize={"0.85rem"}
                    color={"black"}>
                    {lecture.lectureName}
                  </Text>

                  <Flex
                    color={"#959192"}
                    align="center"
                    textAlign={"justify"}
                    fontSize={"0.85rem"}>
                    <Text>{lecture.type}</Text>
                    <Circle size="4px" bg="gray.500" mx={2} />
                    <Text>{lecture.module} modules</Text>
                    <Circle size="4px" bg="gray.500" mx={2} />
                    <Text>{lecture.duration}</Text>
                  </Flex>

                  <Text
                    bgColor={"#f7efe9"}
                    mt={4}
                    color={"#9283ce"}
                    p={1.5}
                    fontSize={"0.65rem"}
                    borderRadius={"100px"}
                    textAlign={"center"}>
                    {lecture.certificates === 0
                      ? ""
                      : `${lecture.certificates} CERTIFICATES HAVE BEEN GENERATED`}
                  </Text>
                </Flex>
              </Flex>

              <Text fontSize={"1.7rem"} fontWeight={100} color={"#807b7c"}>
                <RiArrowRightSLine />
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Learning;
