import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { foundations } from "./foundations";
import { typography } from './foundations/typography';

export const theme = extendTheme({
  config,
  ...foundations,
  // components,
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "gray.800",
      },
    },
  },
});
