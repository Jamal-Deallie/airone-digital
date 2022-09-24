import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: '#AC7EF3';
      secondary: '#1A1B1D';
      tertiary: '#FBEBDC';
    };
    view: {
      mobile: `(max-width: 767px)`;
      tablet: `(max-width: 1024px)`;
      desktop: `(min-width: 1025px)`;
    };
    flex: {
      column: 'display: flex; flex-direction:column; align-items: center; justify-content: space-between; ';
      row: 'display: flex; align-items: center; justify-content: space-between;';
    };
    fontFamily: {
      heading: 'font-family: Headline, sans-serif';
      body: 'font-family: Open Sans, sans-serif';
    };
  }
}

// You are also able to use a 3rd party theme this way:
// import '@emotion/react';
// import { LibTheme } from 'some-lib';

// declare module '@emotion/react' {
//   export interface Theme extends LibTheme {}
// }
