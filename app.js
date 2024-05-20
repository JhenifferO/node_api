const routing = require("./routes/route")
const parseBody = require("./utils/parseBody")

const requestListener = async (req, res) => {
    await parseBody(req)

    routing(req, res)

}

module.exports = requestListener