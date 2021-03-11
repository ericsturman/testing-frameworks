module.exports = {
    get: async () => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve("stuff")
            }, 500);
        })
    }
}