import { Avatar, Chip, Link, Paper, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'

export default function PullRequests(props) {
	const { pulls } = props

	return (
		<Stack spacing={2} style={{ marginTop: '1rem' }}>
			{ pulls.length > 0 && pulls.map(pull => (
				<Paper key={pull.id} style={{ padding: '1rem' }}>
					<Stack direction="row" spacing={1}>
						<Typography variant="h5">
							{pull.title}
						</Typography>
						<Typography variant="h5">
							<Link href={pull.html_url}>#{pull.number}</Link>
						</Typography>
						{ pull.labels.length > 0 && (
							pull.labels.map(label => (
								<Chip key={label.id} label={label.name} variant="outlined" style={{ backgroundColor: `#${label.color}20`, color: `#${label.color}`, marginLeft: 'auto' }} />
							))
						)}
					</Stack>
					<Stack direction="row" spacing={1}>
						<Avatar
							alt="avatar"
							src={pull.assignee.avatar_url}
							style={{ width: 30, height: 30, borderRadius: '.5rem' }}
							variant="square"
						/>
						<Typography variant="h6">
							{ pull.assignee.login }
						</Typography>
					</Stack>
				</Paper>
			))}
		</Stack>
	)
}