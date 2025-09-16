import React, { useEffect } from "react";
import DashboardLading from "../../Components/DashboardLanding";
import { Box, Flex } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { Skeleton } from "@chakra-ui/skeleton";
import AdmitCardPopUp from "../Onboarding/AdmitCardPopUp";

const Home = () => {
  const { users, isAuth, isLoading, isError, token } = useSelector(
    (val) => val.authReducer
  );

  // console.log('token:', token)
  console.log("Home page users:", users);
  console.log("Home page token:", token);
  // console.log("Home page token:", isAuth);

  const {dob,year,working,frontAdhar,backAdhar,acceptance,healthState,applyScholarship} = useSelector((val)=> val.onboardingReducer)

  const onboardingData = {dob,year,working,frontAdhar,backAdhar,acceptance,healthState,applyScholarship} 
  console.log("CONSENT-DATA",onboardingData)

 
  console.log(isLoading)
  return (
    <Box mt={"-4"}>
      {isLoading ? (
        <Flex
          gridTemplateColumns="repeat(2, 1fr)"
          justifyContent={"space-between"}
          textAlign={"justify"}
          gap={"30px"}>
          <Skeleton height="300px" borderRadius={"15px"} w={"480px"}></Skeleton>
          <Skeleton height="300px" borderRadius={"15px"} w={"480px"}></Skeleton>
          <Skeleton height="300px" borderRadius={"15px"} w={"480px"}></Skeleton>
          <Skeleton height="300px" borderRadius={"15px"} w={"480px"}></Skeleton>
        </Flex>
      ) : (
        <DashboardLading />
      )}

      {
        (dob==="" || dob === undefined)  ?  "" : <AdmitCardPopUp/>
      }
    </Box>
  );
};
export default Home;
