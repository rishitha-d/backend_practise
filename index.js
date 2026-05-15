require('dotenv').config()
const express = require('express')

const app = express()

//virtual port 

const port = 4000


const githubData = {
    
  "login": "rishitha-d",
  "id": 172618550,
  "node_id": "U_kgDOCknzNg",
  "avatar_url": "https://avatars.githubusercontent.com/u/172618550?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rishitha-d",
  "html_url": "https://github.com/rishitha-d",
  "followers_url": "https://api.github.com/users/rishitha-d/followers",
  "following_url": "https://api.github.com/users/rishitha-d/following{/other_user}",
  "gists_url": "https://api.github.com/users/rishitha-d/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rishitha-d/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rishitha-d/subscriptions",
  "organizations_url": "https://api.github.com/users/rishitha-d/orgs",
  "repos_url": "https://api.github.com/users/rishitha-d/repos",
  "events_url": "https://api.github.com/users/rishitha-d/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rishitha-d/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rishitha",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "tryna build ml pipelines",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 2,
  "following": 10,
  "created_at": "2024-06-13T15:03:40Z",
  "updated_at": "2026-04-22T17:02:51Z"

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('rishigowda')
})

app.get('/login' ,(req,res) => {
    res.send('<h1>please login at rishigowda</h1>')
})

app.get('/youtube' , (req,res) => {
    res.send('<h2>rish aur code</h2>')
})

app.get('/github' , (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})