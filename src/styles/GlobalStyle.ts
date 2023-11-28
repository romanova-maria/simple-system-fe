import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-size: inherit;
		font-family: ${(props) => props.theme.typography.font.family.base};
	}
	body {
		#root {
      font-size: 16px;

      @media (${BREAKPOINTS.desktop}) {
        max-width: 1200px;
	      margin: auto;
      }
			
		}
	}
`;

export default GlobalStyle;
