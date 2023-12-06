import { Container, Flex, Image, Box, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/Instagram.png" h={650} alt="Phone img" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get The App</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/microsoft.png" h={"10"} alt="microsoft" />
              <Image src="/playstore.png" h={"10"} alt="playstore" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
