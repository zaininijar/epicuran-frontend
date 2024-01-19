import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Dotted3Icon } from "../icons/default-icons";
import ProfileList from "../profile-list/profile-list";
import { ProfileListData } from "./data";
import Link from "next/link";

type SidebarInfoDesktopProps = {
  menu: string;
};

const SidebarInfoDesktop = (props: SidebarInfoDesktopProps) => {
  const { menu } = props;

  const isUserRecomnd = menu == "profile" || menu == "profile-user";

  return (
    <VStack height={`100vh`} paddingY={`1.5rem`} px={`32px`} mt={`38px`}>
      {isUserRecomnd && (
        <VStack
          alignItems={`start`}
          gap={`25px`}
          w={`316px`}
          marginTop={`22px`}
          bg={`#FFFBF3`}
          border={`1px solid #FFFBF3`}
          px={`16px`}
          py={`13px`}
          rounded={`16px`}
        >
          <Text fontSize={`20px`} fontWeight={`bold`}>
            You might like
          </Text>

          {ProfileListData.map((profileList, key) => (
            <ProfileList key={key} data={profileList} />
          ))}

          <HStack alignSelf={`start`}>
            <Link href={``}>
              <Text color={`#FFA800`} fontSize={`15px`} fontWeight={`normal`}>
                Show More
              </Text>
            </Link>
          </HStack>
        </VStack>
      )}
      <VStack
        alignItems={`start`}
        gap={`24px`}
        mt={`16px`}
        p={`16px`}
        w={`316px`}
        bg={`#FFFBF3`}
        rounded={`16px`}
      >
        <Text color={`#0F1419`} fontSize={`20px`} fontWeight={`bold`}>
          Recipe Trends for you
        </Text>

        {dataRecipeTrends.map((dataRecipeTrend, key) => (
          <VStack key={key} alignItems={`start`} gap={`0`} w={`full`}>
            <HStack w={`full`} justifyContent={`space-between`}>
              <Text color={`#536471`} fontSize={`14px`} fontWeight={`400`}>
                {dataRecipeTrend.topic}
              </Text>
              <Dotted3Icon my={`4px`} w={`19px`} h={`19px`} color={`#536471`} />
            </HStack>
            <Text color={`#0F1419`} fontSize={`16px`} fontWeight={`bold`}>
              {dataRecipeTrend.hashtag}
            </Text>
            <Text color={`#536471`} fontSize={`14px`} fontWeight={`400`}>
              {`${dataRecipeTrend.posts} Post`}
            </Text>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
};

export type RecipeTrendsType = {
  topic: string;
  hashtag: string;
  posts: number;
};

export const dataRecipeTrends: RecipeTrendsType[] = [
  { topic: "Nasi Goreng", hashtag: "#NasiGorengEnak", posts: 5053 },
  { topic: "Caprese Salad", hashtag: "#SaladCaprese", posts: 2301 },
  { topic: "Mie Goreng", hashtag: "#MieGorengPedas", posts: 412 },
  { topic: "Chicken Alfredo Pasta", hashtag: "#ChickenAlfredo", posts: 789 },
  { topic: "Sushi Rolls", hashtag: "#SushiLovers", posts: 1502 },
  { topic: "Bubur Ayam", hashtag: "#BuburAyamGurih", posts: 632 },
  { topic: "Pizza Margherita", hashtag: "#PizzaMargherita", posts: 880 },
  { topic: "Tiramisu", hashtag: "#TiramisuDessert", posts: 1205 },
  { topic: "Steak Wagyu", hashtag: "#WagyuSteak", posts: 301 },
  { topic: "Pancake Fluffy", hashtag: "#FluffyPancake", posts: 1024 },
];

export default SidebarInfoDesktop;
