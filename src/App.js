import React from 'react'
import { fetchUserRepos, fetchCurrentUser } from './github_api'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import RepoList from './components/RepoList'
import UserHeader from './components/UserHeader'
import { Grid, Paper, Typography } from '@material-ui/core';
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Paper style={{ marginTop: '1rem', marginRight: '1rem', padding: '.5rem' }}>
            <Typography variant="h6">
              Settings
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
