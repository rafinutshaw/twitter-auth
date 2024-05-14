const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL,
    },
    async (token, tokenSecret, profile, done) => {
      done(null, {
        id: profile.id,
        name: profile.displayName,
        photos: profile.photos,
      });
    }
  )
);
