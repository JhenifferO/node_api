const model = require('../models/model')

const get = async (req, res) => {
    try {

        const dataCollection = await model.getDataCollection()
        const data = await dataCollection.find({}).toArray()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    } catch (error) {
        res.end(JSON.stringify({ error: 'Not found get' }))
    }
}

module.exports = {
    get,
}

