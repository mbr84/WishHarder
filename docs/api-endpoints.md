# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Projects

- `GET /api/projects`
  - Projects index/search
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Rewards

- `GET /api/projects/:id/rewards/new`
- `POST /api/projects/:id/rewards`
- `GET /api/projects/:id/rewards/:id`
- `PATCH /api/projects/:id/rewards/:id`
- `DELETE /api/projects/:id/rewards/:id`
- `GET /api/projects/:id/rewards`
  - index of all rewards for a project

### Rewardings

- `Not quite sure yet`

### Categories

- `GET /api/discover/`
  - In lieu of a proper index - gets all categories
- `GET /api/discover/categories/:id
