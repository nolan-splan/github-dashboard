import React from 'react'
import { Paper, Typography, Switch, FormControlLabel } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Stack } from '@mui/material'

export default function Settings(props) {
	const { settings, setSettings } = props
	const { includeMyOwnPrs, showOldestAtTop } = settings

	console.log("Settings", settings)

	const handleChange = (event, setting) => {
		const newSettings = {
			...settings
		}

		newSettings[`${event.target.ariaLabel}`] = setting
		setSettings(newSettings)
	}

	return (
		<Paper style={{ marginTop: '1rem', marginRight: '1rem', padding: '.5rem' }}>
			<Stack spacing={2}>
				<Typography variant="h6">
					<FontAwesomeIcon icon={faCog} style={{ marginRight: '.5rem' }} />
					Settings
				</Typography>

				<FormControlLabel control={<Switch checked={includeMyOwnPrs} onChange={handleChange} inputProps={{ 'aria-label': 'includeMyOwnPrs' }} />} label="Include my own PRs" />
				<FormControlLabel control={<Switch checked={showOldestAtTop} onChange={handleChange} inputProps={{ 'aria-label': 'showOldestAtTop' }} />} label="Show oldest PRs at top" />
			</Stack>
		</Paper>
	)
}