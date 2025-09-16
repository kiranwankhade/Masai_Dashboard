import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAlumni } from "../Stores/appReducer/action";
const RightNav = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token"));
  const { isLoading, isError, Alumnidata } = useSelector(
    (state) => state.appReducer
  );

  // const alumunidata = [
  //   {
  //     id: 1,
  //     name: "Nikhil C N",
  //     designation: "Consultant, Capgemini",
  //     description:
  //       "The best thing I received from this course is to face the problem instead of running away from it.",
  //     profilePicture:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/Nikhil_C_N_5c367a0ab7.jpg",
  //     companyLogo:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/logo_511c6f6f19.svg",
  //   },
  //   {
  //     id: 2,
  //     name: "Ayush Kumar",
  //     designation: "Software Engineer, Pine Labs",
  //     description:
  //       "Masai transformed me from a math enthusiast to a confident software engineer. With exceptional instructors and a structured curriculum, I soared to new heights at Pine Labs.",
  //     profilePicture:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ayush_Kumar_3f62de779c.jpeg",
  //     companyLogo:
  //       "https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_d538abbe58.png",
  //   },
  // ];

  const [randomSelected, setRandomSelected] = useState([]);

  const handleRandomAlumni = () => {
    const random = Alumnidata.sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 3);
    setRandomSelected(selected);
  };
  useEffect(() => {
    dispatch(getAlumni(token));
  }, []);

  useEffect(() => {
    handleRandomAlumni()
  },[Alumnidata])

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      position={"absolute"}
      direction={"column"}
      top={14}
      w={"64"}
      h={"92.1vh"}
      right={"0"}
      bg={"bg_secondary"}
      p={"4"}
      overflow={"auto"}
      msoverflowstyle="none"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}>
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(228px, 1fr))">
        <Card h={"max-content"} p={"2"} shadow={"lg"} borderRadius={"2xl"}>
          <Image
            alt="image new"
            h={"7rem"}
            right={"-10px"}
            top={"-2.5rem"}
            position={"absolute"}
            src="https://s3-alpha-sig.figma.com/img/e70b/6969/911a4bc71b0513a0a03d34003e4a4ce6?Expires=1695600000&Signature=ir1B0tpK9ks5vbb4aryxz5L~026FktvwHqAnA6egNncSKR4snO6-BzxFu-U1B7gJX65BwjcNsUJHiGZ9Pw0KpzVSyaTCcjDfiRj-4qRSoDSuR~6sM3Mfcu5HMvYm8V5SbiIoi~EEAM0u-t~Ekaair0~0Sjmx7HF5k6o6X8sxu2PlXy9I6aV18XRCsUdC8X6yqJ8LyfNjQNo~jbVXoT4rjIr5Y1xpNIpeOO3CX9Opi6sVWAAIbwKJiqZ6AhNr9gEsEvlLsAVl4yRg4exo2yjVZVUh0ImHoreVFk0uEbtp7IU0dlKgE67N~D1rfNg9QAHb5wxlvkQDSPXQ3nloscFe9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Image>
          <Text
            fontWeight={"semibold"}
            mt={"2"}
            fontSize={"sm"}
            lineHeight={"short"}
            p={"0"}>
            Get your queries resolved now by talking to our Alumni’s
          </Text>
          <Image
            mt={"2"}
            draggable={false}
            src="https://dashboard.masaischool.com/img/homepage/alumni-banner.png"
            alt="banner"></Image>
          <Button
            mt={"2"}
            bg={"bg_1"}
            color={"white"}
            fontSize={"micro"}
            size={"sm"}
            letterSpacing={"widest"}
            textTransform={"uppercase"}
            as={"a"}
            href={"/alumni"}
            _hover={{ bg: "btn_hover" }}>
            Connect with alumni
          </Button>
        </Card>

        <Card
          h={"max-content"}
          p={"0"}
          mt={"6"}
          shadow={"lg"}
          borderRadius={"2xl"}>
          <Text
            fontWeight={"bold"}
            mt={"2"}
            fontSize={"14px"}
            lineHeight={"short"}
            color={"bg_2"}
            p={2}>
            Join our telegram community to connect with your fellow mates
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={"md"}
            lineHeight={"short"}
            letterSpacing={"0"}
            p={"2"}
            textAlign={"center"}>
            2000+ already joined
          </Text>

          <Image
            borderBottomRadius={"2xl"}
            draggable={false}
            src="https://dashboard.masaischool.com/static/media/join-community1.9821eb08.png"
            alt="banner"></Image>
          <Button
            margin={"auto"}
            mt={"-10"}
            bg={"bg_primary"}
            color={"secondary_blue_text"}
            fontSize={"micro"}
            size={"sm"}
            w={"90%"}
            letterSpacing={"widestst"}
            _hover={{ bg: "#90cdf4" }}
            as={"a"}
            target="_blanck"
            href={"https://telegram.me/prepleafbymasai"}>
            JOIN COMMUNITY
          </Button>
        </Card>
      </SimpleGrid>

      <Text
        fontSize={"lg"}
        letterSpacing={"wide"}
        textAlign={"start"}
        fontWeight={"bold"}
        mt={"6"}>
        Read what our Alumni & Students have to say
      </Text>

      <SimpleGrid>
        {randomSelected &&
          randomSelected?.map((el) => (
            <Box key={el._id}>
              <Card
                h={"max-content"}
                p={"2"}
                mt={"4"}
                shadow={"lg"}
                borderRadius={"2xl"}>
                <Flex gap={"6px"}>
                  <Avatar name="alumuni" src={el.Image}></Avatar>
                  <Flex direction={"column"} alignItems={"start"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>
                      {el.Name}
                    </Text>
                    <Text fontSize={"micro"} textAlign={"start"}>
                      {el.Role}
                    </Text>
                  </Flex>
                </Flex>
                <Text
                  textAlign={"justify"}
                  p={1}
                  mt={"2"}
                  fontSize={"xs"}
                  lineHeight={"shorter"}
                  color={"bg_2"}>
                  {el.Description}
                </Text>
                <Flex mt={"2"}>
                  <Image
                    h={"24px"}
                    margin={""}
                    src={el.CompanyLogo}
                    alt="company name"></Image>
                </Flex>
              </Card>
            </Box>
          ))}
      </SimpleGrid>
    </Flex>
  );
};

export default RightNav;
