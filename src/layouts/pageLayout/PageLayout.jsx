import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

function PageLayout({ children }) {
  const { pathname } = useLocation();
  //{this is the page layout where }
  //{content on the left side of the scree i.e sidebar}
return(
  <Flex>
    {pathname !== "/auth" ? (
      <Box w={{ base: "70px", md: "240px" }}>
        <SideBar />
      </Box>
    ) : null}

    {/* this is the content on the right side of the screen */}
    <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
      {children}
    </Box>
  </Flex>
)
}

export default PageLayout;
