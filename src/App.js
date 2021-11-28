import React from 'react'
import {
  fetchUserRepos,
  fetchCurrentUser
} from './github_api'

import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import { Container } from '@mui/material';
// import ReposAccordionGroup from './components/ReposAccordionGroup';
import RepoList from './components/RepoList'
import UserHeader from './components/UserHeader'
import Topbar from './components/Topbar'
import { Grid, Typography } from '@material-ui/core';

function App() {
  const [currentUser, setCurrentUser] = React.useState({})
  React.useEffect(() => {
    fetchCurrentUser(setCurrentUser)
  }, [])

  const [repos, setRepos] = React.useState([])
  React.useEffect(() => {
    fetchUserRepos(setRepos)
  }, [])

  console.log(repos)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <div className="App">
        <Container maxWidth="xl">
          { Object.keys(currentUser).length > 0 && (
            <UserHeader currentUser={currentUser} />
          )}
          { repos.length > 0 && (
            <Grid container spacing={1} justifyContent="flex-start" alignItems="center" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Grid item>
                <Typography variant="h4" style={{ marginBottom: '.5rem' }}>Select A Repo:</Typography>
                <RepoList repos={repos} />
              </Grid>
              {/* <ReposAccordionGroup repos={repos} /> */}
              <Grid item>
                PR Viewer goes over here
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </ThemeProvider>

  );
}

export default App;
