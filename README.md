# GitHub User Search App

This demo app is written by [Shakeel Ahmed](https://ishakeel.com).

## About App

This is a simple app written in TypeScript using the ReactJS framework to fetch GitHub users' data
from the GitHub Server. It will give you details that are a little time-consuming to search
related to GitHub users like personal blogs, Twitter accounts, email, etc.

### Redux

Redux is used to manage site wide states basically to maintain search results criteria.

### GitHub API

Data related to GitHub user profiles is fetched by implementing GitHub API.

## How to search GitHub user profiles?

It's quite simple in the landing page you will see a search bar type the user name you want to search and
hit enter or the Go Arrow icon on the right side of the bar. App will connect to GitHub server and fetch
all the matching profiles.


## How to limit the search results per page?

It's easy, change the **config.perPage** object value in the file **root/modules/config.ts** to any number you desire. It's best if you use any
number which can be divided by 4.

## Online App Demo

[https://github-users.ishakeel.com](https://github-users.ishakeel.com)