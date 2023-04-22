import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyles from "./styles/global.style"
import { ThemeProvider } from 'styled-components';
import baseTheme from './styles/theme.style';



const root = ReactDOM.createRoot(
  document.getElementById('application') as HTMLElement
);


root.render(
  <>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>

);


