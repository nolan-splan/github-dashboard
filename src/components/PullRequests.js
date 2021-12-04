import { Avatar, Chip, Link, Paper, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import { GoGitPullRequest } from 'react-icons/go'
import moment from 'moment'

function filterPullRequests(settings, pulls, currentUser) {
	const { excludeMyPrs, excludeWip } = settings
	let filteredPulls = pulls

	if (excludeMyPrs) {
		filteredPulls = filteredPulls.filter(pull => pull.assignee.login !== currentUser.login)
	}

	if (excludeWip) {
		filteredPulls = filteredPulls.filter(pull => !pull.labels.some(label => label.name === "WIP"))
	}

	return filteredPulls
}

export default function PullRequests(props) {
	const { pulls, settings, currentUser } = props
	const filteredPulls = filterPullRequests(settings, pulls, currentUser)
	return (
		<Stack spacing={2} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
			{ filteredPulls.length > 0 ? filteredPulls.map(pull => (
				<Paper key={pull.id} style={{ padding: '1rem' }}>
					<Stack direction="row" spacing={1}>
						<Typography variant="h5">
							<GoGitPullRequest style={{ marginRight: '.25rem', color: '#3fb950', fontSize: 'larger' }} />
						</Typography>
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
						<Typography variant="h6">
							Opened {moment(pull.created_at).fromNow()} by:
						</Typography>
						<Avatar
							alt="avatar"
							src={pull.assignee.avatar_url}
							style={{ width: 20, height: 20, marginTop: '.5rem', borderRadius: '.5rem' }}
							variant="square"
						/>
						<Typography variant="h6">
							{ pull.assignee.login }
						</Typography>
					</Stack>
				</Paper>
			)) : (
				<Paper style={{ padding: '1rem' }}>
					<Typography variant="h4">No soup for you!</Typography>
					<Typography variant="body1">Try changing your settings?</Typography>
				</Paper>
			)}
		</Stack>
	)
}