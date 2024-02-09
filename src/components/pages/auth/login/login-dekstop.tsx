import {
  ButtonProviderSignin,
  CookIll1,
  EyeCloseIcon,
  EyeOpenIcon,
  Logo,
} from "@/components";
import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type LoginDesktopProps = {};

const LoginDesktop = (props: LoginDesktopProps) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { push } = useRouter();

  const handleLoginCredentials = async () => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: "/",
      });

      if (!res?.error) {
        push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => setShow(!show);

  const handleSignIn = async (provider: string) => {
    signIn(provider);
  };

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
          <Image src={CookIll1} fill alt="Login-Epicuran"></Image>
        </Box>
        <VStack
          alignItems={`start`}
          justifyContent={`center`}
          w={`40%`}
          h={`100%`}
          py={`40px`}
          px={`60px`}
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
          <Heading
            mt={`8%`}
            mb={`18px`}
            w="100%"
            color={`primary.500`}
            fontWeight="normal"
          >
            <Text fontSize={`24px`} fontWeight={`bold`}>
              Hai,
            </Text>
            <Text fontSize={`24px`} fontWeight={`bold`}>
              Jelajahi Dunia Penuh Rasa
            </Text>
          </Heading>
          <FormControl>
            <FormLabel
              fontSize={`14px`}
              htmlFor="username"
              fontWeight={"normal"}
            >
              Username / Email
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontSize={`14px`}
              htmlFor="password"
              fontWeight={"normal"}
              mt="2%"
            >
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
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
            mt={`18px`}
            w="full"
            rounded={`24px`}
            py={`24px`}
            bg={`secondary.500`}
            color={`white`}
            _hover={{ backgroundColor: "secondary.400" }}
            variant="solid"
            onClick={() => handleLoginCredentials()}
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
          <Stack w={`full`}>
            <Box position="relative" padding="5">
              <Divider bg={`primary.500`} />
              <AbsoluteCenter px="4">OR</AbsoluteCenter>
            </Box>
          </Stack>
          <ButtonProviderSignin
            image="/images/icons/github.svg"
            label="Continue With Github"
            onClick={() => handleSignIn("github")}
          ></ButtonProviderSignin>

          <ButtonProviderSignin
            image="/images/icons/google.svg"
            label="Continue With Google"
            onClick={() => handleSignIn("google")}
          ></ButtonProviderSignin>
        </VStack>
      </HStack>
    </>
  );
};

export default LoginDesktop;
