import { octokit } from './octokit'

export async function fetchUserRepos(callback) {
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

export async function fetchPullsForRepo(repo, settings, callback) {
  const { showOldestAtTop } = settings
  const { data } = await octokit.request(`/repos/ccisystems/${repo}/pulls${showOldestAtTop ? "?sort='long-running'" : ""}`)
  callback(data)
}