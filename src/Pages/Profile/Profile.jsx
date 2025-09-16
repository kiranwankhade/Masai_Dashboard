import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";

const Profile = () => {
  const { users, isAuth, isLoading, isError, token } = useSelector(
    (state) => state.authReducer
  );
  const [file, setFile] = useState();
// console.log(users)

  function handleChange(e) {
    console.log(e.target.files !== null ? e.target.files : null);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Box m={6} mt={0} mb={'20'}>
      <Text textAlign={"start"} fontSize={"3xl"} fontWeight={"bold"}>
        My Profile
      </Text>
      <Flex alignItems={"center"} gap={"4"} mt={"4"}>
        <Avatar size={"xl"} name="Debobrota Haldar" src={file}>
          <Input
            type="file"
            height="100%"
            width="100%"
            borderRadius={"full"}
            position="absolute"
            top="0"
            left="0"
            opacity="0"
            onChange={handleChange}
            aria-hidden="true"
            accept="image/*"
            border={"solid"}></Input>
          <Avatar
            position={"absolute"}
            right={"0"}
            bottom={"0"}
            boxSize="1.6em"
            bg={"white"}
            icon={<FiEdit2 fontSize="1.3rem" color={"#5a8aef"} />}
          />
        </Avatar>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {users.name}
        </Text>
      </Flex>
      <Grid
        mt={"8"}
        gap={"6"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        textAlign={"start"}>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"2rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Text fontWeight={"bold"}>Name</Text>
          <Text> {users.name}</Text>
        </Card>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"2rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Text fontWeight={"bold"}>Date of Birth</Text>
          <Text> {users.dob? users.dob : `XXXX-XX-XX`}</Text>
        </Card>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"2rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Text fontWeight={"bold"}>Mobile Number</Text>
          <Text>{users.phoneNumber}</Text>
        </Card>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"2rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Text fontWeight={"bold"}>Email Address</Text>
          <Text>{users.email}</Text>
        </Card>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"2rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontWeight={"bold"}>Referral Code</Text>
              <Text>XXXX-XX-XX</Text>
            </Box>

            <Button
              size={"xs"}
              w={"28"}
              rounded={"md"}
              p={4}
              bg={"bg_1"}
              color={"white"}
              _hover={{ bg: "#3182ce" }}>
              Refer now
            </Button>
          </Flex>
        </Card>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"1.8rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontWeight={"bold"}>Month and Year of Graduation</Text>
              <Text>{users.graduationDate || 'NA / XXXX'}</Text>
            </Box>
            <Button size={"xs"} p={4} bg={"transparent"}>
              EDIT
            </Button>
          </Flex>
        </Card>
        <Card
          shadow={"xs"}
          bg={"white"}
          lineHeight={"1.8rem"}
          rounded={"lg"}
          p={2}
          pl={4}
          pr={4}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontWeight={"bold"}>Are you currently Working?</Text>
              <Text>NA</Text>
            </Box>
            <Button size={"xs"} p={4} bg={"transparent"}>
              EDIT
            </Button>
          </Flex>
        </Card>
      </Grid>
    </Box>
  );
};

export default Profile;
