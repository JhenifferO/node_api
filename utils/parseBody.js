const parseBody = (req) => {

    return new Promise((resolve, reject) => {
        if (req.method === 'POST' || req.method === 'PUT') {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk
            })

            req.on('end', () => {
                resolve(body ? JSON.parse(body) : {})
            })

            req.on('error', () => {
                reject(new Error('Error handling request body'))
            })
        } else {
            console.log('não tenho body')
            resolve()
        }
    })
}

module.exports = parseBody
