import {
  ArrowLeftIcon,
  CoverImage,
  ProfilePicture,
  Dotted3Icon,
  MailIcon,
  CheckedIcon,
  ButtonSecondary,
  LocIcon,
  LinkIcon,
  CalendarIcon,
  PostCard,
  HeaderProfile,
} from "@/components";
import { ProfileListData } from "@/components/general/sidebar-info/data";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
type Props = {};

const ProfileUserDesktop = (props: Props) => {
  return (
    <VStack
      alignItems={`start`}
      gap={0}
      maxW={`598px`}
      position={`relative`}
      mt={`65px`}
      borderRight={`1px solid #EFF3F4`}
    >
      <HeaderProfile />
      <Box position={`relative`} w={`100%`} height={`199px`}>
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={CoverImage}
          fill
          alt="Profile Cover Images | Epicuran"
        ></Image>
      </Box>
      <HStack
        p={`16px`}
        gap={`8px`}
        justifyContent={`end`}
        w={`100%`}
        alignItems={`center`}
        position={`relative`}
      >
        <Box
          w={`142px`}
          aspectRatio={`1/1`}
          position={`absolute`}
          rounded={`full`}
          overflow={`hidden`}
          top={`-75px`}
          left={`16px`}
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
        <Stack
          rounded={`full`}
          border={`1px solid #CFD9DE`}
          p={`8px`}
          color={`#FF6C22`}
        >
          <Dotted3Icon width={`20px`} height={`20px`} />
        </Stack>
        <Stack rounded={`full`} border={`1px solid #CFD9DE`} p={`8px`}>
          <MailIcon width={`20px`} height={`20px`} />
        </Stack>
        <ButtonSecondary title="Follow" />
      </HStack>
      <VStack gap={`14px`} px={`16px`} alignItems={`start`} mt={`16px`}>
        <Box>
          <HStack>
            <Text fontSize={`20px`} fontWeight={`bold`}>
              Juna Rorimpandey
            </Text>
            <CheckedIcon />
          </HStack>
          <Text color={`#536471`} fontWeight={`normal`} fontSize={`15px`}>
            @junarorimpa_
          </Text>
        </Box>
        <Text color={`#0F1419`} fontWeight={`normal`} fontSize={`15px`}>
          I am Chef Juna Rorimpandey, a renowned chef born on July 20, 1975.
          Widely known for my culinary expertise, I believe each dish tells a
          unique story, inspiring my creative culinary explorations. Beyond the
          kitchen, I enjoy sharing culinary knowledge through various shows and
          social engagements.
        </Text>
        <HStack gap={`12px`}>
          <HStack>
            <LocIcon />
            <Text color={`#536471`} fontWeight={`normal`} fontSize={`15px`}>
              Jakarta, Indonesia
            </Text>
          </HStack>
          <HStack>
            <LinkIcon />
            <Text color={`#FFA800`} fontWeight={`normal`} fontSize={`15px`}>
              juna.com
            </Text>
          </HStack>
          <HStack>
            <CalendarIcon />
            <Text color={`#536471`} fontWeight={`normal`} fontSize={`15px`}>
              Joined April 2023
            </Text>
          </HStack>
        </HStack>
        <HStack gap={`20px`}>
          <HStack color={`#536471`} fontWeight={`normal`} fontSize={`14px`}>
            <Text color={`#0F1419`} fontWeight={`bold`}>
              334
            </Text>
            <Text>Following</Text>
          </HStack>
          <HStack color={`#536471`} fontWeight={`normal`} fontSize={`14px`}>
            <Text color={`#0F1419`} fontWeight={`bold`}>
              600
            </Text>
            <Text>Followers</Text>
          </HStack>
        </HStack>
        <HStack marginLeft={`14px`}>
          {ProfileListData.map((profileList, key) => (
            <Box
              key={key}
              w={`18px`}
              aspectRatio={`1/1`}
              position={`relative`}
              rounded={`full`}
              overflow={`hidden`}
              marginLeft={`-14px`}
              border={`1px solid white`}
            >
              <Image
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={profileList.picture_path}
                fill
                alt="Profile Cover Images | Epicuran"
              ></Image>
            </Box>
          ))}
          <Text fontSize={`13px`} fontWeight={`normal`} color={`#536471`}>
            Followed by Amanda, Efemena, and 7 others
          </Text>
        </HStack>
      </VStack>
      <VStack
        alignItems={`center`}
        justifyContent={`end`}
        gap={`12px`}
        width={`full`}
        mt={`24px`}
        borderBottom={`1px solid #EFF3F4`}
      >
        <Text fontSize={`15px`} color={`#0F1419`} fontWeight={`bold`}>
          Recipe Post
        </Text>
        <Box bg={`#FFA800`} h={`4px`} w={`56px`} borderRadius={`9999`}></Box>
      </VStack>
      <PostCard isPinned />
      <PostCard />
      <PostCard />
      <PostCard />
    </VStack>
  );
};

export default ProfileUserDesktop;
