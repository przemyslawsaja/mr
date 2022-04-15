import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/MainTheme';
import { Dashboard } from './Dashboard/Dashboard';
import GlobalStyle from '../theme/GlobalStyles';
import { Logo } from '../components/Logo/Logo';
import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Root = observer(() => {
  return <ThemeProvider theme={ theme }>
    <Logo/>
    <Dashboard/>
    <GlobalStyle/>
    <ToastContainer />
  </ThemeProvider>
})
