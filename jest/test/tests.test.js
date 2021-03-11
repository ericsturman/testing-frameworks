const delayReturnTrue = require("../lib/standardPromiseWithDelay")
const callPromise = require("../lib/callPromise")
const someModule = require("../lib/someModule")

describe("assorted tests", () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it("testing to see if you can await inside an if statement predicate", async () => {
        expect(await callPromise()).toEqual(true)
    })

    it("testing mocking out a module with a spy", async () => {
        const mockDelayReturn = jest.spyOn(delayReturnTrue, "get")
        mockDelayReturn.mockImplementationOnce(() => "things")
        expect(await someModule.getPromise()).toEqual("t")
    })
})  