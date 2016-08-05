# WishHarder

Welcome to my full-stack web app, inspired by Kickstarter.

![Cover photo](/cover-shot.png)

WishHarder is a crowdfunding app with all the familiar features of Kickstarter. It's sharp UI and single-page architecture were built with React.js, Ruby on Rails and Postgres.
[Have a look here!][heroku]

[heroku]: http://www.wishharder.com

## Features and their Features

### Authentication

- Allows faster login and signup with front-end authentication
- Ensures user security and protects sensitive user data with BCrypt password hashing and SecureRandom token generation


### Search

- Search field struts onto the navbar on click from off stage right
- Displays search results dynamically in drop-down pane
- Implements sleek, hand-rolled search pagination... "UX, meet UI"
- Executes search on the front-end, drawing results from the same React store that populates the index
  - Excludes inactive projects from search pool on the backend, allowing front-end search to run at blazing speed

![Search pane](/search-pane.png)




- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Projects
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Backing projects & rewards
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Search
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Categories/ Discover feature
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md
