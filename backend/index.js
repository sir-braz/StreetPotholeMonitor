const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Server Configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb+srv://root:root@cluster0.i8a2ejt.mongodb.net/'

//MongoDb Connection
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URL, 
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

//Configure middleware
app.use(express.json())

//Global Error Handling
app.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({error: 'Internal Server Error'})
})

//Creating server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})