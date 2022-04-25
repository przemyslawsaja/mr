import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/MainTheme';
import GlobalStyle from '../theme/GlobalStyles';
import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Votes } from './Votes/Votes';
import { VotesDetails } from './VoteDetails/VoteDetails';
import { CreateVote } from './CreateVote/CreateVote';

export enum ApplicationRoutePaths {
  HOME = '/',
  VOTES = '/votes',
  VOTES_DETAILS = '/votes/:id',
  CREATE_VOTE = '/vote/create',
}

export const Root = observer(() => {
  return <ThemeProvider theme={ theme }>
    <BrowserRouter>
      <Routes>
        <Route path={ ApplicationRoutePaths.HOME } element={ <Home/> }/>
        <Route path={ ApplicationRoutePaths.VOTES } element={ <Votes/> }/>
        <Route path={ ApplicationRoutePaths.VOTES_DETAILS } element={ <VotesDetails/>  }/>
        <Route path={ ApplicationRoutePaths.CREATE_VOTE } element={ <CreateVote/> }/>
      </Routes>
    </BrowserRouter>
    <GlobalStyle/>
    <ToastContainer/>
  </ThemeProvider>
})
