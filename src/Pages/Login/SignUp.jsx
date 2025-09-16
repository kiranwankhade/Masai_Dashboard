import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  Checkbox,
  Toast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { addNewUser } from "../../Stores/authReducer/authAction";

const SignUp = () => {
  const { isLoading } = useSelector((val) => val.authReducer);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const isEmailValid = emailRegex.test(email); //Check Mail is in mail format or not

  const isPhoneValid =
    (/^\d{10}$/.test(phoneNumber) && phoneNumber.length) === 10; //Check Phone number is in Number format or not And Have 10 digit only
  const isEnabled = name && isEmailValid && isPhoneValid;

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (isEnabled) {
      const userData = {
        name,
        email,
        phoneNumber,
        // referralCode,
      };
      
      dispatch(addNewUser(userData))
        .then((res) => {
          navigate("/signup-otp");
          // console.log("signup page res", res);
          Toast({
            title: "OTP send to your mobile number.",
            status: "success",
            position: "top",
            duration: "3000",
            isClosable: false,
          });
        })
        .catch((err) =>
          console.log("something error occurred while signup", err)
        );
    }
  };

  return (
    <Box
    minHeight="100vh"
    width="100vw"
    m={"auto"}
    display="flex"
    flexDirection={"column"}
    alignItems="center"
    justifyContent="space-between"
    gap={"15px"}
    bgImage={`
        url('https://sso.masaischool.com/screenbg.svg'), 
        url('https://sso.masaischool.com/screenbg-bottom.svg')
      `}
    bgPosition="left top, right bottom"
    bgRepeat="no-repeat"
    bgSize="50%, 35%">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign="center"
        mt={"2.50rem"}>
        <Image h={"60px"} src="https://sso.masaischool.com/brand_dark.svg" />
      </Box>

      <Box
        width={["100%", "70%", "55%", "33%"]}
        p={4}
        pb={"2rem"}
        lineHeight={"1.75rem"}
        m={"auto"}
        boxShadow={[
          "",
          "",
          "0px 0px 25px -5px rgba(0,0,0,0.1),0px 20px 25px -5px rgba(0,0,0,0.1),0px 0px 10px -5px rgba(0,0,0,0.04)",
          "0px 0px 25px -5px rgba(0,0,0,0.1),0px 20px 25px -5px rgba(0,0,0,0.1),0px 0px 10px -5px rgba(0,0,0,0.04)",
        ]}
        borderRadius={"15px"}
        display="flex"
        flexDirection={"column"}
        justifyContent="space-around"
        alignItems="center"
        gap={"10px"}>
        <Text
          w={"100%"}
          as="h1"
          fontWeight={600}
          fontFamily={"sans-serif"}
          lineHeight={"2rem"}
          fontSize={"1.25rem"}
          textAlign={"center"}>
          Sign Up
        </Text>
        <Box w={"100%"} p={"0.8rem"} pt={"1.25rem"}>
          <FormControl w={"100%"}>
            <FormLabel
              color={"#626568"}
              lineHeight={"1.55rem"}
              fontSize={"0.88rem"}
              fontWeight={600}>
              Full Name
            </FormLabel>
            <Input
              placeholder="Enter Full Name"
              value={name}
              fontSize={"1rem"}
              padding={"1rem 0.75rem"}
              _focus={{
                borderColor: ["#F3B308", "#F3B308", "#F3B308", "black"],
                boxShadow: [
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px black",
                ], // Apply a black boxShadow for focus
              }}
              _placeholder={{ color: "#d1d5db" }}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl  w={"100%"} mt={"1"}>
            <FormLabel
             color={"#626568"}
             lineHeight={"1.25rem"}
             fontSize={"0.88rem"}
             fontWeight={600}>
              Email Address
            </FormLabel>
            <Input
              placeholder="Enter Email Address"
              value={email}
              fontSize={"1rem"}
              padding={"1rem 0.75rem"}
              _focus={{
                borderColor: ["#F3B308", "#F3B308", "#F3B308", "black"],
                boxShadow: [
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px black",
                ], // Apply a black boxShadow for focus
              }}
              _placeholder={{ color: "#d1d5db" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl w={"100%"} mt={"1"}>
            <FormLabel
              color={"#626568"}
              lineHeight={"1.25rem"}
              fontSize={"0.88rem"}
              fontWeight={600}>
              Phone Number
            </FormLabel>
            <Input
              placeholder="Enter Phone Number"
              value={phoneNumber}
              type="number"
              fontSize={"1rem"}
              padding={"1rem 0.75rem"}
              _focus={{
                borderColor: ["#F3B308", "#F3B308", "#F3B308", "black"],
                boxShadow: [
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px black",
                ], // Apply a black boxShadow for focus
              }}
              _placeholder={{ color: "#d1d5db" }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <br />
          <FormControl w={"100%"} mt={"1"}>
            <FormLabel
              color={"#626568"}
              lineHeight={"1.25rem"}
              fontSize={"0.88rem"}
              fontWeight={600}>
              Referral Code (Optional)
            </FormLabel>
            <Input
              placeholder="Enter Referral Code"
              value={referralCode}
              fontSize={"1rem"}
              padding={"1rem 0.75rem"}
              _focus={{
                borderColor: ["#F3B308", "#F3B308", "#F3B308", "black"],
                boxShadow: [
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px #F3B308",
                  "0 0 0 1px black",
                ], // Apply a black boxShadow for focus
              }}
              _placeholder={{ color: "#d1d5db" }}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </FormControl>
              <br />
          <Text
            color={"#837984"}
            w={"100%"}
            margin={2}
            fontSize={"0.85rem"}
            mt={"2"}>
            By Signing up, I accept the Masai School{" "}
            <Text
              as={"a"}
              textDecoration={"underline"}
              color={"#2563eb"}
              href="https://www.masaischool.com/terms?_gl=1*idwwhi*_gcl_au*MTY2NzcyNjg3NS4xNjkzNDAzMzk4"
              target="_blank">
              Terms Of Service
            </Text>{" "}
            and acknowledge{" "}
            <Text
              as={"a"}
              textDecoration={"underline"}
              color={"#2563eb"}
              href="https://www.masaischool.com/privacy?_gl=1*idwwhi*_gcl_au*MTY2NzcyNjg3NS4xNjkzNDAzMzk4"
              target="_blank">
              Privacy Policy
            </Text>
          </Text>
          <br />

          <Button
            mt={1}
            width="100%"
            fontSize={"1.05rem"}
            isDisabled={!isEnabled}
            letterSpacing={"widest"}
            bgColor={"#2563eb"}
            color={"white"}
            _hover={{
              bgColor: "#2563eb",
              color: "white",
            }}
            isLoading={isLoading}
            onClick={handleSignUp}>
            CONTINUE
          </Button>
          <br/>
          <Text mt={5} textAlign="center" fontSize={"0.9rem"} color={"#798188"}>
            Already have an account?
            <Text
              as={"a"}
              href={"/login"}
              _hover={{
                textDecoration: "none",
              }}
              color={"#2563eb"}
              fontWeight={700}
              cursor={"pointer"}>
              {" "}
              Sign In
            </Text>
          </Text>
        </Box>

        <Checkbox
          color={"#798188"}
          colorScheme="blue"
          textAlign="center"
          borderColor="grey"
          defaultChecked={true}
          display={"flex"}
          alignItems={"center"}>
          I would like to receive
          <Text
            as={"span"}
            color={"#2563eb"}
            cursor={"pointer"}
            fontWeight={600}>
            {" "}
            Email{" "}
          </Text>
          and
          <Text
            as={"span"}
            color={"#2563eb"}
            cursor={"pointer"}
            fontStyle={"0.7rem"}
            fontWeight={600}>
            {" "}
            Whatsapp{" "}
          </Text>
          updates.
        </Checkbox>
      </Box>
      <Text
        w={"100%"}
        display={["none", "none", "block", "block"]}
        bottom="0"
        m={"auto"}
        color={"#9ca9b7"}
        fontSize={"1.05rem"}
        fontWeight={400}
        mt={2}
        textAlign={"center"}>
        © 2023 by Masai School Privacy Policy & Terms and Conditions
      </Text>
    </Box>
  );
};

export default SignUp;
