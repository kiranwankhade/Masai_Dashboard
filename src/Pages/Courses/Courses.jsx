import React ,{useEffect }from "react";
import {selectCourseDetail} from "../../Stores/appReducer/action"
import ArrowIcon from "../../Icons/RightArrowlogo.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Style/Courses.css";
import { useTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {fetchCourseData} from "../../Stores/appReducer/action";
import Marquee from "react-fast-marquee";
import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Heading,
  Button,
} from "@chakra-ui/react";

import { useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

function Courses(props) {

  const token = JSON.parse(localStorage.getItem("token"));

  const widthOfPage = {
    width: "92%",
  };
  const theme = useTheme();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
 
  const courses = useSelector((state) => state.appReducer.courseData);

  useEffect(() => {
    dispatch(fetchCourseData(token));
  }, [dispatch]);
  // console.log(courses);

  const headingFont = theme.fontFamily.headings;
  const cards = [
    {
      Name: "Nrupul Dev",
      Post: "Co founder & CTO",
      Education: "IIT, Kanpur",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg",
    },
    {
      Name: "Venugopal",
      Post: "Sr. Curriculum Engineer",
      Education: "University of Hyderabad",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/venu_6e7cabff61.jpeg",
    },
    {
      Name: "Saket Dwivedi",
      Post: "Co founder & CTO",
      Education: "IIT, Kanpur",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/sarket_0c032205c3.png",
    },
    {
      Name: "Vivek M. Agarwal",
      Post: "Director - Curriculum",
      Education: "Sikkim Manipal University",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_47_a922f4522c.png",
    },
    {
      Name: "Akshay Kumar Gupta",
      Post: "Senior Curriculum Engineer",
      Education: "IIIT, Alahabad",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ak2_1_Akshay_Gupta_dd64b6f620.jpeg",
    },
    {
      Name: "Albert Sebastian",
      Post: "Director - Business Head",
      Education: "Stanford University",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg",
    },
    {
      Name: "Katana Sri Ajay",
      Post: "Senior Curriculum Engineer",
      Education: "IIT, Guwahati",
      image:
        "	https://masai-website-images.s3.ap-south-1.amazonaws.com/Profile_pic_Sri_Ajay_0fa9d61b3a.jpg",
    },
    {
      Name: "Priyansh Kalawat",
      Post: "Senior Curriculum Engineer",
      Education: "IIT, Madras",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Priyansh_Kalawat_3c80fdb115.jpg",
    },
    {
      Name: "Rajat Dhariwal",
      Post: "SVP - Curriculum",
      Education: "Carnegie Mellon University",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/1607664449183_1_f46467a88b.jpg",
    },
    {
      Name: "Nitesh Jain",
      Post: "SDE - Amazon",
      Education: "Industry Mentor",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/nitesh_409e88531a.jpg",
    },
    {
      Name: "Vinit Shahdeo",
      Post: "SDE Novo",
      Education: "Industry Mentor",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/vinit_shahdeo_1c2adad5d2.jpg",
    },
    {
      Name: "Gaurav Chauhan",
      Post: "Software Engineer",
      Education: "Industry Mentor",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/gaurav_chauhan_c2ee99b9ee.jpg",
    },
    {
      Name: "Jai Sethia",
      Post: "SDE 2 Amazon",
      Education: "Industry Mentor",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/jai_senthia_aabd0c8953.jpg",
    },
  ];
 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Hired = [
    [
      " Kajal Yadav got an offer from Silaris! 🥳",

      "Rohit Kumar got an offer from Nirogstreet! 🥳",

      "Nisha Sharma got an offer from Orion Express Logistics Pvt Ltd! 🥳",

      "ABHISHEK RAGHUNATH UPADHYAY got an offer from The Matrix Labs! 🥳",

      "Aniket Pandey got an offer from Cloudify! 🥳",
    ],
  ];
  const gridItemStyles = {
    display: "flex",
    padding: "6px 16px",
    gap: "30px",
    background: "var(--primary-white-fff, #FFF)",
    boxShadow:
      "0px 1px 2px 0px rgba(110, 113, 204, 0.06), 0px 1px 3px 0px rgba(110, 113, 204, 0.10)",
    borderRadius: "12px",
    alignItems: "center",
  };
  const dateItemStyles = {
    display: "flex",
    marginTop: "10px",
    justifyContent: "space-between",
    gap: "6px",
  };
  const boxStyles = {
    boxShadow:
      " 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
    borderRadius: "12px",
    background: "white",
    width: "200px",
    marginRight: "10px",
    height: "300px",
  };
  const secondBox = {
    padding: "8px",
    textAlign: "center",
    lineHeight: "25px",
    height: "100%",
  };
  const HeadingfontofLastDivStyle = {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: "600",
    color: "black",
  };
  const fontofLastDivStyle = {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: "400",
    // maxWidth:"fit-content",
    color: "rgb(94, 94, 94)",
    textAlign: "center",
  };
  const fontofLastDivStyle2 = {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgb(94, 94, 94)",
  };

  // Use useBreakpointValue unconditionally
  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
  });
  
  const [displaySection, setDisplaySection] = useState("shift_box");
  const handleSectionClick = (section) => {
    setDisplaySection(section);
  };
 
  const handleCourseSelection = (courseId) => {
    dispatch(selectCourseDetail({courseId, token}));
  };

  if(courses.selectedCourseReq){
    return <h1>Loading......</h1>
  }
  if(courses.isError){
    return <h1>Error occured......</h1>
  }


  return (
    <Box ml={"-3"}  h={"120vh"}  >
        <Box background={"bg_3"} mt={"-13px"} mb={"25px"} ml={"-2"} p={"1"} h={"24px"} flexShrink={"0"}>
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

      <Box className="full_page" mb={"8"}w={"100%"}>
        <Flex justifyContent="flex-start" mb={10}>
          <Box
            borderRadius="8px"
            background="radial-gradient(143.14% 158.2% at 104.39% 0%, #88A9FD 0%, #3470E4 100%)"
            boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
            display="inline-flex"
            padding={{ base: '0px 0.08px 0px 6px', md: '0px 0.08px 0px 30px' }}
            justifyContent="flex-end"
            alignItems="center"
            m={"auto"}
            gap={{ base: '70px', md: '260px' }}
            css={widthOfPage}>
            <Text
              wordBreak="normal"
              color="#FFF"
              textAlign="center"
              fontSize="24px"
              fontWeight="700"
              lineHeight="32px">
              Our Courses
            </Text>
            <Image
              src="https://dashboard.masaischool.com/img/courses-banner-icon.png"
              alt="pologon"
            />
          </Box>
        </Flex>
        <Flex
          className="second_div"
          mx={5}
          mb={10}
          justifyContent="flex-start"
          gap={10}
          css={widthOfPage}
          borderBottom={"2px solid #CCC;"}>
          <Box
            p="8px 16px"
            className={displaySection === "shift_box" ? "all" : ""}
            boxShadow={
              displaySection === "shift_box"
                ? " 0px 2px 0px 0px #3470E4"
                : "none"
            }
            onClick={() => handleSectionClick("shift_box")}
            cursor={"pointer"}>
            <Text
              color={displaySection === "shift_box" ? "#3470E4" : "#6C6768"}
              fontFamily="Open Sans"
              fontSize="14px"
              fontWeight="600"
              lineHeight="24px">
              All
            </Text>
          </Box>
          <Box
            p="8px 16px"
            className={displaySection === "applied_div" ? "applied" : ""}
            boxShadow={
              displaySection === "applied_div"
                ? " 0px 2px 0px 0px #3470E4"
                : "none"
            }
            cursor={"pointer"}
            onClick={() => handleSectionClick("applied_div")}>
            <Text
              color={displaySection === "applied_div" ? "#3470E4" : "#6C6768"}
              fontFamily="Open Sans"
              fontSize="14px"
              fontWeight="600"
              lineHeight="24px">
              Applied
            </Text>
          </Box>
        </Flex>
        {displaySection === "shift_box" && (
          <Box className="shift_box">
            <Grid
              templateColumns={templateColumns}
              gap={6}
              css={widthOfPage}
              mx="5"
              className="third_div">
              {courses?.map((el) => (
                <GridItem
                  key={el._id}
                  css={gridItemStyles}
                  cursor={"pointer"}
                  onClick={() => {
                    handleCourseSelection(el.courseId);
                    Navigate(`/courses/${el.courseId}/details`);
                  }}>
                  <Box>
                    <Image src={el.image} />
                  </Box>
                  <Box display="flex" gap={4}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-start"}
                      
                      >
                      <Box className="Course_heading" m={-1}>
                        <Text
                          color="#21191B"
                          fontFamily="Open Sans"
                          fontSize="14px"
                          fontWeight="600"
                          lineHeight="24px">
                          {el.courseName}
                        </Text>
                      </Box>
                      <Box
                        className="Course_date"
                        css={dateItemStyles}
                        ml={"-2"}>
                        <Text
                          color="#544D4F"
                          fontFamily="Open Sans"
                          fontSize="12px"
                          fontWeight="400"
                          lineHeight="16px">
                          {el.dateOfStart}
                        </Text>
                        <Text
                          color="#544D4F"
                          fontFamily="Open Sans"
                          fontSize="12px"
                          fontWeight="400"
                          lineHeight="16px">
                          {el.dateOfStart}
                        </Text>
                        <Text
                          color="#544D4F"
                          fontFamily="Open Sans"
                          fontSize="12px"
                          fontWeight="400"
                          lineHeight="16px">
                          {el.timing}
                        </Text>
                      </Box>
                    </Box>
                    <Image src={ArrowIcon} />
                  </Box>
                </GridItem>
              ))}
            </Grid>
            <Box css={widthOfPage} mx={5} mt={"40px"}>
              {" "}
              <Text
                fontSize="16px"
                fontWeight="bold"
                textAlign={"start"}
                ml={"2"}>
                Meet Your Instructors
              </Text>
            </Box>

            <Box mt={4} mb={['18rem',"2rem"]} h={["25rem","100%"]}  mx={8} css={widthOfPage}>
              <Slider {...settings} className="custom-slider" >
                {cards.map((card, index) => (
                  <Box css={boxStyles}  key={index}  mb={'8'}>
                    <Box>
                      <Image
                        h={["25rem","25rem","200px"]}
                        borderRadius={"12px 12px 0px 0px"}
                        src={card.image}
                        width={"full"}
                        objectFit={"cover"}
                      />
                    </Box>
                    <Box css={secondBox}>
                      <Text
                        width={"100%"}
                        wordBreak={"keep-all"}
                        css={HeadingfontofLastDivStyle}>
                        {card.Name}
                      </Text>
                      <Text css={fontofLastDivStyle}>{card.Post}</Text>
                      <hr />
                      <Text css={fontofLastDivStyle2}>{card.Education}</Text>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        )}
        <Box
          className="applied_div"
          display={displaySection === "shift_box" ? "none" : "block"}
          css={widthOfPage}
          margin={"auto"}
          height={"100vh"}>
          <Grid
            alignItems={"center"}
            textAlign={"center"}
            placeContent={"center"}
            gridAutoRows={"minmax(100px, auto)"}
            justifyContent={"center"}
            width={"100%"}>
            <Image
              src="https://dashboard.masaischool.com/img/no-course-found.svg"
              margin={"auto"}
            />
            <Heading as="h5" size="lg" fontWeight={"700"}>
              There’s nothing here.
            </Heading>

            <Text maxWidth={"500px"}>
              Looks like you haven’t applied for any course till now. Visit the
              Dashboard to start your MSAT and complete your application
              process.
            </Text>
            <Box w={"35%"} margin={"auto"}>
              <Button
                width={"100%"}
                textTransform={"uppercase"}
                p={"20px 21px 20px 21px"}
                colorScheme="messenger"
                onClick={() => {
                  Navigate("/");
                }}>
                Start Applying
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Courses;