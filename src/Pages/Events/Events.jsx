import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, Image, Skeleton, Text } from "@chakra-ui/react";

import masterclassTab from "../Icons/masterclassTab.png";
import { useDispatch, useSelector } from "react-redux";
import eventsTab from "../Icons/eventsTab.png";
import { getEvents } from "../../Stores/eventReducer/action";
import { getEventsRegistered } from "../../Stores/appReducer/action";
import Marquee from "react-fast-marquee";
import { EventComponent } from "../../Components/EventComponent";

const Events = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { allEvents, isLoading, isError } = useSelector(
    (state) => state.eventReducer
  );

  const [data, setData] = useState(allEvents);
  const [allBg, setAllBg] = useState("All");

  useEffect(() => {
    dispatch(getEvents(token));
    dispatch(getEventsRegistered(token));
  }, []);

  useEffect(() => {
    setData(allEvents);
  }, [allEvents]);

  // console.log(data);
  if (isError) {
    return <>Something error occured...</>;
  }
  const Hired = [
    [
      " Kajal Yadav got an offer from Silaris! :partying_face:",

      "Rohit Kumar got an offer from Nirogstreet! :partying_face:",

      "Nisha Sharma got an offer from Orion Express Logistics Pvt Ltd! :partying_face:",

      "ABHISHEK RAGHUNATH UPADHYAY got an offer from The Matrix Labs! :partying_face:",

      "Aniket Pandey got an offer from Cloudify! :partying_face:",
    ],
  ];

  console.log("allEvents", allEvents)
  return (
    <Box
      w={["100%"]}
      height={["100%", "none"]}
      m={"auto"}
      mb={"20"}
      overflowY={["auto", "visible"]}
    >
      <Box
        w={["100%"]}
        height={["100%", "none"]}
        m={"auto"}
        mb={"14"}
        overflowY={["auto", "visible"]}
      >
        <Box
          background={"bg_3"}
          mt={"-13px"}
          mb={"25px"}
          ml={"-2"}
          p={"1"}
          h={"24px"}
          flexShrink={"0"}
        >
          <Marquee
            play={true}
            pauseOnHover={false}
            pauseOnClick={false}
            speed={50}
          >
            {Hired.map((student, _i) => (
              <Box key={_i} fontSize={"micro"}>
                {student}
              </Box>
            ))}
          </Marquee>
        </Box>

        <Box
          w={"96%"}
          borderRadius="8px"
          background="radial-gradient(112.5% 111.22% at 104.39% 0%, rgb(132, 186, 199) 0%, rgb(26, 159, 189) 100%)"
          boxShadow=" 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
          display="flex"
          justifyContent={{ base: "space-around", md: "space-between" }}
          alignItems="center"
        >
          <Text display={["none", "none", "block", "block"]}></Text>
          <Text
            color="#ffffff"
            textAlign="center"
            fontSize="1.60rem"
            fontWeight="700"
          >
            Events
          </Text>

          <Image
            src="https://dashboard.masaischool.com/img/activities-banner-icon.png"
            alt="pologon"
          />
        </Box>
        <br />
        <Box
          w={"80%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"15px"}
          p={2}
        >
          <Flex
            w={"80%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"15px"}
            p={2}
          >
            <Box
              backgroundColor={"rgb(111, 205, 158)"}
              border={
                allBg !== "All"
                  ? "6px rgb(111, 205, 158)"
                  : "6px solid rgb(183, 230, 207)"
              }
              borderRadius={"100px"}
              h={"65px"}
              w={"65px"}
              p={"2"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              onClick={() => {
                setData(allEvents);
                setAllBg("All");
              }}
              cursor={"pointer"}
            >
              <Text
                cursor={"pointer"}
                color={"#ffffff"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                All
              </Text>
            </Box>

            <Box
              cursor={"pointer"}
              border={"solid"}
              borderColor={"orange"}
              borderRadius={"0.6rem"}
              onClick={() => {
                setData(
                  allEvents.filter(
                    (e) => e.type.toLowerCase() === "masterclass"
                  )
                );
                setAllBg("masterclass");
              }}
              style={
                allBg === "masterclass"
                  ? { border: "1px solid orange" }
                  : { border: "1px solid transparent" }
              }
            >
              <Image
                draggable={false}
                h={"3rem"}
                src={masterclassTab}
                alt={"masterclass"}
              />
            </Box>

            <Box
              cursor={"pointer"}
              onClick={() => {
                setData(
                  allEvents.filter((e) =>
                    e.type.toLowerCase().includes("webinar")
                  )
                );
                setAllBg("events");
              }}
            >
              <Image
                draggable={false}
                transform={1.2}
                style={
                  allBg === "events"
                    ? { height: "3.6rem" }
                    : { height: "3.4rem" }
                }
                src={eventsTab}
                alt="events"
              />
            </Box>
          </Flex>
          <Flex
            gap={"15px"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              flex={9}
              mt={5}
              p={3}
              width={"100%"}
              display={"grid"}
              gridTemplateColumns={[
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(2,1fr)",
              ]}
              gap={"10px"}
            >
              {isLoading ? (
                <Grid
                  gridTemplateColumns="repeat(2, 1fr)"
                  justifyContent={"space-between"}
                  textAlign={"justify"}
                  gap={"30px"}
                >
                  <Skeleton
                    height="300px"
                    borderRadius={"15px"}
                    w={"380px"}
                  ></Skeleton>

                  <Skeleton
                    height="300px"
                    borderRadius={"15px"}
                    w={"380px"}
                  ></Skeleton>

                  <Skeleton
                    height="300px"
                    borderRadius={"15px"}
                    w={"380px"}
                  ></Skeleton>

                  <Skeleton
                    height="300px"
                    borderRadius={"15px"}
                    w={"380px"}
                  ></Skeleton>
                </Grid>
              ) : (
                data &&
                data.map((event, index) => (
                  <EventComponent
                    key={event._id}
                    poster={event.poster}
                    tag={event.tag}
                    title={event.title}
                    startTime={event.startTime}
                    duration={event.duration}
                    endTime={event.endTime}
                    type={
                      event.type.toLowerCase().includes("webinar")
                        ? "people have already registered"
                        : "people have participated"
                    }
                    noOfPeople={event.noOfPeople}
                    date={event.date}
                    id={event._id}
                  />
                ))
              )}
            </Box>
          </Flex>
          <Box flex={1.5}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
