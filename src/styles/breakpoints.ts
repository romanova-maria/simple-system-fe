/*
 * With this structure of breakpoints the app always have mobile first approach,
 * because it is starting point for media query, not ending (like max-width), so
 * dev team is forced to use mobile first
 * */

export const BREAKPOINTS = {
  tablet: "min-width: 48rem",
  desktop: "min-width: 75rem",
};

export const MIN_MOBILE_WIDTH = "320px";
