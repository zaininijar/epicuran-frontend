import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NAV_ITEMS, NavItem } from "./data";
import { useRouter } from "next/router";
import Link from "next/link";

type NavbarDesktopProps = {
  textColor?: string;
};

export default function NavbarDesktop(props: NavbarDesktopProps) {
  const { textColor } = props;

  const linkColor = useColorModeValue(textColor, "teal.200");
  const linkHoverColor = useColorModeValue("teal.400", "white");
  const popoverContentBgColor = useColorModeValue("white", "teal.800");

  let route = useRouter().asPath;
  if (route == "/") {
    route = "/beranda";
  }

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href ?? "#"}>
                <Box
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  letterSpacing={`-0.5px`}
                  color={
                    route.includes(navItem?.triggerActive ?? "#")
                      ? "teal.400"
                      : linkColor
                  }
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                  {navItem.children && (
                    <ChevronRightIcon
                      marginLeft={`5px`}
                      transform={`rotate(90deg)`}
                    />
                  )}
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href ? href : "#"}>
      <Box
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "teal.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"teal.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};
