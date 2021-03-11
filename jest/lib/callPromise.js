const delayReturnTrue = require("./delayReturnTrue")

module.exports = async () => {
    if(await delayReturnTrue() === "stuff"){
        return true
    }else{
        return false
    }
}