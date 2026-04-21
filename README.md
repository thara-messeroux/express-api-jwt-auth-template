# express-api-jwt-auth-template
## Step 1 🐢 Setup the backend foundation

- Created the project folder and starter files
- Installed Express, MongoDB tools, and dev tools
- Added the first server setup
- Connected the app to MongoDB with `.env`

### Why it matters
- This gives the app a clean starting point
- The server must work before we add auth
- `.env` keeps secret data out of the code

### Engineering principle used
- Separation of concerns → config, server, and secrets are kept organized
- Environment variables → sensitive values stay outside the main code
- Developer workflow → `nodemon` speeds up development