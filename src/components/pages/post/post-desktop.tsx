"use client";
import {
  CommentIcon,
  Dotted3Icon,
  LoveIcon,
  ShareIcon,
} from "@/components/general";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { RecipePostListType } from "../beranda/data";
import HeaderDetail from "../../general/header-detail/header-beranda";
import CommentCard from "../../general/comment-card/comment-card";

type PostDesktopProps = {
  data: RecipePostListType | undefined;
};

const PostDesktop = (props: PostDesktopProps) => {
  const { data } = props;

  return (
    <Stack
      py={`12px`}
      mt={`56px`}
      maxW={`598px`}
      borderRight={`1px solid #EFF3F4`}
      gap={`0`}
    >
      <HeaderDetail data={data?.author} />
      <VStack alignItems={`start`} w={`100%`} gap={`13px`} px={`16px`}>
        <Text
          fontSize={`15px`}
          color={`#0F1419`}
          dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
        ></Text>
        <Box
          w={`100%`}
          height={`512px`}
          position={`relative`}
          rounded={`16px`}
          overflow={`hidden`}
        >
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={data?.pictureUrl ?? ""}
            fill
            alt="Profile Cover Images | Epicuran"
          ></Image>
        </Box>
        <HStack
          gap={`27px`}
          borderBottom={`1px solid #E4E4E4`}
          justifyContent={`space-between`}
          w={`full`}
          px={`8px`}
          py={`16px`}
        >
          <Text fontSize={`15px`} color={`#8B98A5`}>
            7:45 am · 20 Mar 2023
          </Text>
          <HStack fontSize={`15px`} color={`#8B98A5`}>
            <Text fontWeight={`bold`} color={`#0F1419`}>
              256K
            </Text>
            <Text>Views</Text>
          </HStack>
          <HStack fontSize={`15px`} color={`#8B98A5`}>
            <Text fontWeight={`bold`} color={`#0F1419`}>
              256K
            </Text>
            <Text>Comments</Text>
          </HStack>
          <HStack fontSize={`15px`} color={`#8B98A5`}>
            <Text fontWeight={`bold`} color={`#0F1419`}>
              69K
            </Text>
            <Text>Likes</Text>
          </HStack>
        </HStack>
        <VStack
          alignItems={`center`}
          justifyContent={`end`}
          gap={`12px`}
          width={`full`}
          mt={`24px`}
        >
          <Text fontSize={`15px`} color={`#0F1419`} fontWeight={`bold`}>
            Ingredients
          </Text>
          <Box bg={`#FFA800`} h={`4px`} w={`56px`} borderRadius={`9999`}></Box>
        </VStack>
        <HStack
          borderBottom={`1px solid #E4E4E4`}
          w={`full`}
          fontSize={`14px`}
          fontWeight={`bold`}
          lineHeight={`21px`}
          gap={`12px`}
          flexWrap={`wrap`}
          pt={`22px`}
          pb={`40px`}
        >
          <Text
            px={`12px`}
            py={`8px`}
            cursor={`pointer`}
            bg={`#FFFBF3`}
            rounded={`full`}
            w={`auto`}
          >
            375g pkt fresh fettuccine
          </Text>
          <Text
            px={`12px`}
            py={`8px`}
            cursor={`pointer`}
            bg={`#FFFBF3`}
            rounded={`full`}
            w={`auto`}
          >
            1 tbsp olive oil
          </Text>
          <Text
            px={`12px`}
            py={`8px`}
            cursor={`pointer`}
            bg={`#FFFBF3`}
            rounded={`full`}
            w={`auto`}
          >
            500g Coles RSPCA Approved Australian Chicken ThighFillets, sliced
          </Text>
          <Text
            px={`12px`}
            py={`8px`}
            cursor={`pointer`}
            bg={`#FFFBF3`}
            rounded={`full`}
            w={`auto`}
          >
            250g vine-ripened cherry tomatoes
          </Text>
          <Text
            px={`12px`}
            py={`8px`}
            cursor={`pointer`}
            bg={`#FFFBF3`}
            rounded={`full`}
            w={`auto`}
          >
            290g jar Coles Italia Piccante Tomato And Chilli Pesto or Coles
            Tomato Pesto
          </Text>
          <Text
            px={`12px`}
            py={`8px`}
            cursor={`pointer`}
            bg={`#FFFBF3`}
            rounded={`full`}
            w={`auto`}
          >
            60g pkt Coles Australian Baby Rocket
          </Text>
        </HStack>
        <VStack
          alignItems={`start`}
          gap={`24px`}
          mt={`16px`}
          p={`16px`}
          bg={`#FFFBF3`}
          rounded={`16px`}
        >
          <Text color={`#0F1419`} fontSize={`20px`} fontWeight={`bold`}>
            4 Method Steps
          </Text>
          <VStack alignItems={`start`}>
            <HStack w={`full`} justifyContent={`space-between`}>
              <Text color={`#0F1419`} fontSize={`16px`} fontWeight={`bold`}>
                Step 1
              </Text>
              <Dotted3Icon my={`4px`} w={`19px`} h={`19px`} color={`#536471`} />
            </HStack>
            <Text color={`#536471`} fontSize={`14px`} fontWeight={`400`}>
              Cook the pasta in a large saucepan of boiling water following
              packet directions or until al dente. Drain, reserving ½ cup
              (125ml) of cooking liquid.
            </Text>
          </VStack>
          <VStack alignItems={`start`}>
            <HStack w={`full`} justifyContent={`space-between`}>
              <Text color={`#0F1419`} fontSize={`16px`} fontWeight={`bold`}>
                Step 2
              </Text>
              <Dotted3Icon my={`4px`} w={`19px`} h={`19px`} color={`#536471`} />
            </HStack>
            <Text color={`#536471`} fontSize={`14px`} fontWeight={`400`}>
              Cook the pasta in a large saucepan of boiling water following
              packet directions or until al dente. Drain, reserving ½ cup
              (125ml) of cooking liquid.
            </Text>
          </VStack>
          <VStack alignItems={`start`}>
            <HStack w={`full`} justifyContent={`space-between`}>
              <Text color={`#0F1419`} fontSize={`16px`} fontWeight={`bold`}>
                Step 3
              </Text>
              <Dotted3Icon my={`4px`} w={`19px`} h={`19px`} color={`#536471`} />
            </HStack>
            <Text color={`#536471`} fontSize={`14px`} fontWeight={`400`}>
              Cook the pasta in a large saucepan of boiling water following
              packet directions or until al dente. Drain, reserving ½ cup
              (125ml) of cooking liquid.
            </Text>
          </VStack>
          <VStack alignItems={`start`}>
            <HStack w={`full`} justifyContent={`space-between`}>
              <Text color={`#0F1419`} fontSize={`16px`} fontWeight={`bold`}>
                Step 4
              </Text>
              <Dotted3Icon my={`4px`} w={`19px`} h={`19px`} color={`#536471`} />
            </HStack>
            <Text color={`#536471`} fontSize={`14px`} fontWeight={`400`}>
              Cook the pasta in a large saucepan of boiling water following
              packet directions or until al dente. Drain, reserving ½ cup
              (125ml) of cooking liquid.
            </Text>
          </VStack>
        </VStack>
      </VStack>
      <HStack
        justifyContent={`space-around`}
        gap={`32px`}
        w={`full`}
        p={`16px`}
        mt={`32px`}
        borderTop={`1px solid #E4E4E4`}
        borderBottom={`1px solid #E4E4E4`}
      >
        <HStack gap={`11px`}>
          <LoveIcon w={`22px`} h={`22px`} />
        </HStack>
        <HStack gap={`11px`}>
          <CommentIcon w={`22px`} h={`22px`} />
        </HStack>
        <HStack color={`#536471`} gap={`11px`}>
          <ShareIcon w={`22px`} h={`22px`} />
        </HStack>
      </HStack>
      <VStack>
        {data?.detail?.comments.map((comment, key) => (
          <CommentCard key={key} dataComment={comment ?? ""} />
        ))}
      </VStack>
    </Stack>
  );
};

export default PostDesktop;
