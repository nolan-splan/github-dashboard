import { List, ListItemText } from '@material-ui/core'
import { ListItemButton, Paper } from '@mui/material'
import React from 'react'

export default function RepoList(props) {
  const { repos, onRepoClicked, selectedRepo } = props

  return (
    <List component="nav" aria-label="main repo list">

      <Paper style={{ backgroundColor: '#424242', color: '#fff', marginLeft: '1rem', marginTop: '1rem' }}>
        { repos.length > 0 && repos.map(repo => (
          <ListItemButton
            selected={selectedRepo === repo.name}
            onClick={(event) => onRepoClicked(event, repo.name)}
            key={repo.id}
          >
            <ListItemText primary={repo.name} />
          </ListItemButton>
        ))}
      </Paper>
    </List>
  )
}