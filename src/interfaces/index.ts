export interface GitHubConfig {
    rowSize: number;
    perPage: number | string;
    apiURL: string;
    userSearch: string;
    repoSearch: string;
    userSingle: string;
}

export interface APIUsersRes  {
    total_count: number;
    incomplete_results: boolean;
    items: Object[];
}

export interface UserData {
    name: string;
    login: string;
    id: number;
    html_url: string;
    avatar_url: string;
    url: string;
    score: number;
    type: string;
    site_admin: boolean;
    hireable: boolean;
    public_repos: number;
    followers: number;
    company: string;
}
export interface searchInitState {
    searchParameter: string;
    page: number;
}