const agent = require("superagent")

module.exports = async (cb) => {
    const result = await agent.get("https://cnn.com")
    console.info("STATUS********", result.status)
    cb(null, result.status)
}