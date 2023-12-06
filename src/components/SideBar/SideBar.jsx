import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react"
import { Link as RouterLink} from "react-router-dom";
import { CreatePostLogo,InstagramLogo,InstagramMobileLogo,NotificationsLogo,SearchLogo } from "../../assets/constants";
import{AiFillHome} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"

function SideBar() {
  const sideBarItems=()=>[
    {
      icon:<AiFillHome size={25}/>,
      text:"Home",
      link:"/"
    },
    {
      icon:<SearchLogo/>,
      text:"Home",
    },
    {
      icon:<AiFillHome size={25}/>,
      text:"Home",
    },
    {
      icon:<AiFillHome size={25}/>,
      text:"Home",
    },
    {
      icon:<AiFillHome size={25}/>,
      text:"Home",
      link:"/"
    },

  ]
  return(
    <Box
    height={"100vh"}
    borderRight={"2px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2,md:4}}
    >
      <Flex direction={"column"}gap={10} w="full" height={"full"}>
        
        <Link to={"/"} as={RouterLink}>
          
        </Link>
      
        
      </Flex>

    </Box>

  )
}

export default SideBar;
