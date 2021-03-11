const standardPromiseWithDelay = require("./standardPromiseWithDelay")

module.exports = {
    getPromise: async () => {
        const promiseResponse = await standardPromiseWithDelay.get()
        return promiseResponse[0]

    }
}