import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import StudentLogo from "../../Icons/StudentLogo.svg";
import PlacementLogo from "../../Icons/PlacementIcon.svg";
import Thunderbold from "../../Icons/ThunderboldIcon.svg";
import RupeesIcon from "../../Icons/RuppesSignIcon.svg";
import DesktopIcon from "../../Icons/DesktopSign.svg";
import CalenderIcon from "../../Icons/CalenderIcon.svg";
import { selectCourseDetail } from "../../Stores/appReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import zeroInvetment from "../../Icons/zeroInvestmentIcon.svg";
import stockIcon from "../../Icons/StockIcon.svg";
import workDone from "../../Icons/WorkDone.svg";
import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { LiaIdCardSolid } from "react-icons/lia";
import { PiCertificateBold } from "react-icons/pi";
import { RiSpeakLine } from "react-icons/ri";
import { MdPlusOne } from "react-icons/md";
import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Heading,
  Button,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
function CourseDetail(props) {
  const token = JSON.parse(localStorage.getItem("token"));

  const Navigate = useNavigate();

  const allDiv = [
    {
      Name: "6000+ Students Currently Enrolled",
      image: StudentLogo,
    },
    {
      Name: "94% Placement Success Rate",
      image: PlacementLogo,
    },
    {
      Name: "6.9 LPA Average Salary",
      image: Thunderbold,
    },
    {
      Name: "36 LPA Highest Salary",
      image: RupeesIcon,
    },
  ];
  const CourseDetail = [
    {
      Name: "Batch Starts 3rd October",
      image: DesktopIcon,
    },
    {
      Name: "30 Weeks ( 7 Months)",
      image: CalenderIcon,
    },
    {
      Name: "11 am to 11 pm* Monday to Saturday",
      image: Thunderbold,
    },
  ];
  const PayThroughplacemet = [
    {
      Name: "Apply and study for ZERO upfront fee.",
      image: zeroInvetment,
    },
    {
      Name: "Pay only when you get a job of 3.5LPA or more.",
      image: stockIcon,
    },
    {
      Name: "Pay the fees based on your salary range.",
      image: workDone,
    },
  ];

  const Posts1 = [
    {
      Post: "Data Analyst",
    },
    {
      Post: "Analytics Specialist",
    },
    {
      Post: "Business Intelligence Analyst",
    },
    {
      Post: "Statistical Analyst",
    },
    {
      Post: "Data Insights Analyst",
    },
    {
      Post: "Data Engineer",
    },
    {
      Post: "Big Data Engineer",
    },
    {
      Post: "Cloud Data Engineer",
    },
  ];
  const MinimunCriteriaDiv = [
    {
      Criteria: "Qualification",
      Detail: "Graduation (Any Stream)",
      image: <PiCertificateBold />,
    },
    {
      Criteria: "Age",
      Detail: "Upto 28 years",
      image: <BsPerson />,
    },
    {
      Criteria: "Communication Skills",
      Detail: "Basic English - speaking, reading and writing.",
      image: <RiSpeakLine />,
    },
    {
      Criteria: "Internet",
      Detail: "A desktop or laptop with an uninterrupted service connection.",
      image: <BiGlobe />,
    },
    {
      Criteria: "ID",
      Detail: "Valid Aadhar Card",
      image: <LiaIdCardSolid />,
    },
    {
      Criteria: "CIBIL Score  ",
      Detail: "650+",
      image: <MdPlusOne />,
    },
  ];
  const GridedataLastDiv = [
    {
      imageSrc:
        "https://dashboard.masaischool.com/img/course-details/curriculum-style/laptop_software.svg",
      heading: (
        <>
          100% <span style={{ color: "rgb(110, 113, 204)" }}>live</span>{" "}
          Distance Learning
        </>
      ),
      text: "India’s only live tech-learning course with Tier 1 instructors. Get real-time feedback, interactive sessions & a personalised learning experience.",
    },
    {
      imageSrc:
        "https://dashboard.masaischool.com/img/course-details/curriculum-style/star_software.svg",
      heading: (
        <>
          Generative%{" "}
          <span style={{ color: "rgb(110, 113, 204)" }}>A.I. Integrated</span>{" "}
          Program
        </>
      ),
      text: "Harness & implement the power of A.I. in coding & data analytics. What’s more? Use custom A.I. tools to enhance placement preparation.",
    },
    {
      imageSrc:
        "https://dashboard.masaischool.com/img/course-details/curriculum-style/bulb_software.svg",
      heading: (
        <>
          <span style={{ color: "rgb(110, 113, 204)" }}>Industry Ready </span>
          Curriculum
        </>
      ),
      text: "Our curriculum is regularly updated through industry feedback. In-demand specialisations are added to aid our students in launching a sustainable career.",
    },
    {
      imageSrc:
        "https://dashboard.masaischool.com/img/course-details/curriculum-style/check_software.svg",
      heading: (
        <>
          Focus On Learning
          <span style={{ color: "rgb(110, 113, 204)" }}> Agility</span>
        </>
      ),
      text: "We prioritise flexible thinking & continuous skill development. Stay nimble in an ever-changing world by embracing adaptability, curiosity & rapid learning.",
    },
    {
      imageSrc:
        "https://dashboard.masaischool.com/img/course-details/curriculum-style/profile_software.svg",
      heading: (
        <>
          Industry Ready In Just{" "}
          <span style={{ color: "rgb(110, 113, 204)" }}>25 - 35 weeks</span>
        </>
      ),
      text: "Curriculum at Masai is designed to be intensive & extensive. With our unique pedagogy, learn right in less time. All we ask is your dedication!",
    },
  ];
  const headingFont = {
    fontWeight: "700 !important",
    fontSize: "34px !important",
    lineHeight: "40px !important",
  };
  const SubheadingFont = {
    fontWeight: "700 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
  };
  const secondSubheadingFont = {
    fontWeight: "700 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "rgb(84, 77, 79)",
  };
  const scolorshipHeight = {
    fontWeight: "700 !important",
    fontSize: "34px !important",
    lineHeight: "40px !important",
  };
  const ParagraphFontCourseDetail = {
    fontWeight: "600",
    fontSize: "15px",
    color: "rgb(110, 113, 204)",
  };
  const ScolorParagraphFontCourseDetail = {
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "24px ",
    color: "rgb(84, 77, 79)",
  };
  const SubParagraphFontCourseDetail = {
    fontWeight: "600",
    fontSize: "15px",
  };
  const customStyles = {
    _hover: {
      background: "none",
    },
    borderRadius: "none",
    color: "#2b6cb0",

    background: "transparent",
  };

  const coursesDetail = useSelector((state) => state.appReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(selectCourseDetail({courseId, token}));
  // }, [dispatch]);

  if (coursesDetail.selectedCourseReq) {
    return <h1>Loading......</h1>;
  }

  console.log("selectCourseDetail", coursesDetail.selectedCourse);

  return (
    <Box mt={"-4"} ml={"-4"} mx={"auto"}>
      {coursesDetail && coursesDetail?.selectedCourse && coursesDetail?.selectedCourse?.map((el, index) => (
        <Box background={"#ffffff"} key={el.courseId}>
          <Box
            mx={8}
            pt={"4"}
            display={"flex"}
            flexDirection={"column"}
            gap={1}>
            <Box>
              <Heading fontSize={"24px"} as="h4">
                {el.courseTitle}
              </Heading>
            </Box>
            <Box>
              <Heading
                lineHeight={10}
                color={"rgb(110, 113, 204)"}
                fontSize={"20px"}
                fontWeight={"700"}
                as="h4">
                Extensive Learning Course{" "}
                <Text
                  p={"10px"}
                  fontSize={"15px"}
                  color={"var(--secondary-brick-500, #CC926E)"}
                  background={"var(--extended-brick-50, #F6EDE7)"}
                  as={"span"}
                  borderRadius={"24px"}
                  fontWeight={"800"}>
                  FULL TIME
                </Text>{" "}
              </Heading>

              <Image
                margin={"-15px"}
                src="https://dashboard.masaischool.com/img/course-details/yellow-vector.svg"
              />
            </Box>
          </Box>
          <Flex
            mt={100}
            mx={["auto", "auto", 8]}
            gap={5}
            flexWrap="wrap"
            width={["100%"]}
            justifyContent={["center", "center", "flex-start"]}
            background={[
              "var(--extended-purple-50, #F7F7FF)",
              "var(--extended-purple-50, #F7F7FF)",
              "white",
            ]}>
            {allDiv.map((el, index) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={3}
                flexDirection={"column"}
                justifyContent={"center"}
                w={"258px"}
                h={"128px"}
                background={"var(--extended-purple-50, #F7F7FF)"}
                borderRadius={"16px"}
                key={el.Name+el.index}>
                <Box>
                  <Image src={el.image} />
                </Box>
                <Box>
                  <Heading
                    mx={"auto"}
                    fontSize={["7px", "16px", "19px", "21px"]}
                    textAlign={"center"}
                    width={"75%"}
                    as="h5">
                    {el.Name}
                  </Heading>
                </Box>
              </Box>
            ))}
          </Flex>
          <Box mx={8} mt={100}>
            <Heading
              fontSize={"24px"}
              as="h4"
              textAlign={["center", "center", "start"]}>
              Course Details
            </Heading>
          </Box>
          <Flex
            mt={25}
            mx={8}
            gap={5}
            flexWrap="wrap"
            justifyContent={["center", "center", "flex-start"]}>
            {CourseDetail.map((el, index) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={3}
                flexDirection={"column"}
                justifyContent={"center"}
                h={"128px"}
                background={"var(--extended-purple-50, #F7F7FF)"}
                borderRadius={"16px"}
                w={["100%", "100%", "33.33%", "25%"]}
                key={el.Name + el.index}>
                <Box>
                  <Image src={el.image} />
                </Box>
                <Box>
                  <Heading
                    mx={"auto"}
                    fontSize={["7px", "16px", "19px", "21px"]}
                    textAlign={"center"}
                    width={"75%"}
                    as="h5">
                    {el.Name}
                  </Heading>
                </Box>
              </Box>
            ))}
          </Flex>
          <Box mx={[2, 4, 8]} mt={50}>
            <Heading mb={5} fontSize={["18px", "20px", "23px"]} as="h4">
              Minimum Criteria
            </Heading>
            <Text
              fontSize={["14px", "16px", "16px"]}
              fontWeight={"400"}
              lineHeight={"24px"}
              color={"#6f696b"}>
              You should meet the following requirements to be eligible for this
              course.
            </Text>
          </Box>
          <Grid
            mx={8}
            mt={50}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={5}>
            {MinimunCriteriaDiv.map((el, index) => (
              <GridItem key={index}>
                <Box display={"flex"} gap={6} alignItems={"center"}>
                  <Box
                    fontSize={"22px"}
                    color={"#6e71cc"}
                    p={3}
                    background={"#f7f7ff"}
                    height={"40px"}
                    borderRadius={16}
                    display={"flex"}
                    alignItems={"center"}>
                    {el.image}
                  </Box>
                  <Box>
                    <Text
                      fontSize={"16px"}
                      fontWeight={"600"}
                      lineHeight={"24px"}>
                      {el.Criteria}
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"24px"}
                      color={"#8e8a8b"}>
                      {el.Detail}
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <Box m={10}>
            <Box
              background={"#3470e4"}
              borderRadius={"40px"}
              mt={"24px"}
              pt={"48px"}
              pb={"48px"}
              paddingInline={"16px"}>
              <Flex justifyContent={"center"}>
                <Box
                  display={"flex"}
                  background={"rgba(219, 238, 255, 0.38);"}
                  alignItems="center"
                  pr={[0, 4, 20]}
                  mx={[2, 4, 8]}
                  mt={10}
                  wx={"auto"}
                  borderRadius={"24px"}
                  flexDirection={["column", "row"]}>
                  <Box mb={[4, 0]} textAlign={["center", "left"]}>
                    <Image src="https://dashboard.masaischool.com/img/course-details-timeline/superman.svg" />
                  </Box>
                  <Box
                    display={"flex"}
                    fontSize={["18px", "24px", "32px"]}
                    alignItems={"center"}>
                    <Heading as={"h3"} css={headingFont}>
                      Follow this path to become a <br />{" "}
                      <Text color={"rgb(255, 219, 102);"} textAlign={"center"}>
                        {" "}
                        Rockstar Developer
                      </Text>{" "}
                    </Heading>
                  </Box>
                </Box>
              </Flex>
              <Box mt={100}>
                <Flex alignItems={"center"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    background={"rgb(255, 255, 255)"}
                    w={"80px"}
                    h={"80px"}
                    mt={["100px", "100px", 0]}
                    mb={["25px", "25px", 0]}
                    borderRadius={"50%"}>
                    <Heading as={"h2"}>1</Heading>
                  </Box>
                  <Heading
                    css={headingFont}
                    color={"rgb(255, 255, 255)"}
                    textTransform={"capitalize"}
                    as={"h2"}
                    mt={["100px", "100px", 0]}
                    mb={["25px", "25px", 0]}
                    ml={"16px"}>
                    Getting into the Course
                  </Heading>
                </Flex>
              </Box>
              <Flex
                flexDirection={["column", "column", "row"]}
                justifyContent="center"
                alignItems="center"
                textAlign={["center", "center", "left"]}>
                <Image
                  ml={["0", "0", "34px"]}
                  mr={["0", "0", "-2px"]}
                  display={["none", "none", "block"]}
                  src="https://dashboard.masaischool.com/img/new-course-detail-page/1line.svg"
                />
                <Box
                  ml={["0", "0", "20px"]}
                  mr={["0", "0", "20px"]}
                  mt={["0", "0", "10px"]}
                  w={["100%", "100%", "100%"]}>
                  <Flex
                    ml={["0", "0", "20px"]}
                    mt={["0", "0", "10px"]}
                    w={["100%", "100%", "100%"]}
                    p={["16px", "16px", "24px"]}
                    background={"rgb(255, 255, 255)"}
                    maxWidth={"1032px"}
                    gap={["20px", "30px", "43px"]}
                    overflow={"auto"}
                    maxHeight={["unset", "unset", "475px"]}
                    marginInline={"auto"}
                    borderRadius={["0px", "0px", "0px 24px 24px"]}
                    boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)">
                    <Box w={["100%", "100%", "700px"]}>
                      <Heading
                        as={"h4"}
                        css={SubheadingFont}
                        fontSize={["18px", "20px", "24px"]}
                        mb={["10px", "10px", "15px"]}>
                        {el.courseTitle}
                      </Heading>
                      <Text
                        textAlign={["center", "center", "start"]}
                        fontWeight={"500"}>
                        {el.Description}
                      </Text>
                      <UnorderedList
                        mt={["10px", "10px", "16px"]}
                        marginInlineStart={"1em"}
                        listStyleType={"initial"}>
                        <ListItem color={"rgb(52, 112, 228)"}>
                          <Heading
                            as={"h5"}
                            fontSize={["16px", "18px", "18px"]}
                            css={secondSubheadingFont}>
                            {el.Duration.split(" ").slice(0, -4).join(" ")}{" "}
                            <Text as={"span"} color={"rgb(52, 112, 228)"}>
                              {el.Duration.split(" ").slice(-4).join(" ")}
                            </Text>
                          </Heading>
                        </ListItem>
                        <ListItem>
                          <Heading
                            fontSize={["16px", "18px", "18px"]}
                            css={secondSubheadingFont}
                            as={"h5"}>
                            What you’ll learn
                          </Heading>
                        </ListItem>
                      </UnorderedList>

                      <Flex
                        flexWrap={"wrap"}
                        gap={"25px"}
                        ml={["0", "0", "10px"]}
                        pb={"10px"}
                        mt={"18px"}
                        height={"unset"}>
                        {el.Learning?.map((image, index) => (
                          <Box height={"100%"} key={index}>
                            <Image
                              maxWidth={"100%"}
                              maxHeight={"50px"}
                              height={"100%"}
                              src={image}
                              alt="img"
                            />
                          </Box>
                        ))}
                      </Flex>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box borderRadius={"24px"} w={"fit-content"}>
                        <Image
                          maxW={"100%"}
                          height={"auto"}
                          display={["none", "none", "block"]}
                          src="https://dashboard.masaischool.com/img/new-course-details/da-what-will-learn.svg"
                        />
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
              <Box>
                <Flex alignItems={"center"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    background={"rgb(255, 255, 255)"}
                    w={"80px"}
                    h={"80px"}
                    mt={["100px", "100px", 0]}
                    borderRadius={"50%"}>
                    <Heading as={"h2"}>2</Heading>
                  </Box>
                  <Heading
                    css={headingFont}
                    color={"rgb(255, 255, 255)"}
                    textTransform={"capitalize"}
                    as={"h2"}
                    mt={["100px", "100px", 0]}
                    ml={"16px"}>
                    Course Details
                  </Heading>
                </Flex>
              </Box>
              <Flex position={"relative"}>
                <Image
                  zIndex={1}
                  ml={[0, "34px", "34px"]}
                  mt={[0, "-2px", "-2px"]}
                  h={"auto"}
                  display={["none", "none", "block"]}
                  src="https://dashboard.masaischool.com/img/new-course-detail-page/2lineDA.svg"
                />
                <Box
                  ml={["14px", "14px", 16]}
                  mt={"10px"}
                  w={"94%"}
                  position={"absolute"}>
                  <Box
                    p={"4"}
                    pb={"0"}
                    borderRadius={"25px"}
                    background={"rgb(242, 253, 255)"}
                    border={"1px solid rgb(135, 200, 213)"}
                    mb={["255px", "255px", 0]}
                    overflow={"auto"}>
                    <Box maxW={"full"}>
                      <Tabs zIndex={"10"}>
                        <TabList>
                          <Tab sx={customStyles}>Unit 1</Tab>
                          <Tab sx={customStyles}>Unit 2</Tab>
                          <Tab sx={customStyles}>Unit 3</Tab>
                          <Tab sx={customStyles}>Unit 4</Tab>
                          <Tab sx={customStyles}>Unit 5</Tab>
                          <Tab sx={customStyles}>Unit 6</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            <Box
                              outline={"transparent solid 2px"}
                              outlineOffset={"2px"}
                              textAlign={"start"}>
                              <Box>
                                <Text sx={ParagraphFontCourseDetail} mb={"2"}>
                                  Week 1-5 (Unit-1)
                                </Text>

                                <Box mb={"8px"}>
                                  <Text css={SubParagraphFontCourseDetail}>
                                    {el.Coursedetails["Unit 1"].hasOwnProperty(
                                      "Programming"
                                    )
                                      ? "Programming"
                                      : ""}
                                  </Text>
                                  <UnorderedList
                                    listStyleType={"initial"}
                                    marginInlineStart={"1em"}>
                                    {el.Coursedetails[
                                      "Unit 1"
                                    ].Programming?.map((text, index) => (
                                      <ListItem color={"rgb(108, 103, 104)"} key={index}>
                                        <Text fontSize="12px"> {text}</Text>
                                      </ListItem>
                                    ))}
                                  </UnorderedList>
                                </Box>
                                <Box mb={"8px"}>
                                  <Text css={SubParagraphFontCourseDetail}>
                                    {el.Coursedetails["Unit 1"].hasOwnProperty(
                                      "Data Structure & Algorithms"
                                    )
                                      ? "Data Structure & Algorithms"
                                      : ""}
                                  </Text>
                                  <UnorderedList
                                    listStyleType={"initial"}
                                    marginInlineStart={"1em"}>
                                    {el.Coursedetails["Unit 1"][
                                      "Data Structure & Algorithms"
                                    ]?.map((text, index) => (
                                      <ListItem color={"rgb(108, 103, 104)"} key={index}>
                                        <Text fontSize={"micro"}>{text}</Text>
                                      </ListItem>
                                    ))}
                                  </UnorderedList>
                                </Box>
                              </Box>
                            </Box>
                          </TabPanel>
                          <TabPanel>
                            <Box
                              outline={"transparent solid 2px"}
                              outlineOffset={"2px"}
                              textAlign={"start"}>
                              <Box>
                                <Text
                                  sx={ParagraphFontCourseDetail}
                                  mb={"2"}
                                  fontSize={"md"}
                                  fontWeight={"bold"}>
                                  Week 5-10 (Unit-2)
                                </Text>

                                <Box mb={"8px"}>
                                  <Text css={SubParagraphFontCourseDetail}>
                                    {el.Coursedetails["Unit 2"].hasOwnProperty(
                                      "Databases"
                                    )
                                      ? "Databases"
                                      : ""}
                                  </Text>
                                  <UnorderedList
                                    listStyleType={"initial"}
                                    marginInlineStart={"1em"}>
                                    {el.Coursedetails["Unit 2"][
                                      "Databases"
                                    ]?.map((text, index) => (
                                      <ListItem color={"rgb(108, 103, 104)"} key={index}>
                                        <Text fontSize="12px"> {text}</Text>
                                      </ListItem>
                                    ))}
                                  </UnorderedList>
                                </Box>
                                <Box mb={"8px"}>
                                  <Text css={SubParagraphFontCourseDetail}>
                                    {el.Coursedetails["Unit 2"].hasOwnProperty(
                                      "Data Structure & Algorithms"
                                    )
                                      ? "Data Structure & Algorithms"
                                      : "Mathematics for Analytics"}
                                  </Text>
                                  <UnorderedList
                                    listStyleType={"initial"}
                                    marginInlineStart={"1em"}>
                                    {el.Coursedetails["Unit 2"][
                                      "Data Structure & Algorithms"
                                    ] ||
                                      ["Mathematics for Analytics"]?.map(
                                        (text, index) => (
                                          <ListItem
                                            color={"rgb(108, 103, 104)"} key={index}>
                                            <Text fontSize={"micro"}>
                                              {text}
                                            </Text>
                                          </ListItem>
                                        )
                                      )}
                                  </UnorderedList>
                                </Box>
                              </Box>
                            </Box>
                          </TabPanel>
                          <TabPanel textAlign={"start"}>
                            <Box>
                              <Text
                                sx={ParagraphFontCourseDetail}
                                mb={"2"}
                                fontSize={"md"}
                                fontWeight={"bold"}>
                                Week 11-15 (Unit-3)
                              </Text>
                            </Box>
                            <Box mb={"8px"}>
                              <Text css={SubParagraphFontCourseDetail}>
                                Web Development
                              </Text>
                              <UnorderedList
                                listStyleType={"initial"}
                                marginInlineStart={"1em"}>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px"> HTML</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">CSS</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">CSS Frameworks</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">CSS Animations</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    Figma for Developers
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">CSS Preprocessors</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">Version Control</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">Git</Text>
                                </ListItem>
                              </UnorderedList>
                            </Box>
                          </TabPanel>
                          <TabPanel textAlign={"start"}>
                            <Box>
                              <Text
                                sx={ParagraphFontCourseDetail}
                                mb={"2"}
                                fontSize={"md"}
                                fontWeight={"bold"}>
                                Week 16-20 (Unit-4)
                              </Text>
                            </Box>
                            <Box mb={"8px"}>
                              <Text mb={"2"} css={SubParagraphFontCourseDetail}>
                                Generative AI for Developers
                              </Text>
                              <Text css={SubParagraphFontCourseDetail}>
                                Javascript
                              </Text>
                              <UnorderedList
                                listStyleType={"initial"}
                                marginInlineStart={"1em"}>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    {" "}
                                    Fundamentals of Javascript
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">DOM Manipulation</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">Event Handling</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">Asynchronous</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    Javascript ES6+ Features
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    Data Manipulation & API Error Handling &
                                    Debugging
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">Testing</Text>
                                </ListItem>
                              </UnorderedList>
                            </Box>
                          </TabPanel>
                          <TabPanel textAlign={"start"}>
                            <Box>
                              <Text
                                sx={ParagraphFontCourseDetail}
                                mb={"2"}
                                fontSize={"md"}
                                fontWeight={"bold"}>
                                Week 21-25 (Unit-5)
                              </Text>
                            </Box>
                            <Box mb={"8px"}>
                              <Text mb={"2"} css={SubParagraphFontCourseDetail}>
                                Project Management
                              </Text>
                              <Text mb={"2"} css={SubParagraphFontCourseDetail}>
                                React
                              </Text>
                              <UnorderedList
                                listStyleType={"initial"}
                                marginInlineStart={"1em"}>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px"> JSX</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    {" "}
                                    Components and Props
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    State and Lifecycle Methods
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    {" "}
                                    Conditional Rendering
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">React Router</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">React Hooks</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    State Management with Redux
                                  </Text>
                                </ListItem>
                              </UnorderedList>
                            </Box>
                          </TabPanel>
                          <TabPanel textAlign={"start"}>
                            <Box>
                              <Text
                                sx={ParagraphFontCourseDetail}
                                mb={"2"}
                                fontSize={"md"}
                                fontWeight={"bold"}>
                                Week 26-30 (Unit-6)
                              </Text>
                            </Box>
                            <Box mb={"8px"}>
                              <Text mb={"2"} css={SubParagraphFontCourseDetail}>
                                Node & Express
                              </Text>

                              <UnorderedList
                                listStyleType={"initial"}
                                marginInlineStart={"1em"}>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px"> Node.js Modules</Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    {" "}
                                    Routing and Middleware
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    {" "}
                                    RESTful API Development
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    Working with Databases{" "}
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    Authentication and Authorization
                                  </Text>
                                </ListItem>
                                <ListItem color={"rgb(108, 103, 104)"}>
                                  <Text fontSize="12px">
                                    Deployment and Scaling{" "}
                                  </Text>
                                </ListItem>
                              </UnorderedList>
                            </Box>

                            <Text mb={"2"} css={SubParagraphFontCourseDetail}>
                              Interview Preparation
                            </Text>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </Box>
                  </Box>
                  {/* </Flex> */}
                </Box>
              </Flex>

              <Flex alignItems={"center"} justifyContent={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  background={"rgb(255, 255, 255)"}
                  w={"80px"}
                  h={"80px"}
                  mt={["500px", "500px", 0]}
                  borderRadius={"50%"}>
                  <Heading as={"h2"}>3</Heading>
                </Box>
                <Heading
                  css={headingFont}
                  color={"rgb(255, 255, 255)"}
                  textTransform={"capitalize"}
                  as={"h2"}
                  mt={["500px", "500px", 0]}
                  ml={"16px"}>
                  What you could become
                </Heading>
              </Flex>
              <Box
                mt={5}
                marginInline={"auto"}
                overflowY={"auto"}
                background={"rgb(255, 255, 255)"}
                borderRadius={"24px"}
                maxW={"725px"}>
                <Flex gap={"25px"}>
                  <Marquee
                    speed={40}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left">
                    {Posts1.map((el, index) => (
                      <Box key={index}
                        m={3}
                        p={"7px 10px 7px 10px"}
                        borderRadius={"7px"}
                        background={"#f2f6ff"}>
                        <Text color={"#6E71CC"}>{el.Post}</Text>
                      </Box>
                    ))}
                  </Marquee>
                </Flex>
                <Flex>
                  <Marquee
                    speed={40}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left">
                    {Posts1.map((el) => (
                      <Box key={el.index}
                        m={3}
                        p={"7px 10px 7px 10px"}
                        borderRadius={"7px"}
                        background={"#f2f6ff"}>
                        <Text color={"#6E71CC"}>{el.Post}</Text>
                      </Box>
                    ))}
                  </Marquee>
                </Flex>
                <Flex>
                  <Marquee
                    speed={40}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left">
                    {Posts1.map((el, index) => (
                      <Box
                      key={index}
                        m={3}
                        p={"7px 10px 7px 10px"}
                        borderRadius={"7px"}
                        background={"#f2f6ff"}>
                        <Text color={"#6E71CC"}>{el.Post}</Text>
                      </Box>
                    ))}
                  </Marquee>
                </Flex>
              </Box>
              <Box ml={"60px"}>
                <Image
                  marginInline={"auto"}
                  src="https://dashboard.masaischool.com/img/new-course-detail-page/5line.svg"
                />
              </Box>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  background={"rgb(255, 255, 255)"}
                  w={"80px"}
                  h={"80px"}
                  borderRadius={"50%"}>
                  <Heading as={"h2"}>4</Heading>
                </Box>
                <Heading
                  css={headingFont}
                  color={"rgb(255, 255, 255)"}
                  textTransform={"capitalize"}
                  as={"h2"}
                  ml={"16px"}>
                  We Are Not Done Yet..
                </Heading>
              </Flex>
              <Box
                mt={5}
                marginInline={"auto"}
                overflow={"auto"}
                pt={"25px"}
                pb={"25px"}
                px={5}
                background={"rgb(255, 255, 255)"}
                backgroundImage={
                  "https://dashboard.masaischool.com/img/new-course-details/confetti.svg"
                }
                borderRadius={"24px"}
                maxW={"725px"}>
                <Box
                  marginInline={"auto"}
                  mb={"13px"}
                  position={"relative"}
                  width={"fit-content"}>
                  <Heading
                    sx={scolorshipHeight}
                    textAlign={"center"}
                    color={"rgb(52, 112, 228)"}
                    as={"h2"}>
                    <Text fontSize={"24px"} color={"rgb(10, 1, 3)"} as={"span"}>
                      Time for
                    </Text>{" "}
                    Scholarship
                  </Heading>
                  <Image
                    position={"absolute"}
                    right={"-3.5rem"}
                    top={"-2.5rem"}
                    src="https://dashboard.masaischool.com/img/new-course-details/hat.svg"
                  />
                </Box>
                <UnorderedList>
                  <ListItem sx={ScolorParagraphFontCourseDetail}>
                    Up to{" "}
                    <Text as={"span"} color={"rgb(52, 112, 228)"}>
                      50% discount
                    </Text>{" "}
                    on the course fee.
                  </ListItem>
                  <ListItem sx={ScolorParagraphFontCourseDetail}>
                    <Text as={"span"} color={"rgb(52, 112, 228)"}>
                      Performance-based
                    </Text>
                    criteria for eligibility.
                  </ListItem>
                  <ListItem sx={ScolorParagraphFontCourseDetail}>
                    The scholarship amount will be deducted from the{" "}
                    <Text as={"span"} color={"rgb(52, 112, 228)"}>
                      {" "}
                      Pay-After-Placement
                    </Text>{" "}
                    (PAP) payment option instead of being paid upfront.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Grid
              mt={12}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
              ]}
              templateRows={"repeat(2, 1fr)"}
              p={"40px"}
              borderRadius={"24px"}
              gap={"38px"}
              background={"rgb(247, 247, 255)"}>
              <GridItem
                mx={"auto"}
                border={"1px solid rgb(207, 208, 238)"}
                p={"24px"}
                borderRadius={"24px"}
                background={"rgb(110, 113, 204)"}>
                <Image
                  mx={"auto"}
                  maxW={"100%"}
                  h={"auto"}
                  src="https://dashboard.masaischool.com/img/course-details/curriculum-style/hat.svg"
                />
                <Heading
                  textAlign={"center"}
                  mx={"auto"}
                  mt={"24px"}
                  color={"rgb(255, 255, 255)"}
                  fontWeight={"700 !important"}
                  fontSize={"24px !important"}
                  lineHeight={"32px !important"}
                  as={"h3"}>
                  Best In-Class Curriculum & Pedagogy
                </Heading>
              </GridItem>
              {GridedataLastDiv.map((item, index) => (
                <GridItem key={index}
                  background={"#FFFFFF"}
                  borderRadius={"24px"}
                  textAlign={"center"}
                  p={"21px 16px"}
                  border={"1.00012px solid rgb(207, 208, 238)"}
                  boxShadow={
                    "rgba(208, 208, 208, 0.1) 0px 1px 7px, rgba(122, 122, 122, 0.06) 0px 1px 2px"
                  }>
                  <Image
                    marginInline={"auto"}
                    maxW={"100%"}
                    height={"auto"}
                    overflow={"clip"}
                    src={item.imageSrc}
                  />
                  <Heading
                    as={"h5"}
                    mt={"24px"}
                    fontWeight={"700 !important"}
                    fontSize={"18px !important"}
                    lineHeight={"24px !important"}>
                    {item.heading}
                  </Heading>
                  <Text
                    mt={"12px"}
                    fontWeight={"400"}
                    fontSize={"14px"}
                    lineHeight={"22px"}>
                    {item.text}
                  </Text>
                </GridItem>
              ))}
            </Grid>
            <Heading
              textAlign={"left"}
              fontWeight={"700 !important"}
              fontSize={"20px !important"}
              lineHeight={"20px !important"}
              mt={10}
              as={"h5"}>
              Pay Through Pay After Placement
            </Heading>
            <Box display={"flex"} flexDirection={"row"} mt={2} gap={2}>
              <Text fontWeight={"400"} fontSize={"16px"} lineHeight={"24px"}>
                No loans, no collaterals, no interest rate.
              </Text>
              <Text as="u" color="#3470E4">
                <Link color="#3470E4" href="https://www.masaischool.com/fees">
                  Learn more about PAP
                </Link>
              </Text>
            </Box>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={24}>
              {PayThroughplacemet.map((el, index) => (
                <GridItem
                  key={index}
                  textAlign={"center"}
                  mt={32}
                  paddingInlineStart={"1.5rem"}
                  paddingInlineEnd={"1.5rem"}>
                  <Flex
                    alignItems={"center"}
                    flexDirection={"column"}
                    textAlign={"center"}>
                    <Box
                      background={"#F7F7FF"}
                      borderRadius={16}
                      p={"0.5rem"}
                      mx={"auto"}>
                      <Image src={el.image} />
                    </Box>
                    <Text
                      mt={"2rem"}
                      color={"#544D4F"}
                      fontWeight={"600"}
                      fontSize={"16px"}
                      lineHeight={"24px"}>
                      {" "}
                      {el.Name}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Flex
            pt={"0.75rem"}
            pb={"0.75rem"}
            w={"full"}
            background={"rgb(255, 255, 255)"}
            zIndex={"100"}
            justifyContent={"flex-end"}
            p={"12px"}
            position={"sticky"}
            boxShadow={"rgba(0, 0, 0, 0.1) 0px -8px 32px 0px"}
            top={"0"}>
            <Flex w={"100%"} justifyContent={"flex-end"}>
              <Button
                color={"rgb(52, 112, 228)"}
                background={"rgb(242, 247, 255)"}
                onClick={() => {
                  Navigate("/courses");
                }}>
                Back to Courses
              </Button>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Box>

  );

  
}

export default CourseDetail;