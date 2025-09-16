"use client";
import React, { useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Link,
  Tag,
  Button,
  Stack,
  Divider,
  Collapse,
  Grid,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from "@chakra-ui/react";
import { FiHome, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdDoneOutline, MdOutlineVideoLibrary } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

import { BiLaptop, BiBookAlt } from "react-icons/bi";
import { PiSignOutBold, PiCertificateBold } from "react-icons/pi";
import { LuMonitorPlay } from "react-icons/lu";
import { NavLink, useMatches, useNavigate, useParams } from "react-router-dom";
import RequestCallModal from "./RequestCallModal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, userLogoutAction } from "../Stores/authReducer/authAction";
import NotificationPanel from "./NotificationPanel";

const LinkItems = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "Courses", href: "/courses", icon: BiBookAlt },
  { name: "Self Learning", href: "/learn", icon: LuMonitorPlay },
  {
    name: "Events",
    href: "/events",
    icon: BiLaptop,
    tags: "New",
  },
];

const SidebarContent = ({ onClose, togglemenu, settogglemenu, ...rest }) => {
  return (
    <Box
      transition="1s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: 60, md: togglemenu ? "56" : "16" }}
      pos="fixed"
      top={14}
      h="full"
      zIndex={"10"}
      {...rest}>
      <Flex
        h={10}
        w={10}
        alignItems="center"
        mx="6"
        justifyContent="space-between">
        <FiMenu
          size="22"
          fontWeight="bold"
          cursor={"pointer"}
          onClick={() => settogglemenu(!togglemenu)}
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            fontWeight={"semibold"}
            whiteSpace="nowrap"
            to={link.href}
            _activeLink={{
              color: "bg_1",
              bg: "bg_primary",
              borderLeft: "4px solid",
              borderColor: "bg_1",
              pl: "3",
            }}
            tags={link.tags}
            togglemenu={togglemenu}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  to,
  tags,
  _activeLink,
  togglemenu,
  ...rest
}) => {
  return (
    <Flex
      _activeLink={_activeLink}
      as={NavLink}
      to={to}
      textDecoration={"none"}
      _focus={{ boxShadow: "none" }}
      align="center"
      p="4"
      w={"full"}
      role="group"
      cursor="pointer"
      _hover={{
        textDecoration: "none",
        bg: "bg_primary",
      }}
      {...rest}>
      <Collapse startingHeight={22} animateOpacity in={togglemenu}>
        <Flex>
          <Flex ml={"2"} whiteSpace={"nowrap"}>
            {icon && <Icon mr="3" fontSize="22" as={icon} />}
            <Text zIndex={"1"}>{children}</Text>
          </Flex>
          {tags && (
            <Tag
              ml={"3"}
              size={"sm"}
              bg={"tags_bg"}
              color={"tags_color"}
              borderRadius={"full"}>
              {tags}
            </Tag>
          )}
        </Flex>
      </Collapse>
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { users } = useSelector((state) => state.authReducer);
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const signOutState = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutState.onOpen();
  };
  const handleConfirmSignOut = () => {
    dispatch(userLogoutAction());
    navigate("/login");
    localStorage.clear();
    toast({
      position: "bottom",
      render: () => (
        <Flex alignItems={"center"} gap={"4"} color="white" p={3} bg="#38a169">
          <MdDoneOutline border={"solid"} />
          <Box>
            <Text fontSize={"xl"}>Logout</Text>
            <Text>Logout Successfully!</Text>
          </Box>
        </Flex>
      ),
    });
  };
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      boxShadow="md"
      height="56px"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      position={"fixed"}
      w={"full"}
      left={0}
      top={"0"}
      zIndex={"100"}
      {...rest}>
      <Flex gap={{ base: "2", md: "0" }}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Link href={"/"}>
          <Image
            draggable={false}
            src="https://dashboard.masaischool.com/static/media/masailogo.ab93bfe1.svg"
            alt="masai school"></Image>
        </Link>
      </Flex>
      <HStack spacing={{ base: "0", md: "4" }} gap={{ base: "6", md: "4" }}>
        <Flex
          border={"solid"}
          borderColor={"border_1"}
          borderRadius={"xl"}
          fontSize={"14px"}
          paddingRight={"2"}
          fontWeight={"bold"}
          cursor={"pointer"}
          _hover={{ bg: "orange.100", textDecoration: "none" }}
          as={Link}
          href={"/referral-program"}
          display={{ base: "none", md: "flex" }}>
          <Image
            height={"5"}
            src="https://dashboard.masaischool.com/static/media/coin.48adfe47.svg"
            alt="refer and earn"></Image>
          <Text paddingLeft={"2"}>Refer and Earn</Text>
        </Flex>

        <RequestCallModal />
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <NotificationPanel />

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}>
              <HStack>
                <Avatar size={"sm"} name={users.name} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{users.name}</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color={"blue"} />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}>
              <MenuItem
                py={1}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
                as={Link}
                href={"/profile"}>
                <FaRegUser />
                <Text ml={2}>My Profile</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                py={1}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
                as={Link}
                href={"/learn/my-tutorials"}>
                <MdOutlineVideoLibrary />
                <Text ml={2}> My Tutorials</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                py={1}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
                as={Link}
                href={"/learn/bookmarks"}>
                <BsBookmark />
                <Text ml={2}> My Bookmarks</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                py={1}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
                as={Link}
                href={"/learn/my-certificates"}>
                <PiCertificateBold />
                <Text ml={2}> My Certificates</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                py={1}
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
                as={Link}
                onClick={handleSignOut}>
                <PiSignOutBold />
                <Text ml={2}>Sign out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={signOutState.onClose}
        isOpen={signOutState.isOpen}
        size={"sm"}
        isCentered>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader w={"80%"}>
            Are you sure you want to Sign out ?
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={signOutState.onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleConfirmSignOut}>
              Sign out
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  );
};

const SidebarMobile = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={"white"}
      w={{ base: "90%" }}
      pos="fixed"
      h="full"
      m={"4"}
      {...rest}>
      <Flex alignItems={"center"}>
        {" "}
        <CloseButton position={"absolute"} right={"0"} onClick={onClose} />
        <Image
          src="https://dashboard.masaischool.com/static/media/masailogo.ab93bfe1.svg"
          alt="masai school"></Image>
      </Flex>
      <Flex>
        <Text>Get your queries resolved now by talking to our Alumni’s</Text>
        <Tag m={"2"} pr={'6'} bg={"tags_bg"} color={"tags_color"}>
          New
        </Tag>
      </Flex>

      <Box
        zIndex={"-100"}
        position={"relative"}
        mt={"4"}
        bg={"bg_2"}
        color={"white"}
        p={2}
        rounded={"lg"}>
        <Text zIndex={"10"}>
          100+ others have reached out to our Alumni for their experiebce of
          Masai. Your success is just a chat away!
        </Text>
        <Image
          position={"absolute"}
          top={0}
          right={"0"}
          zIndex={"-1"}
          src="https://dashboard.masaischool.com/img/sidebar-student-1.svg"
          alt="alumni"
        />
        <Image
          position={"absolute"}
          bottom={0}
          right={"0"}
          zIndex={"-1"}
          src="https://dashboard.masaischool.com/img/sidebar-student-2.svg"
          alt="alumni"
        />
      </Box>
      <Button
        w={"100%"}
        letterSpacing={"widest"}
        size={"md"}
        mt={"4"}
        bg={"bg_1"}
        color={"white"}
        as={"a"}
        href="/alumni">
        CONNECT WITH OUR ALUMINI
      </Button>
      <Stack mt={"4"}>
        <Text fontWeight={"semibold"}>
          Refer and earn amazing gifts{" "}
          <Tag ml={"2"} bg={"tags_bg"} color={"tags_color"}>
            New
          </Tag>{" "}
        </Text>
        <Divider />
        <Text fontWeight={"semibold"}>
          Join our telegram community{" "}
          <Tag ml={"2"} bg={"tags_bg"} color={"tags_color"}>
            New
          </Tag>{" "}
        </Text>
        <Divider />
      </Stack>
    </Box>
  );
};

const NavItemMobile = ({
  icon,
  children,
  to,
  tags,
  _activeLink,
  togglemenu,
  ...rest
}) => {
  return (
    <Grid
      _activeLink={_activeLink}
      as={NavLink}
      to={to}
      textDecoration={"none"}
      _focus={{ boxShadow: "none" }}
      align="center"
      p="4"
      w={"90%"}
      role="group"
      cursor="pointer"
      _hover={{
        textDecoration: "none",
        color: "bg_1",
      }}
      {...rest}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Flex
          flexDirection={"column"}
          whiteSpace={"nowrap"}
          justifyContent={"center"}
          alignItems={"center"}
          flexShrink={0}>
          {icon && <Icon fontSize="20" as={icon} />}
          <Text zIndex={"1"} fontSize={"14"}>
            {children}
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
};

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [togglemenu, settogglemenu] = useState(true);
  let matches = useMatches();

  let crumbs = matches.map((match) => {
    return (
      match.pathname === "/profile" ||
      match.pathname === `/courses/${match.params.id}/details` ||
      match.pathname === "/learn/bookmarks" ||
      match.pathname === "/learn/my-tutorials" ||
      match.pathname === "/learn/my-certificates" ||
      match.pathname === "/alumni" ||
      match.pathname === `/events/${match.params.id}/details` ||
      match.pathname === `/events/${match.params.id}` ||
      match.pathname === "/onboarding"
    );
  });

  const navFlags = crumbs.some((el) => el);

  return (
    <Box
      minH="100vh"
      pr={{
        base: 0,
        md: navFlags ? 0 : 60,
      }}
      bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        settogglemenu={settogglemenu}
        togglemenu={togglemenu}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent >
          <SidebarMobile onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box
        display={{ base: "flex", md: "none" }}
        bg={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        flexShrink={0}
        w={"100%"}
        position={"absolute"}
        bottom={"-2"}>
        {LinkItems.map((link) => (
          <NavItemMobile
            key={link.name}
            icon={link.icon}
            fontWeight={"semibold"}
            bg={"white"}
            bottom={"0"}
            zIndex={"10"}
            whiteSpace="nowrap"
            to={link.href}
            _activeLink={{
              color: "bg_1",
            }}
            tags={link.tags}
            togglemenu={togglemenu}>
            {link.name}
          </NavItemMobile>
        ))}
      </Box>
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: togglemenu ? "56" : "4.1rem" }}
        p={2}
        transition={"1s ease"}
        paddingTop={"70px"}
        h={"100vh"}
        overflow={"auto"}
        msoverflowstyle="none"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        {/* added marquee */}
        <>{navFlags && children[1] !== null ? children : children}</>
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
