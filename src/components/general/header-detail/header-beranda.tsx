import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import InputSearch from "../text-input/input-search";
import { RecipePostListType } from "@/components/pages/beranda/data";
import Link from "next/link";
import Image from "next/image";
import { Dotted3Icon } from "../icons/default-icons";

type HeaderDetailProps = {
  data: RecipePostListType["author"] | undefined;
};

const HeaderDetail = (props: HeaderDetailProps) => {
  const { data } = props;

  return (
    <HStack position={`fixed`} top={`0px`} zIndex={`99`} w={`full`} p={`0`}>
      <HStack
        w={`598px`}
        maxW={`598px`}
        py={`12px`}
        bg={`rgba(255,255,255, .8)`}
        backdropFilter={`blur(6px)`}
        justifyContent={`center`}
        alignItems={`end`}
        gap={`16px`}
        px={`16px`}
      >
        <Link href={`/profile-user`}>
          <Box
            w={`44px`}
            aspectRatio={`1/1`}
            position={`relative`}
            rounded={`full`}
            overflow={`hidden`}
          >
            <Image
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={data?.profilePictureUrl ?? ""}
              fill
              alt="Profile Cover Images | Epicuran"
            ></Image>
          </Box>
        </Link>
        <HStack
          justifyContent={`space-between`}
          w={`full`}
          alignItems={`start`}
        >
          <VStack
            fontSize={`15px`}
            alignItems={`start`}
            justifyContent={`center`}
            gap={`0`}
          >
            <Text color={`#0F1419`} fontWeight={`bold`}>
              {data?.name ?? "?"}
            </Text>
            <Text color={`#536471`} fontWeight={`normal`}>
              {data?.username ?? "?"}
            </Text>
          </VStack>
          <Dotted3Icon my={`4px`} color={`#536471`} />
        </HStack>
      </HStack>
      <HStack px={`30px`} bg={`white`}>
        <InputSearch />
      </HStack>
    </HStack>
  );
};

export default HeaderDetail;
