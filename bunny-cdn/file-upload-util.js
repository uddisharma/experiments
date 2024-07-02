import axios from "axios";
import fs from "fs";

export const handleFileUpload = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uniqueFilename = `${Date.now()}-${file.filename}-${file.originalname}`;

  let yourStorageZone = "thribute1";
  const response = await axios.put(
    `https://sg.storage.bunnycdn.com/${yourStorageZone}/${uniqueFilename}`,
    fileStream,
    {
      headers: {
        AccessKey: "password",
      },
    }
  )

  if (response.data) {
    return `https://thribute.b-cdn.net/${uniqueFilename}`;
  } else {
    return false;
  }
};
