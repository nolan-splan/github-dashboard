import React from 'react'
import { Avatar, Typography, Grid } from '@material-ui/core'

export default function UserHeader(props) {
  const { currentUser } = props

  return (
    <Grid container spacing={1} justifyContent="flex-start" alignItems="center" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Grid item>
        <Avatar
          alt="avatar"
          src={currentUser.avatar_url}
          style={{ width: 50, height: 50, border: '1px solid black', borderRadius: '.5rem' }}
          variant="square"
        />
      </Grid>
      <Grid item>
        <Typography variant="h4" style={{ marginLeft: '1rem' }}>
          {currentUser.name} ({currentUser.login})
        </Typography>
      </Grid>
    </Grid>
  )
}