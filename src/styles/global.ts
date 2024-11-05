import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow-dark: #c47f17;
    --yellow: #dbac2c;
    --yellow-light: #f1e9c9;

    --purple-dark: #4b2995;
    --purple: #8047f8;
    --purple-light: #ebe5f9;

    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574f4d;
    --base-label: #8d8686;
    --base-hover: #d7d5d5;
    --base-button: #e6e5e5;
    --base-input: #ededed;
    --base-card: #f3f2f2;
    --background: #fafafa;
    --white: #ffffff;

    --fs-title-xl: 3rem;
    --fs-title-l: 2rem;
    --fs-title-m: 1.5rem;
    --fs-title-s: 1.25rem;
    --fs-title-xs: 1.125rem;

    --fs-text-l: 1.25rem;
    --fs-text-m: 1rem;
    --fs-text-s: 0.875rem;
    --fs-text-xs: 0.75rem;
    
    --ff-sans-roboto: 'Roboto', sans-serif;  
    --fw-extrabold: 'bolder';
    --fw-bold: 'bold';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-sans-roboto);
  }
`;
