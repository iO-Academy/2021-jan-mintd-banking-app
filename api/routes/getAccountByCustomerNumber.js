var express = require('express');
var router = express.Router();

const mongoClient = require('mongodb').MongoClient
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

router.get('/:customerNumber', jsonParser, function(request, response) {
    const customerNo = request.params.customerNumber

    mongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
        console.log('Connected to MongoDB!')
        const usersCollection = client.db('mintd').collection('users')
        const customerData = await usersCollection.findOne({"customerNumber": customerNo})

        response.send(customerData);
    })
});

module.exports = router;