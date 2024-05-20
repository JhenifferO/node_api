const { databaseConnection } = require('../config/db')

const getDataCollection = async () => {

    const db = await databaseConnection()

    return db.collection('jhe')
}

module.exports = {
    getDataCollection,
}