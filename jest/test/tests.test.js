const delayReturnTrue = require("../lib/delayReturnTrue")
const callPromise = require("../lib/callPromise")

describe("assorted tests", () => {
    it("calls function that returns timed out promise", async () => {
        expect(await callPromise()).toEqual(true)
        // expect(delayReturnTrue()).toEqual(true)
    })
})