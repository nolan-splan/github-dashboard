import React from 'react'
import { Accordion, Typography, AccordionSummary, AccordionDetails, List, ListItem, ListSubheader, Button } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

import { fetchPullsForRepo } from '../github_api'

export default function ReposAccordionGroup(props) {
  const [expanded, setExpanded] = React.useState(false)
  const [pulls, setPulls] = React.useState([])

  const handleChange = (repo) => (event, isExpanded) => {
    isExpanded && fetchPullsForRepo(repo, setPulls)
    setExpanded(isExpanded ? repo : false)
  }

  const { repos } = props

  console.log('repos: ', repos)
  return (
    <React.Fragment>
      { repos.length > 0 && repos.map(repo => (
        <Accordion key={repo.id} expanded={expanded === repo.name} onChange={handleChange(repo.name)}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
            aria-controls={`${repo.name}bh-content`}
            id={`${repo.name}bh-header`}
          >
            <Typography variant="h5">
              {repo.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              aria-labelledby="pull-requests-subheader"
              subheader={
                <ListSubheader component="div" id="pull-requests-subheader">Open Pull Requests</ListSubheader>
              }>
              { pulls.length > 0 && pulls.map(pull => (
                <ListItem key={pull.id}>
                  <Button href={pull.html_url}>{pull.title}</Button>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </React.Fragment>
  )
}