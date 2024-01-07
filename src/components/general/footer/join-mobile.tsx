import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

type JoinMobileProps = {};

const JoinMobile = (props: JoinMobileProps) => {
  return (
    <Container maxWidth={`container.xl`} mb={`100px`} color={`white`}>
      <VStack w={"full"}>
        <VStack
          w={"full"}
          py={`20px`}
          px={`20px`}
          borderRadius={`xl`}
          gap={`20px`}
          bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
        >
          <Box>
            <Text fontWeight={`semibold`} textAlign={`center`}>
              Ayo bergabung dengan KORMI KALTRA
            </Text>
            <Text
              color={`gray.300`}
              textAlign={`center`}
              fontSize={`sm`}
              mt={`10px`}
            >
              KORMI KALTRA berkomitmen memberikan pengalaman tak terlupakan bagi
              setiap anggota. Segera bergabung dan jadilah bagian dari keluarga
              besar kami!
            </Text>
          </Box>
          <Button
            bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
            _hover={{
              bg: "linear-gradient(90deg, #4FD1C5, #319795)",
            }}
            rounded={"md"}
            color={"white"}
            width={`100%`}
            px={`50px`}
          >
            Bergabung Sekarang
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default JoinMobile;
