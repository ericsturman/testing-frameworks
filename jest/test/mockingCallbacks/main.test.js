const main = require("../../lib/mockingCallbacks/main")
const rootLevelFunc = require("../../lib/mockingCallbacks/rootLevelFunc")

describe("mockingCallbacks", () => {
    // let rootLevelFuncMock
    // beforeEach(() => {
    //     rootLevelFuncMock = jest.spyOn(rootLevelFunc, "mainFunc")
    // })
    afterEach(() => jest.clearAllMocks())
    test("main", () => {
        const rootLevelFuncMock = jest.spyOn(rootLevelFunc, "mainFunc")
        rootLevelFuncMock.mockImplementation(() => {
            return "bogus"
        })
        const result = main("things")
        console.info(">>>>>", result)

    })
})