import "styled-components";
import { PrimaryTheme } from "./src/styles/themes/primaryTheme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends PrimaryTheme {}
}
