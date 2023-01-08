# Student App Backend - January 2023


## Set up basic Express.js server
```
npm init
```

build a web server
Create a file `app.js`

```
npm install express
```
Create a new file `server.js`

add script to package.json:
`"start": "node server.js",`

## Deploy backend to fly.io
[fly.io](https://fly.io/);

Run a Node App
https://fly.io/docs/languages-and-frameworks/node/

Our installation guide
https://fly.io/docs/hands-on/install-flyctl/

1. Install flyctl
```
brew install flyctl
```

2. Sign Up
(I'm already signed up)
```
flyctl auth signup
```

3. Sign In
```
flyctl auth login
```
opens in browser - sign up with free hobby plan

4. Launch App
```
flyctl launch --image flyio/hellofly:latest
```
To create more than 2 apps please add a payment method.

*Asking for payment method -> not continuing*

5. Check App Status

6. Visit App


## Deploying backend with Adaptable.io
[Adaptable.io](https://adaptable.io/)

Sign in with GitHub
Give Adaptable.io access to repository
Add GitHub repository with node.js/postgreSQL
