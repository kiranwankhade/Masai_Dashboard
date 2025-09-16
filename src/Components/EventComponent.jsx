import {
  Box,
  Flex,
  Grid,
  Image,
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import EventCard from "../Pages/Events/EventTime";
export const EventComponent = ({
  id,
  poster,
  name,
  tag,
  title,
  startTime,
  date,
  registrationStatus,
  endTime,
  duration,
  noOfPeople,
  type,
  onclick,
  text,
  time,
}) => {
  return (
    <>
      <Box
        key={id}
        w={"100%"}
        borderWidth="1px"
        borderRadius="15px"
        bgColor={"white"}
        cursor={"pointer"}
      >
        <Text display={"none"}>
          {date} {registrationStatus}
        </Text>
        <Flex
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          textAlign={"justify"}
          lineHeight={2}
          gap={"5px"}
        >
          <Box>
            <Image
              borderTopLeftRadius={"15px"}
              borderRightRadius={"15px"}
              src={poster}
              alt={name}
            />
          </Box>

          <Text
            bgColor={"#e8f3fe"}
            textAlign={"justify"}
            fontSize={"0.8rem"}
            borderRadius={"2xl"}
            ml={2}
            color={"#5377e5"}
            px={3}
            fontWeight={"bold"}
            letterSpacing={"wider"}
          >
            {tag}
          </Text>

          <Text
            ml={3}
            color={"#1d202d"}
            textAlign={"justify"}
            fontWeight={600}
            fontSize={"1rem"}
          >
            {title}
          </Text>

          <Flex
            w={"90%"}
            m={"auto"}
            fontSize={"sm"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"15px"}
            lineHeight={1}
          >
            <Text flex={1}>{startTime}</Text>
            <Flex
              flex={6}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Text>{duration}</Text>
              <Slider aria-label="slider-ex-2" colorScheme="pink" value={0}>
                <SliderTrack bg={"rgb(255, 205, 30)"}>
                  <SliderFilledTrack bg={"rgb(255, 205, 30)"} />
                </SliderTrack>
                <SliderThumb
                  _focus={{
                    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Manually set blue focus shadow
                  }}
                />
              </Slider>
              <Text>Duration</Text>
            </Flex>

            <Text textAlign={"right"} flex={1}>
              {endTime}
            </Text>
          </Flex>
          <EventCard
            date={date}
            id={id}
            registrationStatus={registrationStatus}
            onclick={onclick}
            time={time}
            text={text}
          />
          <Flex
            margin={"auto"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1px"}
            pb={1}
            mt={"-1"}
          >
            <Box>
              <Image src="https://dashboard.masaischool.com/fire-icon-free.png" />
            </Box>
            <Text> {noOfPeople} </Text>
            <Text fontSize={"sm"}>{type}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
