import {
  VStack,
  Image,
  Box,
  Input,
  Button,
  Flex,
  Text,
 } from "@chakra-ui/react";
 import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 
 const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
     email: "",
     password: "",
     confirmPassword: "",
  });
 
  const handleAuth = () => {
     if (!inputs.email || !inputs.password) {
       alert("All fields are required");
       return;
     }
     navigate("/");
  };
 
  const handleSignUp = () => {
     if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
       alert("All fields are required");
       return;
     }
     if (inputs.password !== inputs.confirmPassword) {
       alert("Passwords do not match");
       return;
     }
     navigate("/");
  };
 
  const toggleForm = () => {
     setIsLogin(!isLogin);
  };
 
  return (
     <>
       <Box border="2px solid gray" borderRadius={7} padding={5}>
         <VStack spacing={4}>
           <Image src="/logo.png" h={24} cursor={"pointer"} />
           <Input
             placeholder="Email"
             fontSize={14}
             type="email"
             value={inputs.email}
             onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
           />
           <Input
             placeholder="Password"
             fontSize={14}
             type="password"
             value={inputs.password}
             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
           />
           {!isLogin && (
             <Input
               placeholder="Confirm Password"
               fontSize={14}
               type="password"
               value={inputs.confirmPassword}
               onChange={(e) =>
                 setInputs({ ...inputs, confirmPassword: e.target.value })
               }
             />
           )}
           <Button
             w={"full"}
             colorScheme="blue"
             size={"sm"}
             fontSize={14}
             onClick={isLogin ? handleAuth : handleSignUp}
           >
             {isLogin ? "Log in " : "Sign Up"}
           </Button>
           <Flex
             alignItems={"center"}
             justifyContent={"center"}
             my={2}
             gap={1}
             w={"full"}
           >
             <Box flex={2} h={"1px"} bg={"gray.400"} />
             <Text mx={1} color={"white"}>
               OR
             </Text>
             <Box flex={2} h={"1px"} bg={"gray.400"} />
           </Flex>
           <Flex>
             <Image src="/google.png" w={5} alt="google" />
             <Text mx={2} color={"blue.500"}>
               Log in with Google
             </Text>
           </Flex>
         </VStack>
       </Box>
       <Box border={"1px solid gray"} borderRadius={4} padding={5}>
         <Flex alignItems={"center"} justifyContent={"Center"}>
           <Box mx={3} fontSize={14}>
             {isLogin ? "Dont have an account ?" : "Already have an account ?"}
           </Box>
           <Box
             onClick={toggleForm}
             color={"blue.500"}
             cursor={"pointer"}
           >
             {isLogin ? "Sign Up" : "Log in"}
           </Box>
         </Flex>
       </Box>
     </>
  );
 };
 
 export default AuthForm;