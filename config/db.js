require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = process.env.connection_string
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

let db
const databaseConnection = async () => {
    if (db) return db
    try {

        await client.connect()

        await client.db(process.env.db_name).command({ ping: 1 })

        console.log("You successfully connected to MongoDB!")

        return client.db(process.env.db_name)

    }
    catch (error) {
        console.dir
        console.log(error)
    }
}

module.exports = { databaseConnection }



