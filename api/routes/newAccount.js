const express = require('express');
const router = express.Router();

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


router.post('/', jsonParser, function (request, response) {

    mongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
        console.log('Connected to MongoDB!')
        const usersCollection = client.db('mintd').collection('users')
        let newUser = request.body

        let result = await usersCollection.insertOne(newUser)

        if(result.insertedCount !== 1) {
            response.status(500).send('Failed to add user')
        }

        response.send({
            success: true,
            message: 'Successfully added new User',
            statusCode: 200,
            data: []
        });
    })
});

module.exports = router;