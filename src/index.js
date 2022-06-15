const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const handlebars = require('express-handlebars')
const path = require('path')

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log('Server started'))