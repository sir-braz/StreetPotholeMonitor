const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

YOUR_MONGODB_URL = 'mongodb+srv://root:root@cluster0.i8a2ejt.mongodb.net/'

mongoose.Promise = global.Promise;
mongoose.connect(YOUR_MONGODB_URL, 
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

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