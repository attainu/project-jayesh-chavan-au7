import dotenv from 'dotenv'
dotenv.config()
import GridFsStorage from "multer-gridfs-storage";

export const storage = new GridFsStorage({
    url: process.env.MONGODB_ATLAS_URL || process.env.MONGODB_LOCAL_URL,
    options: { useUnifiedTopology: true },
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const fileInfo = {
            filename: file.originalname,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
      });
    }
  });