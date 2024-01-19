import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CommentIcon,
  Dotted3Icon,
  LoveIcon,
  ShareIcon,
} from "../icons/default-icons";
import { CommentsType } from "@/components/pages/beranda/data";

type CommentCardProps = {
  dataComment: CommentsType;
};

const CommentCard = (props: CommentCardProps) => {
  const { dataComment } = props;
  return (
    <HStack
      gap={`12px`}
      alignItems={`start`}
      w={`full`}
      borderBottom={`1px solid #E4E4E4`}
      padding={`16px`}
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
            src={dataComment.profilePictureUrl}
            fill
            alt="Profile Cover Images | Epicuran"
          ></Image>
        </Box>
      </Link>
      <VStack alignItems={`start`} gap={`0px`} w={`full`}>
        <HStack w={`full`} justifyContent={`space-between`}>
          <HStack fontSize={`15px`}>
            <Text color={`#0F1419`} fontWeight={`bold`}>
              {dataComment.name}
            </Text>
            <Text color={`#536471`} fontWeight={`normal`}>
              {dataComment.username} · {dataComment.createdAt}
            </Text>
          </HStack>
          <Dotted3Icon color={`#536471`} />
        </HStack>
        <HStack fontSize={`13px`}>
          <Text color={`#536471`} fontWeight={`normal`}>
            Replying to
          </Text>
          <Text color={`primary.500`}>@PeterObi</Text>
        </HStack>
        <Text>God be with you brother.</Text>
        <HStack gap={`48px`} justifyContent={`space-between`} mt={`20px`}>
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
          <HStack color={`#536471`} gap={`11px`}>
            <ShareIcon w={`19px`} h={`19px`} />
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

type ReplyProps = {
  reply: CommentsType;
};

const ReplyComment = (props: ReplyProps) => {
  const { reply } = props;
  return (
    <HStack
      gap={`12px`}
      alignItems={`start`}
      w={`full`}
      borderBottom={`1px solid #E4E4E4`}
      padding={`16px`}
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
            src={reply.profilePictureUrl ?? ""}
            fill
            alt="Profile Cover Images | Epicuran"
          ></Image>
        </Box>
      </Link>
      <VStack alignItems={`start`} gap={`0px`} w={`full`}>
        <HStack w={`full`} justifyContent={`space-between`}>
          <HStack fontSize={`15px`}>
            <Text color={`#0F1419`} fontWeight={`bold`}>
              {reply.name ?? ""}
            </Text>
            <Text color={`#536471`} fontWeight={`normal`}>
              {reply.username ?? ""} · {reply.createdAt ?? ""}
            </Text>
          </HStack>
          <Dotted3Icon color={`#536471`} />
        </HStack>
        <HStack fontSize={`13px`}>
          <Text color={`#536471`} fontWeight={`normal`}>
            Replying to
          </Text>
          <Text color={`primary.500`}>@PeterObi</Text>
        </HStack>
        <Text>God be with you brother.</Text>
        <HStack gap={`48px`} justifyContent={`space-between`} mt={`20px`}>
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
          <HStack color={`#536471`} gap={`11px`}>
            <ShareIcon w={`19px`} h={`19px`} />
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CommentCard;
