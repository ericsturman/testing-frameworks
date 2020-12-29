const dependency = require("../lib/dependency")

module.exports = {
    sinonMock: (id, cb) => {
        const message = dependency.dependencyMethod(id)
        if(id > 0){
            cb(null, {message: message})
        }else{
            cb("Whaaaat??!!")
        }
    }
}