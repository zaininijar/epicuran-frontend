import { Box, Button, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

type JoinDesktopProps = {};

const JoinDesktop = (props: JoinDesktopProps) => {
  return (
    <Container
      maxWidth={`container.xl`}
      px={`50px`}
      mb={`100px`}
      color={`white`}
    >
      <VStack w={"full"}>
        <HStack
          w={"full"}
          py={`30px`}
          px={`50px`}
          borderRadius={`xl`}
          gap={`40px`}
          bg={"linear-gradient(145deg, #4FD1C5, #319795)"}
        >
          <Box>
            <Text fontSize={`30px`} fontWeight={`bold`}>
              Ayo bergabung dengan KORMI KALTRA sekarang!
            </Text>
            <Text color={`gray.300`}>
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
            px={`50px`}
          >
            Bergabung Sekarang
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default JoinDesktop;
