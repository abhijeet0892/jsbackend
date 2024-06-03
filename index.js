require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "abhijeet0892",
  id: 149724127,
  node_id: "U_kgDOCOyb3w",
  avatar_url: "https://avatars.githubusercontent.com/u/149724127?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/abhijeet0892",
  html_url: "https://github.com/abhijeet0892",
  followers_url: "https://api.github.com/users/abhijeet0892/followers",
  following_url:
    "https://api.github.com/users/abhijeet0892/following{/other_user}",
  gists_url: "https://api.github.com/users/abhijeet0892/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/abhijeet0892/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/abhijeet0892/subscriptions",
  organizations_url: "https://api.github.com/users/abhijeet0892/orgs",
  repos_url: "https://api.github.com/users/abhijeet0892/repos",
  events_url: "https://api.github.com/users/abhijeet0892/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/abhijeet0892/received_events",
  type: "User",
  site_admin: false,
  name: "Abhijit Chougule",
  company: null,
  blog: "",
  location: "Pune",
  email: null,
  hireable: null,
  bio: "#react #developer",
  twitter_username: null,
  public_repos: 32,
  public_gists: 0,
  followers: 2,
  following: 7,
  created_at: "2023-11-02T20:33:53Z",
  updated_at: "2024-05-30T18:15:25Z",
};

app.get("/", (req, res) => {
  res.send("Welcome to js backend app!");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Welcome to YouTube!</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h2>abhijeetchougule</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
