const chai = require("chai");
const chaiHttp = require("chai-http");

const { givenAsync } = require("mocha-testdata");

const { app, close } = require("../index");
const { expect } = chai;

chai.use(chaiHttp);

describe("API", () => {
  after((done) => {
    close();
    done();
  });

  describe("GET /ping", () => {
    it("Should return 200 OK", (done) => {
      chai
        .request(app)
        .get("/ping")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
