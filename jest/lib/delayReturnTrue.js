module.exports = async () => {
    const val = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("stuff")
        }, 500);
    })
    console.info("VAL", val)
    return val
}