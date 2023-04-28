import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyles from "./styles/global.style"
import { ThemeProvider } from 'styled-components';
import baseTheme from './styles/theme.style';
import { Provider } from 'react-redux';
import { store } from './store/store';



const root = ReactDOM.createRoot(
  document.getElementById('application') as HTMLElement
);


root.render(
  <>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>

);


