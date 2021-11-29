import React from 'react'
import { fetchPullsForRepo } from '../github_api'
import { LinearProgress, Paper, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import PullRequests from './PullRequests'

export default function RepoViewer(props) {
	const { repo } = props
	const [pulls, setPulls] = React.useState([])

	React.useEffect(() => {
		if (Object.keys(repo).length > 0) {
			fetchPullsForRepo(repo.name, setPulls)
		}
	}, [repo])

	console.log('repo viewer repo: ', repo)
	console.log(`pulls for repo ${repo.name}`, pulls)
	return(
		<React.Fragment>
			{ Object.keys(repo).length > 0 && (
				<React.Fragment>
					{ pulls.length > 0 ? (
						<PullRequests pulls={pulls} />
					) : (
						<LinearProgress />
					)}
				</React.Fragment>
			)}
		</React.Fragment>
	)
}