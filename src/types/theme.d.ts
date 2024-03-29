// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  interface Font {
    fontFamily: string;
    fontWeight?:
      | "normal"
      | "bold"
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
  }

  interface Fonts {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
  }

  export interface DefaultTheme {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: {
      primary: string;
      background: string;
      surface: string;
      accent: string;
      error: string;
      text: string;
      onSurface: string;
      disabled: string;
      placeholder: string;
      backdrop: string;
      notification: string;
      // React Navigation exclusive
      background: string;
      card: string;
      border: string;
    };
    fonts: Fonts;
    animation: {
      scale: number;
    };
  }
}

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      // myOwnColor: string;
    }

    interface Theme {
      // myOwnProperty: boolean;
    }
  }
}
