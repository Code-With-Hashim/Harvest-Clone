require('dotenv').config()
const express = require('express')
const cors = require('cors')
const session = require('express-session');
const passport = require('passport')

require('./config/passport.config')(passport)
const { connect } = require('./config/databaseConnect')
const { authMiddleWare } = require('./middlewares/auth.middleware')
const { userRoutes } = require('./routes/user.routes')

const PORT = process.env.PORT || 4040

const app = express()
;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge : 24 * 60 * 60 * 1000 // 24 hours
    }
  }));
app.use(cors({
    origin: '*'
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', userRoutes)

app.use(authMiddleWare)

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(PORT, async () => {
    try {
        await connect;
        console.log('Database is connect successfully')
        console.log(`http://localhost:${PORT}`)
    } catch (error) {
        console.log(error)
    }

})