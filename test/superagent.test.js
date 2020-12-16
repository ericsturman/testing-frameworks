const superagent = require("../lib/superagent")
const { expect } = require("chai")
const nock = require("nock")

describe("testing superagent call inside of a function that uses callbacks", () => {
    it("returns the correct response through a callback", (done) => {
        superagent(1, (err, response) => {
            expect(err).to.be.null
            expect(response.body.id).to.equal(1)
            done()
        })
    })
})

describe("MOCK - testing superagent call inside of a function that uses callbacks", () => {
    // let server
    beforeEach(() => {
        // server = sinon.createFakeServer()
    })
    afterEach(() => {
        // server.restore()
    })
    it("returns the correct response through a callback using a mock", (done) => {
        nock("https://jsonplaceholder.typicode.com").get("/posts/1").reply(200, {id:12})

        superagent(1, (err, response) => {
            expect(err).to.be.null
            expect(response.body.id).to.equal(12)
            done()
        })
    })

    it("handles error returned through a callback using a mock", (done) => {
        nock("https://jsonplaceholder.typicode.com").get("/posts/1").replyWithError("WTF???!!!")

        superagent(1, (err, response) => {
            console.info('TYPEOF', err.message)
            expect(response).to.be.undefined
            expect(err.message).to.equal("WTF???!!!")
            done()
        })
    })
})