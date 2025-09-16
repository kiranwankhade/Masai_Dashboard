import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getEventRegister } from "../../Stores/ErReducer/erAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postEventsRegistered } from "../../Stores/appReducer/action";

function EventCard({ date, id, status, text, onclick, time }) {
  const navigate = useNavigate();
  const [eventReg, setEventReg] = useState(false);
  const [message, setMessage] = useState("Click to register here");
  const dispatch = useDispatch();

  const currentDate = new Date();
  const inputDateString = date.toString();
  const dateParts = inputDateString.split(/[\/, :]/);
  const year = parseInt(dateParts[2]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[0]);
  const hour = dateParts[3].toLowerCase().includes("pm")
    ? parseInt(dateParts[4]) + 12
    : parseInt(dateParts[4]);
  const minute = parseInt(dateParts[5]);
  const second = parseInt(dateParts[6]);
  const parsedDate = new Date(year, month, day, hour, minute, second);
  const isoCurrentDate = currentDate.toISOString();
  const isoParsedDate = parsedDate.toISOString();
  const isUpcoming = isoCurrentDate < isoParsedDate;
  const { users, isAuth, isLoading, isError, token } = useSelector(
    (state) => state.authReducer
  );
  const getdispatch = useDispatch();
  const { event } = useSelector((state) => state.geterReducer);

  const registrationStatus = event.map((el) => el?.eventId?._id).join("");
  useEffect(() => {
    getdispatch(getEventRegister(token));
  }, []);

  const isRegistered = registrationStatus === id;

  useEffect(() => {
    if (!isRegistered && isUpcoming) {
      setMessage("Click to register here");
    } else if (!isRegistered && !isUpcoming) {
      setMessage("Watch recording");
    } else if (isRegistered && isUpcoming) {
      setMessage("View details");
    } else if (isRegistered && !isUpcoming) {
      setMessage("Watch recording");
    } else if (
      isRegistered &&
      isUpcoming &&
      setMessage === "Click to register here"
    ) {
      setMessage("View details");
    }
  }, []);

  const handleWatchRecording = (id) => {
    navigate(`/events/${id}/details`);
  };
  const handleRegisterEvents = (id) => {
    setEventReg(true);
    setMessage("View details");
    dispatch(postEventsRegistered(id, token));
  };
  const handleViewDetails = (id) => {
    navigate(`/events/${id}`);
  };
  return (
    <Flex justifyContent={"space-between"} m={"auto"} w={"90%"}>
      {isRegistered && (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          color={"#6fcd9e"}
          alignItems={"center"}>
          <AiFillCheckCircle color={"#6fcd9e"} /> 
          Registered
        </Box>
      )}
      <Button
        w={"100%"}
        m={"auto"}
        color={"white"}
        bg={"#3470e4"}
        fontSize={"sm"}
        size={"sm"}
        letterSpacing={"wider"}
        _hover={{ bg: "#1d5fe2" }}
        onClick={
          () =>
            message === "Watch recording"
              ? handleWatchRecording(id)
              : message === "Click to register here"
              ? handleRegisterEvents(id)
              : handleViewDetails(id)
          // message === "Click to register here"
          //   ? navigate(`/events/${id}`)
          //   : message === "Watch recording"
          //   ? navigate(`/events/${id}/details`)
          //   : null
        }>
        {message}
      </Button>
    </Flex>
  );
}

export default React.memo(EventCard);
