import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Divider,
  Badge,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
  HStack,
  Center,
} from "@chakra-ui/react";
import {
  getEventRegister,
  postEventRegister,
} from "../Stores/ErReducer/erAction";
import { ImCheckmark2 } from "react-icons/im";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { useDispatch } from "react-redux";
import Marquee from "react-fast-marquee";
import { applyCourse, msatRegister } from "../Stores/courseReducer/action";
import { useSelector } from "react-redux";
import { getEvents } from "../Stores/eventReducer/action";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { EventComponent } from "./EventComponent";
import EventCard from "../Pages/Events/EventTime";
const DashboardLading = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const [ToggleBackground, setToggleBackground] = useState(true);
  const [ToggleBackground2, setToggleBackground2] = useState(true);
  const [ToggleBackground3, setToggleBackground3] = useState(true);
  const [StatusOfButton, setStatusOfButton] = useState(false);
  const [EventRegisterToggle, setEventRegisterToggle] = useState(0);
  const { users, isAuth, isLoading, isError, token } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();
  const course = useSelector((state) => state.reducer);
  const navigate = useNavigate();
  // events Get Request
  const Dispatch = useDispatch();
  const allEvents = useSelector((state) => state.eventReducer);
  useEffect(() => {
    Dispatch(getEvents(token));
  }, []);

  const mostRecentWebinar = allEvents.allEvents
    .filter((webinar) => webinar.type === "Masterclass")
    .slice(6, 8);

  let eventId = mostRecentWebinar.map((el) => el._id).join();

  // Event-register start
  const eventRegisterDispatch = useDispatch();
  const success = useSelector((state) => state.erReducer);

  const getdispatch = useDispatch();
  const { event } = useSelector((state) => state.geterReducer);

  function HandleStatusButtonEvent() {
    eventRegisterDispatch(postEventRegister(eventId, token));
    getdispatch(getEventRegister(token));
    setEventRegisterToggle(1);
  }

  let registrationStatus = event.map((el) => el.userId._id);
  const userId = users._id;
  // Select course login
  const handleConfirm = () => {
    setShowRedirectModal(true);
    dispatch(msatRegister(token));
    dispatch(applyCourse(token, userId))
      .then((res) => {
        window.location.href = res.data.url;
        console.log("Result MSAT", res.data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setShowRedirectModal(false);
      onClose();
      // navigate("/msat-result")
    }, 11000);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1100);

      return () => clearInterval(timer);
    }
  }, [countdown]);

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
    <>
      <Box background={"bg_3"} ml={"-2"} p={"1"} h={"24px"} flexShrink={"0"}>
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
      <Box>
        <Box textAlign="left" ml={"5"}>
          <Text
            fontFamily={"body"}
            fontSize={"16px"}
            fontWeight={"400"}
            lineHeight={"24px"}>
            Hey {users.name}!
            <Text
              as="span"
              fontFamily={"body"}
              fontSize={"md"}
              fontWeight={"700"}
              lineHeight={"24px"}>
              {" "}
              Welcome To Masai !{" "}
            </Text>
          </Text>
          <Heading fontSize={"16px"} fontWeight={"700"} lineHeight={"20px"}>
            Start your journey in
            <Heading as="span" fontSize={"16px"} color={"#ED0331"}>
              {" "}
              3 steps
            </Heading>
          </Heading>
        </Box>
        <Box ml={"5"} mt="2">
          <Flex gap="20px">
            <Box mt="">
              <Center
                width={"40px"}
                height={"40px"}
                rounded={"100%"}
                bg={registrationStatus ? "none" : "B7B8E5"}>
                <Badge
                  width={"30px"}
                  height={"30px"}
                  bg={registrationStatus ? "green" : "secondary"}
                  rounded={"100%"}
                  color={"#fff"}
                  textAlign={"center"}
                  p={registrationStatus ? "1" : "1"}
                  fontSize={registrationStatus ? "lg" : "md"}>
                  {registrationStatus ? <BsCheckLg /> : 1}
                </Badge>
              </Center>
              <Divider
                orientation="vertical"
                borderLeft={"2px dashed grey"}
                marginLeft={"17px"}
              />
            </Box>

            <Accordion
              defaultIndex={[EventRegisterToggle]}
              allowToggle
              width={{ sm: "100%", md: "80%", lg: "72%", base: "100%" }}
              borderRadius="10px"
              bg={"secondary"}
              mt="20px"
              pb="0"
              h={"fit-content"}
              background={ToggleBackground ? "secondary" : "#fff"}>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton
                    onClick={() => setToggleBackground(!ToggleBackground)}>
                    <Box as="span" flex={"1"} textAlign="left">
                      <Heading
                        as="h6"
                        fontSize={"xl"}
                        fontFamily={"body"}
                        fontWeight="semibold"
                        color={ToggleBackground ? "#fff" : "#000"}>
                        {" "}
                        Register for free webinar
                      </Heading>
                      <Text as="span">
                        <Text as="span" color="secondary">
                          {" "}
                          (Start in {mostRecentWebinar.map((el) => el.date)})
                        </Text>
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} borderRadius={"10px"}>
                  {mostRecentWebinar &&
                    mostRecentWebinar.map((event) => (
                      <EventComponent
                        key={event._id}
                        poster={event.poster}
                        tag={event.tag}
                        title={event.title}
                        startTime={event.startTime}
                        duration={event.duration}
                        endTime={event.endTime}
                        noOfPeople={event.noOfPeople}
                        date={event.date}
                        type={
                          event.type.toLowerCase().includes("webinar")
                            ? "people have already registered"
                            : "people have participated"
                        }
                      />
                    ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Flex gap="20px">
            <Box mt="40px">
              <Center
                bg="#B7B8E5"
                width={"40px"}
                height={"40px"}
                rounded={"100%"}>
                <Badge
                  width={"30px"}
                  height={"30px"}
                  bg="secondary"
                  rounded={"100%"}
                  color={"#fff"}
                  textAlign={"center"}
                  p="1">
                  2
                </Badge>
              </Center>
              <Divider
                orientation="vertical"
                borderLeft={"2px dashed grey"}
                marginLeft={"17px"}
              />
            </Box>
            <Accordion
              allowToggle
              width={{ sm: "100%", md: "80%", lg: "72%", base: "100%" }}
              borderRadius="10px"
              bg={"secondary"}
              mt="40px"
              pb="0"
              h={"fit-content"}
              background={ToggleBackground2 ? "#fff" : "secondary"}>
              <AccordionItem border="none">
                <h2>
                  <AccordionButton
                    onClick={() => setToggleBackground2(!ToggleBackground2)}>
                    <Box as="span" flex={"1"} textAlign="left">
                      <Heading
                        as="h6"
                        fontSize={"xl"}
                        fontFamily={"body"}
                        fontWeight="semibold"
                        color={ToggleBackground2 ? "#000" : "#fff"}>
                        {" "}
                        Finish MSAT
                      </Heading>
                      <Text
                        as="span"
                        fontFamily={"body"}
                        fontSize={"md"}
                        color={ToggleBackground2 ? "#000" : "#fff"}>
                        ( Masai School Admission Test)
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} borderRadius={"10px"}>
                  <Box bg={"secondary"} borderRadius={"20px"}>
                    <Box borderRadius={"10px"}>
                      <Box
                        borderRadius={"10px"}
                        width={{
                          sm: "100%",
                          md: "100%",
                          lg: "100%",
                          base: "100%",
                        }}>
                        <AspectRatio ratio={16 / 9}>
                          <iframe
                            width={"100%"}
                            height={"402px"}
                            style={{
                              borderRadius: "10px",
                              textAlign: "center",
                            }}
                            src="https://www.youtube.com/embed/cA80lsg0mlo"
                            title="An Insight into our MSAT (Masai School Admissions Test)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        </AspectRatio>
                        <Button
                          onClick={onOpen}
                          width="100%"
                          as="a"
                          colorScheme="gray"
                          pr={"20px"}
                          mt="15px"
                          color="secondary ">
                          START MSAT
                        </Button>

                        <Modal
                          blockScrollOnMount={false}
                          isOpen={isOpen}
                          onClose={onClose}>
                          <ModalOverlay
                            bg="#00000075"
                            backdropFilter="00000075"
                          />
                          <ModalContent bg="#D6E2FA">
                            <ModalHeader>
                              <Text
                                fontWeight="bold"
                                fontFamily={"body"}
                                fontSize={"16px"}
                                mb="1rem"
                                ml="5">
                                Before you proceed accept that you are
                              </Text>
                            </ModalHeader>
                            <ModalBody
                              ml="5"
                              background="#fff"
                              rounded={"5"}
                              mr="3"
                              pl="5"
                              pr="5"
                              pt="5"
                              pb="5">
                              <HStack gap={"5"}>
                                <Badge bg="none">
                                  <Text fontSize="30px">
                                    {" "}
                                    <ImCheckmark2 color="9FDEBE" />
                                  </Text>
                                </Badge>

                                <Text
                                  as="span"
                                  fontSize={"sm"}
                                  fontFamily={"body"}
                                  fontWeight={"semibold"}>
                                  upto{" "}
                                  <Text as="span" color={"secondary"}>
                                    28 years
                                  </Text>{" "}
                                  of age
                                </Text>
                              </HStack>
                              <HStack gap={"5"}>
                                <Badge bg="none">
                                  <Text fontSize="30px">
                                    {" "}
                                    <ImCheckmark2 color="9FDEBE" />
                                  </Text>
                                </Badge>
                                <Text
                                  as="span"
                                  fontSize={"sm"}
                                  fontFamily={"body"}
                                  lineHeight={"4"}
                                  fontWeight={"semibold"}>
                                  {" "}
                                  a College{" "}
                                  <Text as="span" color={"secondary"}>
                                    graduate
                                  </Text>{" "}
                                </Text>
                              </HStack>
                              <HStack gap={"5"}>
                                <Badge bg="none">
                                  <Text fontSize="30px">
                                    {" "}
                                    <ImCheckmark2 color="9FDEBE" />
                                  </Text>
                                </Badge>
                                <Text
                                  as="span"
                                  fontSize={"sm"}
                                  fontFamily={"body"}
                                  lineHeight={"4"}
                                  fontWeight={"semibold"}>
                                  {" "}
                                  available for{" "}
                                  <Text as="span" color={"secondary"}>
                                    12-hour
                                  </Text>
                                  daily study,{" "}
                                  <Text as="span" color={"secondary"}>
                                    6 days a week
                                  </Text>{" "}
                                  (11 am - 11 pm) once selected
                                </Text>
                              </HStack>
                              <HStack gap={"5"}>
                                <Badge bg="none">
                                  <Text fontSize="30px">
                                    {" "}
                                    <ImCheckmark2 color="9FDEBE" />
                                  </Text>
                                </Badge>
                                <Text
                                  as="span"
                                  fontSize={"sm"}
                                  fontFamily={"body"}
                                  lineHeight={"4"}
                                  fontWeight={"semibold"}>
                                  {" "}
                                  have a{" "}
                                  <Text as="span" color={"secondary"}>
                                    desktop/laptop
                                  </Text>
                                  once the course starts{" "}
                                </Text>
                              </HStack>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                variant={"ghost"}
                                color={"#fff"}
                                mr={3}
                                onClick={onClose}>
                                CANCEL
                              </Button>
                              <Button
                                onClick={handleConfirm}
                                colorScheme="blue">
                                {" "}
                                CONFIRM & CONTINUE{" "}
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                        {showRedirectModal && (
                          <Modal
                            isOpen={showRedirectModal}
                            onClose={() => setShowRedirectModal(false)}>
                            <ModalOverlay
                              bg="#00000075"
                              backdropFilter="00000075"
                            />
                            <ModalContent bg="#00000075" h={"400px"}>
                              <ModalBody>
                                <Text
                                  fontWeight="bold"
                                  fontFamily="monospace"
                                  fontSize="2xl"
                                  color={"white"}
                                  mt="150px"
                                  textAlign={"center"}>
                                  00:{countdown} Sec
                                </Text>
                                <Text
                                  fontWeight="bold"
                                  letterSpacing={"wider"}
                                  fontFamily="monospace"
                                  fontSize="3xl"
                                  textAlign={"center"}
                                  color={"white"}>
                                  You are being redirected to our MSAT Platform.
                                </Text>
                              </ModalBody>
                            </ModalContent>
                          </Modal>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Flex gap="20px">
            <Box mt="40px">
              <Center
                bg="#B7B8E5"
                width={"40px"}
                height={"40px"}
                rounded={"100%"}>
                <Badge
                  width={"30px"}
                  height={"30px"}
                  bg="secondary"
                  rounded={"100%"}
                  color={"#fff"}
                  textAlign={"center"}
                  p="1">
                  3
                </Badge>
              </Center>
            </Box>
            <Accordion
              allowToggle
              width={{ sm: "100%", md: "80%", lg: "72%", base: "100%" }}
              h={"fit-content"}
              borderRadius="10px"
              mb={"0"}
              mt="40px"
              background={ToggleBackground3 ? "#fff" : "secondary"}>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton
                    onClick={() => setToggleBackground3(!ToggleBackground3)}>
                    <Box as="span" flex={"1"} textAlign="left">
                      <Heading
                        as="h6"
                        fontSize={"xl"}
                        fontFamily={"body"}
                        fontWeight="semibold"
                        color={ToggleBackground3 ? "#000" : "#fff"}>
                        {" "}
                        Complete Onboarding
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} borderRadius={"10px"}>
                  <Box bg={"secondary"} borderRadius={"20px"}>
                    <Box
                      width={{
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                        base: "100%",
                      }}>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          width="100%"
                          height="402"
                          style={{ borderRadius: "10px" }}
                          src="https://www.youtube.com/embed/ErIP2CNZMks"
                          title="An insight into our Onboarding Process"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>
                      </AspectRatio>
                      <Button
                        width="100%"
                        colorScheme="gray"
                        pr={"20px"}
                        mt="20px"
                        color="secondary"
                        as={"a"}
                        href="/onboarding">
                        START ONBOARDING
                      </Button>
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default DashboardLading;
