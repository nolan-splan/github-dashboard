import React from 'react'
import { fetchPullsForRepo } from '../github_api'
import { LinearProgress } from '@material-ui/core'
import PullRequests from './PullRequests'

export default function RepoViewer(props) {
	const { repo } = props
	const [pulls, setPulls] = React.useState([])

	React.useEffect(() => {
		if (Object.keys(repo).length > 0) {
			fetchPullsForRepo(repo.name, setPulls)
		}
	}, [repo])

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