import fs from 'fs';
import path from 'path';

class FileHandler {
  private storagePath: string;

  constructor(storagePath: string) {
    this.storagePath = storagePath;
  }

  uploadFile(filename: string, fileContent: Buffer) {
    const filePath = path.join(this.storagePath, filename);
    fs.writeFileSync(filePath, fileContent);
  }

  downloadFile(filename: string): Buffer {
    const filePath = path.join(this.storagePath, filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath);
    } else {
      throw new Error('File not found');
    }
  }

  deleteFile(filename: string) {
    const filePath = path.join(this.storagePath, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      throw new Error('File not found');
    }
  }

  validateFileType(filename: string, allowedTypes: string[]) {
    const fileType = path.extname(filename).slice(1);
    if (!allowedTypes.includes(fileType)) {
      throw new Error('Invalid file type');
    }
  }

  validateFileSize(fileContent: Buffer, maxSize: number) {
    if (fileContent.length > maxSize) {
      throw new Error('File size exceeds limit');
    }
  }
}

export default FileHandler;
