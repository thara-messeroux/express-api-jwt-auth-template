# express-api-jwt-auth-template

This project is an Express API that teaches JWT authentication basics.  
It shows how to create users, sign users in, generate tokens, verify tokens, and protect private routes.

## What this project does

- Sets up an Express backend server
- Connects the app to MongoDB
- Creates sign-up and sign-in routes
- Uses JWTs to authenticate users
- Protects routes so only authorized users can access them

## Concepts practiced

- Express server setup
- Environment variables
- MongoDB and Mongoose
- JWT authentication
- Password hashing
- Middleware
- Protected routes
- Authentication vs authorization

### How to Run

1. Create the project folder and enter it with `mkdir express-api-jwt-auth-template` and `cd express-api-jwt-auth-template`
2. Create starter files with `touch server.js .env .gitignore`
3. Initialize the project with `npm init -y`
4. Install dependencies with `npm i express mongoose dotenv morgan cors`
5. Install dev dependency with `npm i -D nodemon`
6. Start the server with `npm run dev`
7. Open `http://localhost:3000` in the browser


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

---

## Step 2 🦉 Understand authentication basics

- Learned the difference between authentication and authorization
- Learned what a JWT is and why apps use it
- Understood how token-based login works in an Express API

### Why it matters
- Authentication checks who the user is
- Authorization checks what the user can access
- JWTs help the server trust future requests without asking for login every time

### Engineering principle used
- Security → protects private data and routes
- Separation of concerns → auth logic and route logic stay organized
- Reusability → token verification can be reused across many routes
