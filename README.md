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
In the home page the user can use twitter social login by clicking the `Login with twitter`.
The user is redirected to twitter login page and redirected with a token to our main app.
Using the token the authentication state is persisted. The user's name and profile picture is display after a successful login.

Once logged in the user can click `Logout` to clear his session and go back to the login page.

![image](https://github.com/rafinutshaw/twitter-auth/assets/24876640/53d63da4-0141-4c71-82bb-9ed6f587a8ce)<br>
Fig 1: Login state

![image](https://github.com/rafinutshaw/twitter-auth/assets/24876640/22367426-407b-43c0-afd4-2f1811a51c1b)<br>
Fig 2: Logged in state
