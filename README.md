## How to get started.

**Client**
- `cd client`
- `npm i`
- `npm run dev`

**server**
- `cd server`
- `npm i`
- `node --env-file=.env index.js`

NB. Make sure port 3000 and 3001 are available.

## Functionalities

https://github.com/rafinutshaw/twitter-auth/assets/24876640/a418ca69-a7ef-44a9-873d-191c5dcae976

In the home page the user can use twitter social login by clicking the `Login with twitter`.
The user is redirected to twitter login page and redirected with a token to our main app.
Using the token the authentication state is persisted. The user's name and profile picture is display after a successful login.

Once logged in the user can click `Logout` to clear his session and go back to the login page.
