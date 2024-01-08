import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import InputSearch from "../text-input/input-search";

type HeaderBerandaProps = {
  activeMenu: string;
};

const HeaderBeranda = (props: HeaderBerandaProps) => {
  const { activeMenu } = props;

  return (
    <HStack position={`fixed`} top={`-2px`} zIndex={`99`} w={`full`} p={`0`}>
      <HStack
        w={`598px`}
        backdropFilter={`blur(9px)`}
        bg={`rgba(255,255,255, .8)`}
        justifyContent={`center`}
        alignItems={`end`}
        gap={`0`}
      >
        <Stack
          pt={`18px`}
          pb={`0`}
          textAlign={`end`}
          alignItems={`center`}
          w={`full`}
          _hover={{
            bg: "rgba(255, 233, 208, 0.51)",
          }}
          justifyContent={`space-between`}
          cursor={`pointer`}
        >
          <Text fontSize={`16px`} fontWeight={`semibold`}>
            For You
          </Text>
          <Box
            mt={`4px`}
            bg={activeMenu == "for-you" ? `#FFA800` : `transparent`}
            h={`4px`}
            w={`72px`}
            borderRadius={`9999`}
          ></Box>
        </Stack>
        <Stack
          pt={`18px`}
          pb={`0`}
          textAlign={`end`}
          alignItems={`center`}
          w={`full`}
          _hover={{
            bg: "rgba(255, 233, 208, 0.51)",
          }}
          borderRight={`1px solid #EFF3F4`}
          justifyContent={`space-between`}
          cursor={`pointer`}
        >
          <Text fontSize={`16px`} fontWeight={`semibold`}>
            Following
          </Text>
          <Box
            mt={`4px`}
            bg={activeMenu == "following" ? `#FFA800` : `transparent`}
            h={`4px`}
            w={`72px`}
            borderRadius={`9999`}
          ></Box>
        </Stack>
      </HStack>
      <HStack px={`30px`} bg={`white`}>
        <InputSearch />
      </HStack>
    </HStack>
  );
};

export default HeaderBeranda;
