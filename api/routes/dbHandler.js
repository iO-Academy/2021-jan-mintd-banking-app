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


router.get('/:accountNumber', jsonParser, function(request, response) {

    const customerNo = request.params.accountNumber

    mongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
        console.log('Connected to MongoDB!')
        const usersCollection = client.db('mintd').collection('users')
        // const allData = await usersCollection.find({}).toArray()
        const accountNumber = await usersCollection.findOne({"customerNumber": customerNo})
        response.send(accountNumber);
    })
})

module.exports = router;