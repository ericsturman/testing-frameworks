const standardPromiseWithDelay = require("./standardPromiseWithDelay")

module.exports = {
    getFirstCharacter: async () => {
        const promiseResponse = await standardPromiseWithDelay.get()
        return promiseResponse[0]

    }
}