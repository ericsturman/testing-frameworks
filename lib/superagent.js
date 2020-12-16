const agent = require("superagent")

module.exports=(id, cb) => {
    agent.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .set("Content-Type", "Application/JSON")
        .then((response) => {
            console.info("response:  ", response.body)
            cb(null, response)
        })
        .catch((err) => {
            console.info("err:  ", err)
            cb(err)
        })
}
