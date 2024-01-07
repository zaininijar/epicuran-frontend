import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  InstagramIcon,
  SendIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/default-icons";
import Image from "next/image";
import { Logo } from "../images";

const LogoFooter = (props: any) => {
  return (
    <Stack
      width={`150px`}
      height={`70px`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Image
        src={Logo}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt="Logo Kormi Kaltra"
      />
    </Stack>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={`teal.300`}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "teal.500",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterDesktop() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={2}>
            <Box>
              <LogoFooter color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2023 KORMI Kaltra. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <TwitterIcon />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <YoutubeIcon />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Link Cepat</ListHeader>
            <Box as="a" href={"#"}>
              Sejarah Kormi Kaltra
            </Box>
            <Box as="a" href={"#"}>
              Struktur Organisasi
            </Box>
            <Box as="a" href={"#"}>
              Event
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Registrasi</ListHeader>
            <Box as="a" href={"#"}>
              Akun
            </Box>
            <Box as="a" href={"#"}>
              Inorga
            </Box>
            <Box as="a" href={"#"}>
              Pegiat
            </Box>
            <Box as="a" href={"#"}></Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Unduhan</ListHeader>
            <Box as="a" href={"#"}>
              Foto
            </Box>
            <Box as="a" href={"#"}>
              Video
            </Box>
            <Box as="a" href={"#"}>
              Dokumen
            </Box>
            <Box as="a" href={"#"}></Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
