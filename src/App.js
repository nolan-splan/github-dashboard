import React from 'react'
import {
  fetchUserRepos,
  fetchCurrentUser
} from './github_api'

import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
// import ReposAccordionGroup from './components/ReposAccordionGroup';
import RepoList from './components/RepoList'
import UserHeader from './components/UserHeader'
import Topbar from './components/Topbar'
import { Grid, Paper } from '@material-ui/core';
import RepoViewer from './components/RepoViewer';

function App() {
  const [currentUser, setCurrentUser] = React.useState({})
  const [repos, setRepos] = React.useState([])
  const [selectedRepo, setSelectedRepo] = React.useState("pods")

  React.useEffect(() => {
    fetchCurrentUser(setCurrentUser)
  }, [])

  React.useEffect(() => {
    fetchUserRepos(setRepos)
  }, [])

  const handleRepoClicked = (event, repo) => {
    setSelectedRepo(repo)
  }

  console.log('Selected Repo: ', selectedRepo)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          { Object.keys(currentUser).length > 0 && (
            <UserHeader currentUser={currentUser} />
          )}

          { repos.length > 0 && (
            <RepoList repos={repos} selectedRepo={selectedRepo} onRepoClicked={handleRepoClicked} />
          )}
        </Grid>
        <Grid item xs={6}>
          <RepoViewer repo={repos.filter(repo => repo.name === selectedRepo)[0] || {}} />
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ marginTop: '1rem', marginRight: '1rem', padding: '1rem' }}>
            Settings
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
