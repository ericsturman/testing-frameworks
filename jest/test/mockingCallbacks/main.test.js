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
        rootLevelFuncMock.mockImplementation((fun) => {
            return fun((x) => x[0])
        })
        const result = main("things")
        console.info(">>>>>", result)

    })
})