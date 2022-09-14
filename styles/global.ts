import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --space-3xs: clamp(0.31rem, calc(0.29rem + 0.12vw), 0.38rem);
  --space-2xs: clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem);
  --space-xs: clamp(1.00rem, calc(0.95rem + 0.24vw), 1.13rem);
  --space-s: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem);
  --space-m: clamp(2.00rem, calc(1.90rem + 0.49vw), 2.25rem);
  --space-l: clamp(2.63rem, calc(2.48rem + 0.73vw), 3.00rem);
  --space-xl: clamp(3.94rem, calc(3.72rem + 1.10vw), 4.50rem);
  --space-2xxl: clamp(5.25rem, calc(4.96rem + 1.46vw), 6.00rem);
  --space-3xl: clamp(7.88rem, calc(7.44rem + 2.20vw), 9.00rem);

  /* One-up pairs */
  --space-3xs-2xs: clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem);
  --space-2xs-xs: clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem);
  --space-xs-s: clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem);
  --space-s-m: clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem);
  --space-m-l: clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem);
  --space-l-xl: clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem);
  --space-xl-2xl: clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem);
  --space-2xl-3xl: clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem);
  --space-2xl: clamp(5.25rem, calc(3.79rem + 7.32vw), 20.00rem);
  --space-2xxl-3xl: clamp(18.00rem, calc(11.40rem + 33.00vw), 80.00rem);
  /* Custom pairs */
  --space-s-l: clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem);
  --space-xl-xl: clamp(3.94rem, calc(2.84rem + 5.49vw), 6.75rem);
}

.flow > * + * {
  margin-top: var(--flow-space, 1em);
}

* {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
}

#root{
    margin:0 auto;
    font-size: 62.5%;
}

body{
  background-color:#FBEBDC;
}

html {
  font-size: 62.5%;
}
   html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video { 
  margin: 0; 
  padding: 0; 
  border: 0; 
  font-size: 62.5%;
  vertical-align: baseline;
} 

.container{
  position: relative;
  max-width: 120rem;
  margin-inline: auto;
  padding-inline: var(--space-xs);
  padding-top: var(--space-m);
}

.section{
  padding: var(--space-3xl) 0;
width: 100%; 
height: 100%;
}

.bg-primary{
  background-color: #A682FA;
}

input,
textarea,
select {
   all: revert;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
/* 3. Allow percentage-based heights in the application */
html, body {
  height: 100%;
}
/* Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering */
body {
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

@font-face {
  font-family: Headline;
  src: url("/font/Headline.ttf");
  format: ("opentype");
  font-display: swap;
}


@font-face {
  font-family: Open-Sans;
  src: url("/font/OpenSans-Regular.ttf");
  format: ("opentype");
  font-display: swap;
}


.flow > * + * {
  margin-top: var(--flow-space, 1em);
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
}

h1{
  line-height: 1;
}

h2{
  line-height: 1.2;
}

h3{
  line-height: 1.3;
}

p{
  line-height: 1.5;
}

`;
