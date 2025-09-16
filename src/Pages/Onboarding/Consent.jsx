import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  acceptanceAction,
  applyScholarshipAction,
  healthStateAction,
} from "../../Stores/OnboardingReducer/actions";

const Consent = ({ currentStep, onValidationChange }) => {
  const [acceptanceBox, setAcceptanceBox] = useState(true);
  const [healthStateBox, setHealthStateBox] = useState(true);
  const [applyScholarshipBox, setApplyScholarshipBox] = useState(true);

  const dispatch = useDispatch();

  const checkValidation = () => {
    if (acceptanceBox && healthStateBox && applyScholarshipBox) {
      onValidationChange(true);
      console.log("consent Checked", {
        acceptanceBox,
        healthStateBox,
        applyScholarshipBox,
      }); // Inform the parent component that the form is valid

      dispatch(acceptanceAction(acceptanceBox));
      dispatch(healthStateAction(healthStateBox));
      dispatch(applyScholarshipAction(applyScholarshipBox));
    } else {
      onValidationChange(false); // Inform the parent component that the form is invalid
    }
  };

  useEffect(() => {
    checkValidation();
  }, [acceptanceBox, healthStateBox, applyScholarshipBox]);

  return (
    <Box p={3} mt={5}>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"flex-start"}
        gap={"1rem"}
      >
        <Checkbox
          fontSize="2.5rem"
          colorScheme="blue"
          isChecked={acceptanceBox}
          onChange={(e) => setAcceptanceBox(e.target.checked)}
          alignItems="flex-start"
        >
          <Text mt={"-0.3rem"}>
            I hereby agree and undertake that I have read and understood the
            terms and conditions as stated in the ISA, Masai CoC, and MBP which
            can be accessed below and reaffirm my acceptance.
          </Text>

          <Box
            display={"flex"}
            color={"#3182ce"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={["0.5rem", "0.5rem", "1rem", "2rem"]}
            mt={1}
            flexWrap={"wrap"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <CgFileDocument /> View the agreement and related documents.
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <AiOutlinePlaySquare /> View a short video on ISA.
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <MdOutlineChecklistRtl /> View Mandatory Conditions.
            </Box>
          </Box>
        </Checkbox>

        <Checkbox
          fontSize="2.5rem"
          colorScheme="blue"
          isChecked={healthStateBox}
          onChange={(e) => setHealthStateBox(e.target.checked)}
          alignItems="flex-start"
        >
          <Text mt={"-0.3rem"}>
            {" "}
            I acknowledge that Masai is an intensive practice based learning
            experience and I am mentally and physically of sound state to
            complete the course.
          </Text>
        </Checkbox>

        <Checkbox
          fontSize="2.5rem"
          colorScheme="blue"
          isChecked={applyScholarshipBox}
          onChange={(e) => setApplyScholarshipBox(e.target.checked)}
          alignItems="flex-start"
        >
          <Text mt={"-0.3rem"}>Apply for scholarship</Text>

          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"0.5rem"}
            color={"#3182ce"}
          >
            <CgFileDocument /> View Scholarship Details
          </Box>
        </Checkbox>
      </Flex>
    </Box>
  );
};

export default Consent;
