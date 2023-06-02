const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("App is working")
})

app.listen(console.log('App is running on port ' + 3000))