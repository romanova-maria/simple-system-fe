/*
 * Theme is an important part of design system. It should be developed in close collaboration with UI/UX team.
 * Use the same names and structure as designers have, so you can speak the same language with them.
 * Bigger schema can be divided into several files, e.g. colors, components, etc
 * Theme should also contain spacing values, typography and a base section with
 * base font-size, font-color, background-color, etc
 * */

export const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: "#DCDCDCFF",
  lightGray: "#ececec",
  darkGray: "#757474",
  blue: "#089ed3",
  red: "#c53939",
};
type Colors = Record<keyof typeof colors, string>;
type ColorValue = Colors[keyof typeof colors];

export type Palette = {
  primary: ColorValue;
  danger: ColorValue;
};
export const palette: Palette = {
  primary: colors.blue,
  danger: colors.red,
};

type Color = Colors[keyof typeof colors] | Palette;

type Typography = {
  font: {
    size: {
      base: string;
    };
    color: {
      base: Color;
    };
    family: {
      base: string;
    };
  };
};
export const typography: Typography = {
  font: {
    size: {
      base: "14px",
    },
    color: {
      base: colors.black,
    },
    family: {
      base: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
  },
};

export interface PrimaryTheme {
  typography: Typography;
  colors: Record<keyof typeof colors, string>;
  palette: Palette;
}

const theme: PrimaryTheme = {
  typography,
  colors,
  palette,
};

export default theme;
