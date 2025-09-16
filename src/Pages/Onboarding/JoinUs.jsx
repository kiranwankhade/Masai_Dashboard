import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react';

import zoom from '../Icons/ZoomLogo.svg';

import slack from '../Icons/SlackLogo.svg'

const JoinUs = ({currentStep}) => {
  return (
    <Box p={3} mt={2}>

      <Flex  gap={["2rem","2rem","3rem","5rem"]} justifyContent={"flex-start"} alignItems={"center"}>

          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"0.5rem"}>
              <Box >
                <Image w={"4rem"} h={"4rem"} src={zoom}/>
              </Box>
              <Button h={"2rem"} fontSize={"0.7rem"} bg={"#3470E4"} fontWeight={500} color={"white"} _hover={{
                bg:"#0658A4"
              }}>JOIN ZOOM</Button>
          </Box>

          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"0.5rem"}>
              <Box >
                <Image w={"4rem"} h={"4rem"} src={slack}/>
              </Box>
              <Button h={"2rem"} fontSize={"0.7rem"} bg={"#3470E4"} fontWeight={500} color={"white"} _hover={{
                bg:"#0658A4"
              }}>JOIN SLACK</Button>
          </Box>
      </Flex>


    </Box>
  )
}

export default JoinUs