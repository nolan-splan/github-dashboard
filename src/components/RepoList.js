import { Box, List, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import React from 'react'

export default function RepoList(props) {
  const { repos } = props
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClicked = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <List component="nav" aria-label="main repo list">
        { repos.length > 0 && repos.map(repo => (
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClicked(event, 0)}
            key={repo.id}
          >
            <ListItemText primary={repo.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}