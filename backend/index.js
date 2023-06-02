const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({'message': "App is working"})
})

let PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})