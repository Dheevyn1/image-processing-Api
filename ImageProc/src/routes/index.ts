import express from "express"
import resize from "../utilities/resize"

//Routing with query requests
const routes = express.Router()

routes.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const file = req.query.file
      const width = Number(req.query.width)
      const height = Number(req.query.height)

      const image = await resize(file as string, width, height)
      console.log("Loading file")
      res.sendFile(image as string)
    } catch {
      console.log(
        "Unable to Reshape image - inspect the URL file, width, and height values..."
      )
      res.send(
        "Not able to reshape image - inspect the URL file, width, and height values..."
      )
    }
  }
)

export default routes
