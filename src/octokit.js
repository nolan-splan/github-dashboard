import { Octokit } from "@octokit/rest"

export const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_KEY
})

// const { data } = await octokit.rest.repos.listForAuthenticatedUser()