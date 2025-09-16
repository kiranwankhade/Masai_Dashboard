import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { setDobAction, setWorkingAction, setYearAction } from "../../Stores/OnboardingReducer/actions";

const FormData = ({ currentStep, onValidationChange }) => {

  const dispatch = useDispatch();
  
  const [dob, setDob] = useState();
  const [year, setYear] = useState();
  const [working, setWorking] = useState("No");

  const formData = {
    dob,
    year,
    working,
  };

  // console.log("formData:", formData);

  function getMonthYearOptions() {
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    const years = Array.from({ length: 10 }, (_, i) => 2015 + i);

    const options = [];
    years.forEach((year) => {
      months.forEach((month) => {
        options.push({
          label: `${month}/${year}`,
          value: `${month}/${year}`,
        });
      });
    });

    return options;
  }

  const checkValidation = () => {
    if (dob && year && (working === "Yes" || working === "No")) {
      onValidationChange(true); // Inform the parent component that the form is valid

      dispatch(setDobAction(dob));
      dispatch(setYearAction(year));
      dispatch(setWorkingAction(working));
    } else {
      onValidationChange(false); // Inform the parent component that the form is invalid
    }
  };

  useEffect(() => {
    checkValidation();
  }, [dob, year, working]);

  return (
    <Box p={3} mt={5}>
      <Flex
        w={"100%"}
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Box w={"100%"}>
          <FormControl isRequired>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              w={"100%"}
              bg={"white"}
              type="date"
              boxSizing="border-box"
              onChange={(e) => setDob(e.target.value)}
            />
          </FormControl>
        </Box>

        <Box w={"100%"}>
          <FormControl isRequired>
            <FormLabel>Select Your Graduation & year </FormLabel>
            {/* <Select
              onChange={(e) => setYear(e.target.value)}
              bg={"white"}
              placeholder="MM/YYYY"
            >
              {getMonthYearOptions().map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select> */}
             <Input
              w={"100%"}
              bg={"white"}
              type="month"
              boxSizing="border-box"
              onChange={(e) => setYear(e.target.value)}
            />
          </FormControl>
        </Box>
      </Flex>
      <br />
      <Box p={2}>
        <FormControl isRequired>
          <FormLabel>Are you currently working?</FormLabel>
          <RadioGroup onChange={(value) => setWorking(value)} defaultValue="No">
            <Stack
              direction={["column", "column", "row", "row"]}
              spacing={["1rem", "1rem", "6.25rem", "6.25rem"]}
            >
              <Radio value="Yes">Yes, I’m currently working</Radio>
              <Radio value="No">No, I’m currently not working</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default FormData;
