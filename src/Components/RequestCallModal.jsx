import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqCallbackAction } from "../Stores/appReducer/action";

export default function RequestCallModal({ onCloseModal, isOpenModal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userFormData, setUserFormData] = useState({});
  const [isWorking, setIsWorking] = useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.appReducer);
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
const toast= useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const graduationMonth = userFormData.graduationDate.split("-")[1];
    const graduationYear = userFormData.graduationDate.split("-")[0];
    let newData = {
      ...userFormData,
      userId: user._id,
      graduationMonth: graduationMonth,
      graduationYear: graduationYear,
      isCurrentlyWorking: isWorking,
    };
    const userData = {
      userId: user._id,
      dateOfBirth: newData.dateOfBirth,
      graduationMonth: newData.graduationMonth,
      graduationYear: newData.graduationYear,
      isCurrentlyWorking: newData.isCurrentlyWorking,
    };
    dispatch(reqCallbackAction(userData, token, toast));
  };
  const handleRadio = (e) => {
    setIsWorking(e);
  };

  const handleChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Flex
        border={{ base: "none", md: "solid" }}
        borderColor="border_2"
        borderRadius={"xl"}
        fontSize={"14px"}
        paddingRight={{ base: "0", md: "2" }}
        fontWeight={"bold"}
        cursor={"pointer"}
        _hover={{ bg: "blue.100" }}
        onClick={onOpen}>
        <Image
          height={"5"}
          src="https://dashboard.masaischool.com/static/media/phone-outline.39ea47af.svg"
          alt="refer and earn"></Image>
        <Text
          paddingLeft={{ base: "0", md: "2" }}
          display={{ base: "none", md: "flex" }}>
          Request a Callback
        </Text>
      </Flex>
      <Modal onClose={onClose} size={"lg"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"medium"} textAlign={"center"}>
            Book a Free Counselling Session with our Team.
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormLabel mt={"2"} fontSize={"sm"}>
                1. Enter your date of birth *
              </FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                onChange={handleChange}
                name="dateOfBirth"
              />

              <FormLabel mt={"6"} fontSize={"sm"}>
                2. Select your graduation month & year *
              </FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="month"
                onChange={handleChange}
                name="graduationDate"
              />
              <FormLabel mt={"6"} fontSize={"sm"}>
                3. Are you currently Working? *
              </FormLabel>
              <RadioGroup
                defaultValue="false"
                onChange={handleRadio}
                name="isCurrentlyWorking">
                <Flex
                  justifyContent={"space-around"}
                  spacing={4}
                  direction="row">
                  <Radio value="true">Yes, I'm currently working</Radio>
                  <Radio value="false">No, I'm currently not working</Radio>
                </Flex>
              </RadioGroup>
              <Flex>
                <Button
                  m={"auto"}
                  mt={"4"}
                  w={"100%"}
                  colorScheme="blue"
                  letterSpacing={"widest"}
                  type="submit">
                  SUBMIT
                </Button>
              </Flex>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
