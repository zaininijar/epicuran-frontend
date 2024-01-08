import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ProfilePicture } from "../images";
import {
  Dotted3Icon,
  CommentIcon,
  LoveIcon,
  ShareIcon,
} from "../icons/default-icons";
import Link from "next/link";
import { SavedIcon } from "../icons/default-icons";
import Pinned from "../pinned/pinned";

type PostCardProps = {
  isPinned?: boolean;
};

const PostCard = (props: PostCardProps) => {
  const { isPinned } = props;
  return (
    <Stack px={`16px`} py={`12px`} borderBottom={`1px solid #EFF3F4`}>
      {isPinned ? <Pinned /> : ""}
      <HStack gap={`12px`} alignItems={`start`}>
        <Box
          w={`48px`}
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
            src={ProfilePicture}
            fill
            alt="Profile Cover Images | Epicuran"
          ></Image>
        </Box>
        <VStack alignItems={`start`} maxW={`90%`} gap={`19px`}>
          <VStack>
            <HStack justifyContent={`space-between`} w={`full`}>
              <HStack fontSize={`15px`}>
                <Text color={`#0F1419`} fontWeight={`bold`}>
                  Juna Rorimpandey
                </Text>
                <Text color={`#536471`} fontWeight={`normal`}>
                  @junarorimpa_ · Apr 10, 2023
                </Text>
              </HStack>
              <Dotted3Icon color={`#536471`} />
            </HStack>
            <Text fontSize={`15px`} color={`#0F1419`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur culpa, porro velit suscipit, labore repellendus sint
              cupiditate eaque eius alias possimus eos recusandae perferendis
              dolores ipsum amet! Sint.
            </Text>
          </VStack>
          <HStack fontSize={`15px`}>
            <Text>Get started here: </Text>
            <Box color={`primary`}>
              <Link href={`https://example-url.com/recipe`}>
                https://example-url.com/recipe
              </Link>
            </Box>
          </HStack>
          <Box
            w={`100%`}
            height={`242px`}
            position={`relative`}
            rounded={`16px`}
            overflow={`hidden`}
          >
            <Image
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={`/images/post-1.jpeg`}
              fill
              alt="Profile Cover Images | Epicuran"
            ></Image>
          </Box>
          <HStack justifyContent={`space-between`} w={`full`}>
            <HStack gap={`46px`}>
              <HStack gap={`11px`}>
                <CommentIcon w={`19px`} h={`19px`} />
                <Text fontSize={`13px`} color={`#536471`}>
                  3
                </Text>
              </HStack>
              <HStack gap={`11px`}>
                <LoveIcon w={`19px`} h={`19px`} />
                <Text fontSize={`13px`} color={`#536471`}>
                  7
                </Text>
              </HStack>
            </HStack>
            <HStack color={`#536471`} gap={`11px`}>
              <ShareIcon w={`19px`} h={`19px`} />
              <SavedIcon w={`19px`} h={`19px`} />
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default PostCard;
