const rootLevelFunc = require("./rootLevelFunc")

module.exports = (input) => {
    const result = rootLevelFunc.mainFunc((reverse) => {
        return reverse(input)
    })
    return result.concat("stuff")
}