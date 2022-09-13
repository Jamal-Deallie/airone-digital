// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    view: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    flex: {
      column: string;
      row: string;
    };
    fontFamily: {
      heading: string;
      body: string;
    };
  }
}
