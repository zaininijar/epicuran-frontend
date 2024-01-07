import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { foundations } from "./foundations";
import { typography } from './foundations/typography';

export const theme = extendTheme({
  config,
  ...foundations,
  ...typography,
  // components,
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "gray.800",
      },
    },
  },
  colors: {
    dark: '#03001C',
    primary: '#301E67',
    secondary: '#5B8FB9',
    light: '#B6EADA',
  },
});
