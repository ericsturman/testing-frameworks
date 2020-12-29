const sinonTest = require("../lib/sinon")
const dependency = require("../lib/dependency")
const sinon = require("sinon")
const expect = require("chai").expect

describe("testing sinon mocks", () => {
    it("...", (done) => {
        const dependencyStub = sinon.stub(dependency, "dependencyMethod").returns("stub message!")
        sinonTest.sinonMock(2, (err, result) => {
            expect(result.message).to.equal("stub message!")
        })
        sinonTest.sinonMock(0, (err, result) => {
            expect(err).to.equal("Whaaaat??!!")
        })
        done()
    })
})