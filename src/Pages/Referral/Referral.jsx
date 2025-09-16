import {
  Box,
  TabIndicator,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Image,
  Flex,
  Button,
  Grid,
  Heading,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Modal,
  ModalOverlay,
  Link,
} from "@chakra-ui/react";
import React from "react";
import headerSvg from "../../Assets/referalHeader.svg";
import confetti from "../../Assets/Confetti.svg";
import { MdPersonOutline } from "react-icons/md";
import { FaTelegram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Referral = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const rewards = [
    {
      id: 1,
      name: "Amazon Voucher",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/amazon_img_4b1d1ba11e.png",
      coins: 100,
    },
    {
      id: 2,
      name: "Masai T shirt",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/shirt_img_897bc850e4.png",
      coins: 500,
    },
    {
      id: 3,
      name: "Smartwatch",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/watch_img_6b2b451f3a.png",
      coins: 1500,
    },
    {
      id: 4,
      name: "Netflix Subscription",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/netflix_img_55743951b3.png",
      coins: 2400,
    },
    {
      id: 5,
      name: "Amazon Firestick",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/firestick_img_9af9a51f6a.png",
      coins: 3000,
    },
    {
      id: 6,
      name: "Amazon Echo",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/echo_img_4767e9cea6.png",
      coins: 3000,
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/keyboard_img_698470b002.png",
      coins: 4000,
    },
  ];

  const leaderBoard = [
    {
      id: 1,
      name: "R H",
      coins: 4600,
    },
    {
      id: 2,
      name: "GANESH BAHIRE",
      coins: 1100,
    },
    {
      id: 3,
      name: "Shaswat Singh Raghuvansi",
      coins: 600,
    },
    {
      id: 4,
      name: "Ayaz Khan",
      coins: 600,
    },
    {
      id: 5,
      name: "rahul kumar",
      coins: 600,
    },
    {
      id: 6,
      name: "Shahbaz Ahmad",
      coins: 600,
    },
    {
      id: 7,
      name: "Shrutee Dhuware",
      coins: 600,
    },
    {
      id: 8,
      name: "Shraddha Subhash gawde",
      coins: 600,
    },
    {
      id: 9,
      name: "Mohd Asim",
      coins: 600,
    },
    {
      id: 10,
      name: "Chandan Pandey",
      coins: 600,
    },
    {
      id: 11,
      name: "ROHAN SINGH",
      coins: 600,
    },
    {
      id: 12,
      name: "B Rajanikanta Patra",
      coins: 600,
    },
    {
      id: 13,
      name: "Theja Swaroop",
      coins: 600,
    },
    {
      id: 14,
      name: "Dharani Raj",
      coins: 600,
    },
    {
      id: 15,
      name: "Khadim Khan",
      coins: 600,
    },
    {
      id: 16,
      name: "Lucky Jaiswal",
      coins: 600,
    },
    {
      id: 17,
      name: "Vishnuraj K R",
      coins: 600,
    },
    {
      id: 18,
      name: "Ishupriya Rath",
      coins: 600,
    },
    {
      id: 19,
      name: "KANIKA KAMRA",
      coins: 600,
    },
    {
      id: 20,
      name: "Manish Lingam",
      coins: 600,
    },
    {
      id: 21,
      name: "chandan",
      coins: 600,
    },
    {
      id: 22,
      name: "nishant bhargava",
      coins: 600,
    },
    {
      id: 23,
      name: "Md Kaish Ansari",
      coins: 600,
    },
    {
      id: 24,
      name: "Tarique Anwar",
      coins: 600,
    },
    {
      id: 25,
      name: "Ankit Rana",
      coins: 600,
    },
    {
      id: 26,
      name: "Sidhant Balasaheb Shinde",
      coins: 600,
    },
    {
      id: 27,
      name: "VIKASH KUMAR",
      coins: 600,
    },
    {
      id: 28,
      name: "Anuska jha",
      coins: 600,
    },
    {
      id: 29,
      name: "KJ",
      coins: 600,
    },
    {
      id: 30,
      name: "Anand Raj Singh",
      coins: 600,
    },
    {
      id: 31,
      name: "Shubham Chaubey",
      coins: 600,
    },
    {
      id: 32,
      name: "Sejal Khushal Sute",
      coins: 600,
    },
    {
      id: 33,
      name: "Abhishek",
      coins: 600,
    },
    {
      id: 34,
      name: "Vedant Dinkarrao Pawar",
      coins: 600,
    },
    {
      id: 35,
      name: "Gundagala Sarath Kumar",
      coins: 600,
    },
    {
      id: 36,
      name: "Praveen Chaudhary",
      coins: 600,
    },
    {
      id: 37,
      name: "Harshit Gupta",
      coins: 600,
    },
    {
      id: 38,
      name: "Raman Bhardwaj",
      coins: 600,
    },
    {
      id: 39,
      name: "sakshi bidalia",
      coins: 600,
    },
    {
      id: 40,
      name: "Kamisetty Sree Harsha",
      coins: 600,
    },
    {
      id: 41,
      name: "Parash Sharma",
      coins: 600,
    },
    {
      id: 42,
      name: "Jishnu Raj",
      coins: 600,
    },
    {
      id: 43,
      name: "Nikhil Mohale",
      coins: 600,
    },
    {
      id: 44,
      name: "Sakshi Satish Malviya",
      coins: 600,
    },
    {
      id: 45,
      name: "Abhishek Gautam",
      coins: 600,
    },
    {
      id: 46,
      name: "Mahendra Chandravanshi",
      coins: 600,
    },
    {
      id: 47,
      name: "Anurag Pawar",
      coins: 600,
    },
    {
      id: 48,
      name: "Sakshi Gajanan Pedhekar",
      coins: 600,
    },
    {
      id: 49,
      name: "Vaibhav shivaji more",
      coins: 600,
    },
    {
      id: 50,
      name: "Komal Tiwari",
      coins: 600,
    },
  ];

  const iconColors = [
    "#5D8DE9",
    "#46B8BC",
    "#6FCD9E",
    "#CC926E",
    "#6E71CC",
    "#1A9FBD",
  ];

  return (
    <Box>
      <Tabs>
        <TabList gap={"8"}>
          <Tab fontWeight={"800"}>Invite</Tab>
          <Tab fontWeight={"800"}>Rewards</Tab>
          <Tab fontWeight={"800"}>Referrals</Tab>
        </TabList>
        <TabIndicator
          mt={"-1.5px"}
          height={"2px"}
          bg={"#3470E4"}
          borderRadius={"1px"}
        />
        <TabPanels>
          <TabPanel padding={"24px"}>
            <Box
              bg={"white"}
              width={"100%"}
              borderRadius={"5px"}
              padding="20px"
            >
              <Box>
                <Text
                  color={"#6E71CC"}
                  fontWeight={"800"}
                  fontFamily={"poppins"}
                  textAlign={"left"}
                >
                  Refer Friends and earn rewards while they start their journey
                  at Masai!
                </Text>
              </Box>
              <Flex flexDirection={"column"} gap={"12px"}>
                <Box>
                  <Flex>
                    <Image
                      src={
                        "https://dashboard.masaischool.com/img/referral/coin_banner_1.svg"
                      }
                      paddingRight={"12px"}
                    />
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"left"}
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        Your friend successfully clears the MSAT.
                      </Text>
                      <Flex
                        bg={"#F7F7FF"}
                        padding={"3px"}
                        width={"fit-content"}
                        borderRadius={"8px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Text
                          color={"#6E71CC"}
                          fontSize={"sm"}
                          fontWeight={"800"}
                        >
                          You both get 100 coins
                        </Text>
                        <Image
                          src={
                            "https://dashboard.masaischool.com/static/media/coin.48adfe47.svg"
                          }
                          boxSize={"18px"}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <Image
                      src={
                        "https://dashboard.masaischool.com/img/referral/coin_banner_2.svg"
                      }
                      paddingRight={"12px"}
                    />
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"left"}
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        Your friend successfully completes the Onboarding
                        Process.
                      </Text>
                      <Flex
                        bg={"#F7F7FF"}
                        padding={"3px"}
                        width={"fit-content"}
                        borderRadius={"8px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Text
                          color={"#6E71CC"}
                          fontSize={"sm"}
                          fontWeight={"800"}
                        >
                          You both get 100 coins
                        </Text>
                        <Image
                          src={
                            "https://dashboard.masaischool.com/static/media/coin.48adfe47.svg"
                          }
                          boxSize={"18px"}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <Image
                      src={
                        "https://dashboard.masaischool.com/img/referral/coin_banner_3.svg"
                      }
                      paddingRight={"12px"}
                    />
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"left"}
                    >
                      <Text fontSize={"16px"} fontWeight={"600"}>
                        Your friend starts their classes and completes their 1st
                        week.
                      </Text>
                      <Flex
                        bg={"#F7F7FF"}
                        padding={"3px"}
                        width={"fit-content"}
                        borderRadius={"8px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Text
                          color={"#6E71CC"}
                          fontSize={"sm"}
                          fontWeight={"800"}
                        >
                          You both get 100 coins
                        </Text>
                        <Image
                          src={
                            "https://dashboard.masaischool.com/static/media/coin.48adfe47.svg"
                          }
                          boxSize={"18px"}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
                <Box
                  width={"300px"}
                  bg={"#FFE180"}
                  margin={"auto"}
                  position={"relative"}
                  top={"10"}
                  zIndex={"1"}
                  p={"2"}
                  borderRadius={"10"}
                  fontWeight={"800"}
                >
                  InkaTSx
                  <Button
                    bg={"#3470E4"}
                    fontSize={"sm"}
                    color={"white"}
                    h={"28px"}
                    ml={"2"}
                    _hover={{ bg: "btn_hover" }}
                    onClick={onOpen}
                  >
                    COPY CODE
                  </Button>
                </Box>
              </Flex>
            </Box>
            <Box margin={"auto"} mt={"50px"} width={"280px"}>
              <Text fontWeight={"800"} m={"5"}>
                Or invite via
              </Text>
              <Flex justifyContent={"space-between"}>
                <Link
                  href="https://api.whatsapp.com/send/?text=https%3A%2F%2Fwww.masai.school%2Freferral%2FlnkaTSx&type=custom_url&app_absent=0"
                  isExternal
                >
                  <Button bg={"#22C47B"} color={"white"}>
                    Whatsapp
                    <FaWhatsapp />
                  </Button>
                </Link>
                <Link
                  href="https://t.me/share/url?url=https%3A%2F%2Fwww.masai.school%2Freferral%2FlnkaTSx"
                  isExternal
                >
                  <Button bg={"white"} variant={"outline"}>
                    <FaTelegram color={"#40B3E0"} size={"32"} />
                  </Button>
                </Link>
                <Link
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.masai.school%252Freferral%252FlnkaTSx&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                  isExternal
                >
                  <Button bg={"white"} variant={"outline"}>
                    <FaFacebook color={"#1877F2"} size={"32"} />
                  </Button>
                </Link>
              </Flex>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex
              alignItems={"flex-start"}
              alignContent={"flex-start"}
              gap={"18px"}
              flexWrap={"wrap"}
            >
              {rewards.map((reward) => (
                <Box
                  width={"170px"}
                  padding={"10px"}
                  bg={"white"}
                  borderRadius={"15px"}
                >
                  <Image margin={"auto"} boxSize={"120px"} src={reward.image} />
                  <Text fontSize={"14px"} fontWeight={"800"}>
                    {reward.name}
                  </Text>
                  <Button
                    bg={"#3470E4"}
                    fontSize={"sm"}
                    color={"white"}
                    h={"28px"}
                    _hover={{ bg: "btn_hover" }}
                    isDisabled
                  >
                    {`CLAIM FOR ${reward.coins}`}
                    <Image
                      src={
                        "https://dashboard.masaischool.com/static/media/coin.48adfe47.svg"
                      }
                      boxSize={"18px"}
                    />
                  </Button>
                </Box>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Box>
              <Box>
                <Image src={headerSvg} />
              </Box>
              <Box>
                <Box bg={"#F2FDFF"} width={"100%"}>
                  <Heading color={"#3470E4"}>Current Leaderboard</Heading>
                </Box>
                <Grid
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap={"5"}
                  bg={"white"}
                  p={"10"}
                >
                  {leaderBoard.map((el, index) => (
                    <Flex justifyContent={"space-between"} key={el.id}>
                      <Box
                        borderRadius={"5"}
                        bg={iconColors[index % iconColors.length]}
                      >
                        <MdPersonOutline size={"32"} color="white" />
                      </Box>
                      <Text>{el.name}</Text>
                      <Flex>
                        <Text>+</Text>
                        {el.coins} coins
                      </Flex>
                    </Flex>
                  ))}
                </Grid>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Flex
                mt={"10"}
                w={"20"}
                h={"20"}
                bg={"#CFEEDF"}
                borderRadius={"50%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image margin={"auto"} src={confetti} />
              </Flex>
              <Heading size={"md"}>Code Copied Successfully!</Heading>
              <Box margin={"auto"} width={"280px"}>
                <Text fontWeight={"700"} m={"5"}>
                  Or invite via
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Link
                    href="https://api.whatsapp.com/send/?text=https%3A%2F%2Fwww.masai.school%2Freferral%2FlnkaTSx&type=custom_url&app_absent=0"
                    isExternal
                  >
                    <Button bg={"#22C47B"} color={"white"}>
                      Whatsapp
                      <FaWhatsapp />
                    </Button>
                  </Link>
                  <Link
                    href="https://t.me/share/url?url=https%3A%2F%2Fwww.masai.school%2Freferral%2FlnkaTSx"
                    isExternal
                  >
                    <Button bg={"white"} variant={"outline"}>
                      <FaTelegram color={"#40B3E0"} size={"32"} />
                    </Button>
                  </Link>
                  <Link
                    href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.masai.school%252Freferral%252FlnkaTSx&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                    isExternal
                  >
                    <Button bg={"white"} variant={"outline"}>
                      <FaFacebook color={"#1877F2"} size={"32"} />
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Referral;
