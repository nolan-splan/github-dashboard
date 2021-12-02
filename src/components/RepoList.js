import { Badge, List, ListItemText } from '@material-ui/core'
import { ListItemButton, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

export default function RepoList(props) {
  const { repos, onRepoClicked, selectedRepo, pulls } = props
  return (
    // <List component="nav" aria-label="main repo list">

    //   <Paper style={{ backgroundColor: '#424242', color: '#fff', marginLeft: '1rem', marginTop: '1rem' }}>
    //     { repos.length > 0 && repos.map(repo => (
    //       <ListItemButton
    //         selected={selectedRepo === repo.name}
    //         onClick={(event) => onRepoClicked(event, repo.name)}
    //         key={repo.id}
    //       >
    //         <ListItemText primary={repo.name} />
    //       </ListItemButton>
    //     ))}
    //   </Paper>
    // </List>

  <ToggleButtonGroup
    value={selectedRepo}
    exclusive
    onChange={(event) => onRepoClicked(event, 'foo')}
    aria-label="selectedRepo"
    orientation="vertical"
    style={{ width: '95%', marginLeft: '1rem', marginTop: '1rem' }}
  >
    { repos.map(repo => (
      <ToggleButton key={repo.id} value={repo.name} aria-label={repo.name} color="secondary" fullWidth sx={{ fontWeight: 'bold', color: 'primary.main', borderColor: 'primary.main' }}>{repo.name}</ToggleButton>
    ))}
  </ToggleButtonGroup>
  )
}