import { DefaultTheme, ThemeContext } from "styled-components";
import * as styledComponents from "styled-components/native";

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export { css, ThemeContext, ThemeProvider };
export default styled;
