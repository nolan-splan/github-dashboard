import React from 'react'
import { Avatar, Typography, Paper } from '@material-ui/core'
import { Stack } from '@mui/material'

export default function UserHeader(props) {
  const { currentUser } = props

  return (
    <Paper style={{ marginLeft: '1rem', marginTop: '1rem', padding: '.5rem' }}>
      <Stack direction="row" spacing={1}>
        <Avatar
          alt="avatar"
          src={currentUser.avatar_url}
          style={{ width: 30, height: 30, border: '1px solid black', borderRadius: '.5rem' }}
          variant="square"
        />

        <Typography variant="h6" style={{ marginLeft: '1rem' }}>
          {currentUser.name} ({currentUser.login})
        </Typography>
      </Stack>
    </Paper>
  )
}