const standardPromiseWithDelay = require("./standardPromiseWithDelay")

module.exports = async () => {
    if(await standardPromiseWithDelay.get() === "stuff"){
        return true
    }else{
        return false
    }
}