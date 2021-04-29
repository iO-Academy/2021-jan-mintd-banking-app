var express = require('express');
var router = express.Router();

const mongoClient = require('mongodb').MongoClient
const app = express();
const jsonParser = express.json();
const objectId = require('mongodb').ObjectId

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.put('/:accountNumber', jsonParser, function(request, response) {
    const accountNumber = parseInt(request.params.accountNumber)
    const customerNo = sessionStorage.getItem("customerNumber")
    let amountSent = sessionStorage.getItem("amountSent")
    // const customerNo = "012345678910"

    // let amountSent = 666
    mongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
        console.log('Connected to MongoDB!')
        const usersCollection = client.db('mintd').collection('users')
        const {accountsArray, _id} = await usersCollection.findOne({"customerNumber": customerNo}, {accounts: true, _id: true})

        let updated = false
        for(let i=0; i<accountsArray.length; i++)
        {
            console.log(accountsArray[i])
            if(accountsArray[i].account.accountNumber === accountNumber) {
                accountsArray[i].account.balance += amountSent
                accountsArray[i].account.transactionHistory.push({
                    "transactionId": accountsArray[i].account.transactionHistory.length + 1,
                    "time": new Date().toLocaleDateString(),
                    "date": new Date().toLocaleTimeString(),
                    "amount": amountSent,
                    "from": "",
                    "to": ""
                })

                updated = true
            }
        }
        if( updated ) {
            console.log('updated')
            const customerAccountData = await usersCollection.updateOne({ _id}, { $set : {accountsArray}})
        } else {
            console.log('whoops')
            response.send({
                statusCode: 304
            })
            return
        }

        response.send({
            success: true,
            message: `Successfully added ${amountSent}`,
            statusCode: 200,
            data: []
        });
    })
});

module.exports = router;