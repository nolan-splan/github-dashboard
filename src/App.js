import React from 'react'
import { fetchUserRepos, fetchCurrentUser, fetchPullsForRepo } from './github_api'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import RepoList from './components/RepoList'
import UserHeader from './components/UserHeader'
import { CircularProgress, Grid } from '@material-ui/core'
import Settings from './components/Settings'
import PullRequests from './components/PullRequests'

function App() {
  const [currentUser, setCurrentUser] = React.useState({})
  const [repos, setRepos] = React.useState([])
  const [selectedRepo, setSelectedRepo] = React.useState("pods")
	const [pulls, setPulls] = React.useState([])
  const [settings, setSettings] = React.useState({
    includeMyOwnPrs: true,
    showOldestAtTop: true
  })

  React.useEffect(() => {
    fetchCurrentUser(setCurrentUser)
  }, [])

  React.useEffect(() => {
    fetchUserRepos(setRepos)
  }, [])

  React.useEffect(() => {
		if (Object.keys(selectedRepo).length > 0) {
			fetchPullsForRepo(selectedRepo, settings, setPulls)
		}
	}, [selectedRepo, settings])

  const handleRepoClicked = (event, repo) => {
    setSelectedRepo(event.target.ariaLabel)
  }

  const handleSettingsChanged = (newSettings) => {
    setSettings(newSettings)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          { repos.length > 0 && (
            <RepoList repos={repos} pulls={pulls} selectedRepo={selectedRepo} onRepoClicked={handleRepoClicked} />
          )}
        </Grid>
        <Grid item xs={8}>
          { Object.keys(selectedRepo).length > 0 && (
            <React.Fragment>
              { pulls.length > 0 ? (
                <PullRequests pulls={pulls} />
              ) : (
                <CircularProgress />
              )}
            </React.Fragment>
          )}
        </Grid>
        <Grid item xs={2}>
          { Object.keys(currentUser).length > 0 && (
            <UserHeader currentUser={currentUser} />
          )}
          <Settings settings={settings} setSettings={handleSettingsChanged} />
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
