// Creating The Server
import express from "express"
import routes from "./routes/index"

// use the Express middleware
const app = express()
// set port to 3000 port instead if not available
const port = 3000

// Use routes
app.use("/api/images", routes)

// Run server
app.listen(port, () => {
  console.log("Server is working")
})

export default app
