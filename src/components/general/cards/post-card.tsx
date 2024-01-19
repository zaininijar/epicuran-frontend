import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  Dotted3Icon,
  CommentIcon,
  LoveIcon,
  ShareIcon,
} from "../icons/default-icons";
import Link from "next/link";
import { SavedIcon } from "../icons/default-icons";
import Pinned from "../pinned/pinned";
import { RecipePostListType } from "../../pages/beranda/data";
import { useRouter } from "next/router";

type PostCardProps = {
  isPinned?: boolean;
  data: RecipePostListType;
};

const PostCard = (props: PostCardProps) => {
  const { isPinned, data } = props;
  const router = useRouter();

  const handleToDetailPost = () => {
    return router.push(`/post/${data.author.username}/${data.id}`);
  };

  return (
    <Stack px={`16px`} py={`12px`} borderBottom={`1px solid #EFF3F4`}>
      {isPinned ? <Pinned /> : ""}
      <HStack gap={`12px`} alignItems={`start`}>
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
              src={data.author.profilePictureUrl}
              fill
              alt="Profile Cover Images | Epicuran"
            ></Image>
          </Box>
        </Link>
        <VStack alignItems={`start`} maxW={`90%`} gap={`19px`}>
          <VStack>
            <HStack justifyContent={`space-between`} w={`full`}>
              <HStack fontSize={`15px`}>
                <Text color={`#0F1419`} fontWeight={`bold`}>
                  {data.author.name}
                </Text>
                <Text color={`#536471`} fontWeight={`normal`}>
                  {data.author.username} · {data.createdAt}
                </Text>
              </HStack>
              <Dotted3Icon color={`#536471`} />
            </HStack>
            <Text
              onClick={handleToDetailPost}
              cursor={`pointer`}
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
              fontSize={`15px`}
              color={`#0F1419`}
            />
          </VStack>
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
              src={data.pictureUrl}
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
