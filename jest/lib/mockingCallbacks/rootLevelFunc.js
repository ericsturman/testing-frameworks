module.exports = {
    mainFunc: function(func) {
        return func((inStr) => inStr.split("").reverse().join(""))
    }
}