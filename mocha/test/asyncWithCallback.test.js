const { expect } = require("chai")
const asyncWithCallback = require("../lib/asyncWithCallback")

describe("asyncWithCallback", () => {
    it("calls callback after awaiting", async () => {
        await asyncWithCallback((err, result) => {
            console.log("ERR RESULT", err, result)
            expect(result).to.equal(200)
        })
        
    })
})