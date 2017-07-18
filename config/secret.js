module.exports = {
	database: process.env.MONGODB, //'mongodb://localhost:27017/test',
	port: process.env.PORT || 3000,
	secretKey: 'LKSJ&%$#XFE',
	facebook:{
		clientID: process.env.FACEBOOK_ID || '<facebook_id>',
		clientSecret: process.env.FACEBOOK_SECRET || '<facebook_secret_key>',
		profileFields: ['emails','displayName'],
		callbackURL: 'https://localhost/auth/facebook/callback'
	}
}
