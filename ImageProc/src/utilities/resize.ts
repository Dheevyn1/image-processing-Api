import sharp from "sharp"
import path from "path"
import fs from "fs"

// A Function to resize Images
const resize = async (file: string, width: number, height: number) => {
  try {
    const inputPhoto = path.resolve(
      __dirname,
      `../../assets/images/${file}.jpg`
    )
    const outputPhoto = path.resolve(
      __dirname,
      `../../assets/cropped/${file}x${width}x${height}.jpg`
    )

    // Cache Block
    if (await fs.existsSync(outputPhoto)) {
      console.log("File exists")
      return outputPhoto
    } else {
      console.log("creating image...")
      await sharp(inputPhoto)
        .resize({ height: height, width: width })
        .toFormat("jpeg")
        .toFile(outputPhoto)
      return outputPhoto
    }
  } catch {
    // ("Error Creating File Path")
    console.log("error while creating file path")
    return null
  }
}

export default resize
