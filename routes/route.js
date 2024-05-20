const controller = require('../controllers/controller')

const routing = (req, res) => {

    if (req.method === 'GET') {
        controller.get(req, res)
    } else if (req.method === 'POST') {
        create(req, res)
    } else if (req.method === 'PUT') {
        update(req, res)
    } else if (req.method === 'DELETE') {
        destroy(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Not found' }))
    }
}

module.exports = routing