import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  ...theme.colors,
  ...tailwindColors,
  brand: {
    50: '#cfd8e5',
    100: '#aebdd3',
    200: '#9dafca',
    300: '#8da2c1',
    400: '#7c94b8',
    500: '#5b79a6',
    600: '#486186',
    700: '#3f5575',
    800: '#374964',
    900: '#253143',
  },
  gray: tailwindColors.blueGray,
  success: theme.colors.green,
  error: theme.colors.red,
  warning: theme.colors.yellow,
};
