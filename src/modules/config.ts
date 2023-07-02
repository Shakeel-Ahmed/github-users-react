import { GitHubConfig } from "../interfaces/";

const config: GitHubConfig = {
    rowSize: 2,
    perPage: 12,
    apiURL: 'https://api.github.com/',
    userSearch: 'search/users',
    repoSearch: 'search/repositories',
    userSingle: 'users/'
}

export default config;