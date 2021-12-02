import React from 'react'
import { Avatar, Typography, Paper } from '@material-ui/core'
import { Stack } from '@mui/material'
import { GrStatusGoodSmall } from 'react-icons/gr'

export default function UserHeader(props) {
  const { currentUser } = props

  return (
    <Paper style={{ marginTop: '1rem', padding: '.5rem', width: '95%' }}>
      <Stack direction="row" spacing={1}>
        <Avatar
          alt="avatar"
          src={currentUser.avatar_url}
          style={{ width: 30, height: 30, border: '1px solid black', borderRadius: '.5rem' }}
          variant="square"
        />

        <Typography variant="h6" style={{ marginLeft: '.5rem' }}>
          {currentUser.login}
        </Typography>
        <GrStatusGoodSmall color="#00ff00" style={{ marginTop: '0.65rem' }} />
      </Stack>
    </Paper>
  )
}