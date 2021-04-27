var express = require('express');
var router = express.Router();

const mongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectId
const app = express();
const jsonParser = express.json();

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {

    mongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
        console.log('Connected to MongoDB!')
        //using mongo client to get db then collection from db
        const usersCollection = client.db('mintd').collection('users')
        const allData = await usersCollection.find({}).toArray()
        // const userData = await usersCollection.find({"Customer Number": {$in:["012345678910"]}})
        // let obj = await JSON.parse(allData)
    res.send(allData);
    })
});


router.get('/:AccountNumber', function (request, response) {
// let allToDoId = request.params.id; ///from before
//     const id = objectId(request.params.id)
    // const accountNumber = request.params.accountNumber
    const accNo = request.params.BasicAccount

    mongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
        console.log('Connected to MongoDB!')
        //using mongo client to get db then collection from db
        const usersCollection = client.db('mintd').collection('users')
        // const allData = await usersCollection.find({}).toArray()
        const accountName = await usersCollection.findOne({"AccountNumber": accNo})
        // const accountName = await usersCollection.find({"AccountNumber" : { $in: ["100001"]}})
        // const accountName = await usersCollection.find({"UserName": "Test Entry"}).toArray()
        response.send(accountName);
    })


})

module.exports = router;