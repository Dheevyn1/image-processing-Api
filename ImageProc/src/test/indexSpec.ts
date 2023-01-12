import app from "../index"
import supertest from "supertest"

const request = supertest(app)

describe("Testing the Api(Image) endpoint", () => {
  it("gets the api endpoints", async () => {
    const response = await request.get("/api/images")
    console.log(response.status)
    expect(response.status).toBe(200)
  })
})
