const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mnesf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




async function run() {
    try {
      await client.connect();
      const database = client.db("Timzee");
    const products = database.collection("products");
    const userInfo = database.collection("userInfo");


    console.log(2);
    
     
      
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);






app.get('/', (req,res)=>{

    res.send('Server ready to run');

})

app.listen(port,(req,run)=>{
    console.log('listening to port', port);
})
