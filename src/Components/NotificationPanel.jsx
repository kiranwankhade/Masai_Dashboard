import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Heading,
  Text,
  Center,
  Box,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa"; // You can use your preferred notification icon
import { MdCheckCircle, MdCircle } from "react-icons/md";

function NotificationPanel() {
  const notifications = [
    {
      id: 1,
      message: "New message received",
      isRead: false, // Initially, the notification is unread
    },
    {
      id: 2,
      message: "Your order has been shipped",
      isRead: true, // This notification has already been read
    },
    // Add more notifications here
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [notificationData, setNotificationData] = useState(notifications);

  const markAsRead = (id) => {
    const updatedNotifications = notificationData.map((notification) =>
      notification.id === id ? { ...notification, isRead: true } : notification
    );
    setNotificationData(updatedNotifications);
  };

  return (
    <>
      <Box>
        <IconButton
          icon={<FaBell />} // Use your preferred notification icon
          onClick={onOpen}
          aria-label="Open Notification Panel"
        />
        <span
          style={{
            position: "relative",
            top: "-15px",
            right: "10px",
            padding: "1px 5px",
            borderRadius: "50%",
            backgroundColor: "red",
            color: "white",
            fontSize: "10px",
          }}>
          {notificationData.length > 0 ? notificationData.length : "0"}
        </span>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Notification Panel
            <Badge ml={"4"} colorScheme="red">
              New{" "}
            </Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={"4"}>
            <List spacing={3}>
              {notificationData.length > 0 ? (
                notificationData.map((notification) => (
                  <ListItem
                    fontSize={"micro"}
                    m={"4"}
                    bg="white"
                    key={notification.id}
                    className={notification.isRead ? "read" : "unread"}
                    onClick={() => markAsRead(notification.id)}>
                    {notification.isRead ? (
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    ) : (
                      <ListIcon as={MdCircle} color="red.500" />
                    )}
                    {notification.message}
                  </ListItem>
                ))
              ) : (
                <Center display={"grid"}>
                  <IconButton
                    m={"auto"}
                    color={"green.400"}
                    bg={"green.100"}
                    icon={<FaBell />}
                    aria-label="Open Notification Panel"
                  />
                  <Heading fontSize={"xl"} mt={"4"} textAlign={"center"}>
                    No notifications to show yet
                  </Heading>
                  <Text textAlign={"center"} mt={"2"}>
                    You’ll see useful information here soon. Stay tuned!
                  </Text>
                </Center>
              )}
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NotificationPanel;
