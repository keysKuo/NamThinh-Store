const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const handlebars = require('express-handlebars')
const path = require('path')
const UserRouter = require('./routers/UserRouter');
const CollectionRouter = require('./routers/CollectionRouter');

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/cart', (req, res) => {
    res.render('product-cart')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
app.use('/users', UserRouter);
app.use('/collections', CollectionRouter);
app.get('/about', (req, res, next) => {
    return res.render('about');
})

app.listen(port, () => console.log('Server started'))