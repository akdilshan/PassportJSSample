const passport= require('passport');
const GoogleStrategy= require('passport-google-oauth20');
const secret= require('./googlesecret');


passport.use(
    new GoogleStrategy({
        //options for the google strat
        callbackURL:'/auth/google/redirect',
        clientID: secret.google.client_id,
        clientSecret:secret.google.client_secret,
        
    }, function(accessToken, refreshToken, profile, done){
        //passport callback function
        console.log(profile);
    })

);