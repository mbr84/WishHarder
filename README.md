# WishHarder

Welcome to my full-stack web app, inspired by Kickstarter. It was built end to end in 2 weeks.

![Cover photo](/cover-shot.png)

WishHarder is a crowdfunding app with all the familiar features of Kickstarter. It's sharp UI and single-page architecture were built with React.js, Ruby on Rails and Postgres.
[Have a look here!][heroku]

[heroku]: http://www.wishharder.com

## Features and their Features

### Authentication

- Allows faster login and signup with front-end authentication
- Ensures user security and protects sensitive user data with BCrypt password hashing and SecureRandom token generation


### Search

- Search field struts onto the navbar onClick from off [stage right][stage]
- Displays search results dynamically in drop-down pane
- Implements sleek, hand-rolled search pagination... "UX, meet UI"

[stage]: https://en.wikipedia.org/wiki/Blocking_(stage)#Stage_directions
![Search pane](/search-pane.png)

### Taking People's Money

- Handles payment processing with Stripe payment API
- Creates customer id's via Stripe and charges account only on project success
  - (Projects are successful when funding goal is met)
- Charges customers on project success with Heroku Scheduler and Rake tasks

![payment page](/stripe-screen.png)
