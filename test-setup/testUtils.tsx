import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import primaryTheme from "../src/styles/themes/primaryTheme";
import GlobalStyle from "../src/styles/GlobalStyle";

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
