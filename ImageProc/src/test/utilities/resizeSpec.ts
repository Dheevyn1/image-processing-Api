import resize from "../../utilities/resize"
import path from "path"
import { promises as fs } from "fs"

describe("Testing resize function", () => {
  it("checks if the resizing is successful", async () => {
    const file = "palmtunnel-4"
    const width = 600
    const height = 500
    const outputPhoto = path.resolve(
      __dirname,
      `../../../assets/cropped/${file}x${width}x${height}.jpg`
    )
    const resizeFunction = await resize(file, width, height)
    expect(resizeFunction).toBe(outputPhoto)
  })
})

afterAll(async () => {
  const file = "palmtunnel-4"
  const width = 600
  const height = 500
  const outputPhoto = path.resolve(
    __dirname,
    `../../../assets/cropped/${file}x${width}x${height}.jpg`
  )
  await fs.unlink(outputPhoto)
})
