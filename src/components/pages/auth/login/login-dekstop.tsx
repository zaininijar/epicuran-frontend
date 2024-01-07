import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

type LoginDesktopProps = {};

const LoginDesktop = (props: LoginDesktopProps) => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box borderWidth="1px" rounded="lg" p={`80px`} w={`100%`} as="form">
        <Progress
          hasStripe
          value={progress}
          colorScheme="teal"
          mb="5%"
          mx="5%"
          borderRadius={`50px`}
          bgColor={`teal.100`}
          isAnimated
        ></Progress>
        <Heading
          w="100%"
          color={`teal.500`}
          textAlign={"center"}
          fontWeight="normal"
          mb="2%"
        >
          User Registration
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={"normal"}>
              First name
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="first-name"
              placeholder="First name"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="last-name" fontWeight={"normal"}>
              Last name
            </FormLabel>
            <Input
              focusBorderColor="teal.300"
              id="last-name"
              placeholder="First name"
            />
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            Email address
          </FormLabel>
          <Input focusBorderColor="teal.300" id="email" type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              focusBorderColor="teal.300"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
                transition={`all 0.3s ease`}
                bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
                _hover={{
                  bg: "linear-gradient(90deg, #4FD1C5, #319795)",
                }}
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
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
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default LoginDesktop;
