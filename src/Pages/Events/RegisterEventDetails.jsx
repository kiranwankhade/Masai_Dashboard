import React, { useEffect, useState } from "react";
import { AspectRatio, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEvents } from "../../Stores/eventReducer/action";
import EventWatch from "./EventWatch";

const RegisterEventDetails = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { allEvents, isLoading, isError } = useSelector(
    (state) => state.eventReducer
  );
  const dispatch = useDispatch();
  const params = useParams();

  // console.log("events ID", params);

  useEffect(() => {
    dispatch(getEvents(token));
  }, []);
  return (
    <Box >
      <Box mt={"-4"} ml={"-2"}>
        <Box
          zIndex={"10"}
          pb={"9"}
          pt={"10"}
          pl={"6"}
          bg={"#e5e5ff"}
          bgPosition="right"
          bgRepeat="no-repeat"
          bgSize={"400px"}
          bgImage={
            "url('https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_Bhat_Webinar_Speaker_PNG_4b14113fc3.png')"
          }>
          <Flex
            justifyContent={"start"}
            gap={"2"}
            alignItems={"center"}
            fontSize={"md"}>
            <AiFillCheckCircle color={"#6fcd9e"} />
            <Text fontWeight={"bold"}>You have registered successfully!</Text>
          </Flex>
          <Text
            fontSize={"2xl"}
            fontFamily={"sans-serif"}
            fontWeight={"extrabold"}
            textAlign={"start"}>
            Explore how
          </Text>
          <Text
            color={"red_color"}
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            textAlign={"start"}
            mt={"-2"}
            fontFamily={"sans-serif"}>
            Masai Can Help
          </Text>
          <Text
            color={"red_color"}
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            textAlign={"start"}
            mt={"-2"}
            fontFamily={"sans-serif"}>
            Build Your Career
          </Text>
          <Text textAlign={"start"} mt={"2"} fontSize={"lg"}>
            By Yogesh Bhat, Co-founder & SVP, Masai
          </Text>
          <Flex
            alignItems={"center"}
            mt={"2"}
            w={"60%"}
            justifyContent={"space-between"}>
            <Flex
              alignItems={"center"}
              gap={"2"}
              fontSize={"lg"}
              fontWeight={"bold"}>
              <RiCalendarTodoFill color="#3470e4 " fontSize={"22px"} />
              20th Sep, Wednesday
            </Flex>
            <Divider border={"solid"} orientation="vertical" h={"18px"} />
            <Flex
              alignItems={"center"}
              gap={"2"}
              fontSize={"lg"}
              fontWeight={"bold"}>
              <MdOutlineWatchLater color="#3470e4 " fontSize={"22px"} />
              20th Sep, Wednesday
            </Flex>
          </Flex>

          <Flex
            gap={"4"}
            alignItems={"center"}
            fontSize={"sm"}
            fontWeight={"bold"}
            mt={"4"}>
            <Box shadow={"xl"} bg={"white"} p={"4"} rounded={"2xl"} px={"8"}>
              <Text color={"secondary_gray_text"} fontSize={"3xl"}>
                1
              </Text>
              <Text color={"red_color"}>Days</Text>
            </Box>
            <Text fontSize={"4xl"}>:</Text>
            <Box shadow={"xl"} bg={"white"} p={"4"} rounded={"2xl"} px={"8"}>
              <Text color={"secondary_gray_text"} fontSize={"3xl"}>
                8
              </Text>
              <Text color={"red_color"}>Hours</Text>
            </Box>
            <Text fontSize={"4xl"}>:</Text>
            <Box shadow={"xl"} bg={"white"} p={"4"} rounded={"2xl"} px={"8"}>
              <Text color={"secondary_gray_text"} fontSize={"3xl"}>
                12
              </Text>
              <Text color={"red_color"}>Mins</Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          w={"95%"}
          m={"auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"solid"}
          rounded={"2xl"}
          borderColor={"secondary_blue_text"}
          p={"4"}
          mt={"8"}>
          <Box>
            <Flex alignItems={"center"} gap={"4"}>
              <BsWhatsapp color="#75e39f" fontSize={"35px"} />
              <Text fontSize="lg" fontWeight={"bold"}>
                Join this event’s Whatsapp Group to get
              </Text>
            </Flex>
            <Flex gap={"4"} ml={"12"} mt={"4"}>
              <Flex alignItems={"center"} gap={"2"} fontSize={"sm"}>
                <MdOutlineWatchLater color="#3470e4 " fontSize={"22px"} />
                Timely Updates
              </Flex>
              <Flex alignItems={"center"} gap={"2"} fontSize={"sm"}>
                <BiCalendarCheck color="#3470e4 " fontSize={"22px"} />
                Access to Exclusive Events
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>

     
      
    </Box>
  );
};

export default RegisterEventDetails;
