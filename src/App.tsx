import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import themes from './styles/theme';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.themeLight}>
      <GlobalStyle />
      <Router>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
