import { octokit } from './octokit'

export async function fetchUserRepos(callback) {
  // const { data } = await octokit.rest.repos.listForAuthenticatedUser()
  // const { data } = await octokit.request('GET /user/repos')
  const allowedRepoNames = [
    'pods', 'neat', 'neat_reporting', 'napi', 'lablock', 'ndm-ar', 'neat-utilities', 'cci-utilities', 'podsupdog', 'nsg-utilities'
  ]
  const { data } = await octokit.rest.repos.listForOrg({org: 'ccisystems', per_page: 100})
  const filteredRepos = data.filter(repo => allowedRepoNames.includes(repo.name))
  callback(filteredRepos)
}

export async function fetchCurrentUser(callback) {
  const { data } = await octokit.request('/user')
  callback(data)
}

export async function fetchPullsForRepo(repo, callback) {
  const { data } = await octokit.rest.pulls.list({
    owner: 'ccisystems',
    repo,
    state: 'open'
  })
  console.log(data)
  callback(data)
}