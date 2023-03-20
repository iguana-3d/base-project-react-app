import { lighten } from 'polished';
import baseTheme from './baseTheme';
//TYPES
import { ICustomShadowOptions } from './theme.types';
//Name color identify in: https://www.color-name.com/hex

const others = {
  yellow: {
    1: '#FFF9DE',
    2: '#FFED9C',
    3: '#FFE054',
    4: '#FFD100',
    5: '#FFC148',
    6: '#FFA800',
    7: '#FFC700',
    8: '#FFC727',
  },
  blue: {
    1: '#8AB9FF',
    2: '#3C81EA',
    3: '#1C61CA',
    4: '#003D9A',
  },
  purple: {
    1: '#623CEA',
    2: '#4923D2',
    3: '#3715B0',
  },
  red: {
    1: '#D92B6A',
    2: '#E20051',
    3: '#E41A3E',
    4: '#DE0F34',
    5: '#B1003F',
    6: '#AA001E',
    7: '#C45300',
  },
  brown: {
    1: '#57001F',
    2: '#4B330E',
  },
  pink: {
    1: '#FFADCB',
  },
  green: {
    1: '#7CD3A1',
    2: '#03A749',
    3: '#219653',
    4: '#006129',
    5: '#00421C',
  },
  gray: {
    1: '#FAFAFA',
    2: '#D7D7D7',
    3: '#BABABB',
    4: '#A6A6A6',
    5: '#929292',
    6: '#808080',
    7: '#5B5B5B',
    8: '#353535',
    9: '#1C1B1F',
    10: '#3D3D3D',
    11: '#3F3F3F',
    12: '#0B0B0B',
  },
};

const primary = {
  main: others.yellow[6],
};

const info = {
  main: others.blue[2],
};

const success = {
  main: others.green[3],
};

const warning = {
  main: others.yellow[6],
};

const error = {
  main: others.red[1],
};

const common = {
  black: '#000000',
  white: '#FFFFFF',
};

const text = {
  primary: others.gray[10],
  secondary: others.gray[7],
  disabled: 'rgba(91, 91, 91, 0.8)',
};

const background = {
  paper: others.gray[1],
  default: others.gray[1],
  neutral: common.white,
};

//***********************************************
// GRADIENTS
//***********************************************

const gradients = {
  gradient01: `linear-gradient(86.46deg, ${others.yellow[7]} 0%, ${others.yellow[6]} 65.35%)`,
};

//***********************************************
// COLORS
//***********************************************

const colors = {
  common: common,
  primary: primary,
  error: error,
  warning: warning,
  info: info,
  success: success,
  others: others,
  text: text,
  backgrounds: background,
};

//***********************************************
// SHADOWS
//***********************************************

const createCustomShadow = (color: string): ICustomShadowOptions => {
  const transparent = lighten(0.2, color);
  return {
    n1: `0 1px 2px 0 ${transparent}`,
    n4: `0 4px 8px 0 ${transparent}`,
    n8: `0 8px 16px 0 ${transparent}`,
    n12: `0 12px 24px -4px ${transparent}`,
    n16: `0 16px 32px -4px ${transparent}`,
    n20: `0 20px 40px -4px ${transparent}`,
    n24: `0 24px 48px 0 ${transparent}`,
    primary: `0 15px 30px 0 ${lighten(0.2, others.gray[6])}`,
    info: `0 8px 16px 0 ${lighten(0.2, colors.info.main)}`,
    success: `0 8px 16px 0 ${lighten(0.2, colors.success.main)}`,
    warning: `0 8px 16px 0 ${lighten(0.2, colors.warning.main)}`,
    error: `0 8px 16px 0 ${lighten(0.2, colors.error.main)}`,
  };
};

//***********************************************
// THEME
//***********************************************

const theme = {
  components: {
    inputs: {},
    button: {
      backgrounds: {
        gradient: `linear-gradient(180deg, ${others.yellow[7]}  0%, ${others.yellow[6]} 100%)`,
      },
    },
  },
  pallete: {
    colors: colors,
    gradients: gradients,
    shadows: {
      default: createCustomShadow(others.gray[5]),
    },
  },
};

const themeLight = { ...baseTheme, ...theme };

export default themeLight;
