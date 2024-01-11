import { CookIll, EyeCloseIcon, EyeOpenIcon, Logo } from "@/components";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type LoginDesktopProps = {};

const LoginDesktop = (props: LoginDesktopProps) => {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <HStack
        w={`100vw`}
        h={`100vh`}
        alignItems={`center`}
        justifyContent={`center`}
        bg={`primary.50`}
        as="form"
        // p={`20px`}
        gap={`0`}
      >
        <Box
          position={`relative`}
          overflow={`hidden`}
          w={`60%`}
          h={`full`}
          // border={`1px solid`}
          borderColor={`primary.50`}
          // borderRadius={`24px`}
        >
          <Image src={CookIll} fill alt="Login-Epicuran"></Image>
        </Box>
        <VStack
          alignItems={`start`}
          justifyContent={`center`}
          w={`40%`}
          h={`100%`}
          py={`40px`}
          px={`80px`}
        >
          <Box position={`absolute`} top={`0`} height={`100px`} width={`200px`}>
            <Image
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
                marginLeft: "-10px",
              }}
              src={Logo}
              alt="Epicuran Logo"
            />
          </Box>
          <Heading w="100%" color={`primary.500`} fontWeight="normal" mb="2%">
            <Text>Hello,</Text>
            <Text>Welcome Back</Text>
          </Heading>
          <FormControl mt="2%">
            <FormLabel htmlFor="username" fontWeight={"normal"}>
              Username
            </FormLabel>
            <Input
              rounded={`24px`}
              _placeholder={{ color: "gray.500", fontSize: "14px" }}
              border={`1px solid`}
              borderColor={`secondary.300`}
              _hover={{ border: "1px solid", borderColor: "secondary.400" }}
              py={`24px`}
              focusBorderColor="orange.300"
              placeholder="ex: epicuran_user001"
              id="username"
              type="username"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                rounded={`24px`}
                _placeholder={{
                  color: "gray.500",
                  fontSize: "14px",
                }}
                border={`1px solid`}
                borderColor={`secondary.300`}
                _hover={{ border: "1px solid", borderColor: "secondary.400" }}
                py={`24px`}
                focusBorderColor="orange.300"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="* * * * * * * * * * * * * *"
              />
              <InputRightElement width="4.5rem" py={`24px`}>
                <Button
                  bg={`primary.50`}
                  _hover={{ bg: "primary.50" }}
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? (
                    <EyeOpenIcon w={`18px`} h={`18px`} />
                  ) : (
                    <EyeCloseIcon w={`18px`} h={`18px`} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <HStack justifyContent={`space-between`} mt={`12px`}>
              <Checkbox color={`gray.500`} colorScheme="orange">
                <Text fontSize={`14px`}>Remember me</Text>
              </Checkbox>
              <Link href={`#`}>
                <Text fontSize={`14px`}>Forgot password?</Text>
              </Link>
            </HStack>
          </FormControl>
          <Button
            mt={`24px`}
            w="full"
            rounded={`24px`}
            py={`24px`}
            bg={`secondary.500`}
            color={`white`}
            _hover={{ backgroundColor: "secondary.400" }}
            variant="solid"
            onClick={() => {
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            Sign In
          </Button>
          <Link href={`/auth/register`} style={{ width: "100%" }}>
            <Button
              w="full"
              rounded={`24px`}
              py={`24px`}
              color={`secondary.500`}
              borderColor={`secondary.500`}
              _hover={{
                backgroundColor: "secondary.100",
                color: "secondary.500",
              }}
              variant="outline"
            >
              Sign Up
            </Button>
          </Link>
        </VStack>
      </HStack>
    </>
  );
};

export default LoginDesktop;
