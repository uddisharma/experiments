import fs from 'fs';
import path from 'path';

class LocalAdapter {
  private storagePath: string;

  constructor(storagePath: string) {
    this.storagePath = storagePath;
  }

  storeData(filename: string, data: string) {
    const filePath = path.join(this.storagePath, filename);
    fs.writeFileSync(filePath, data);
  }

  retrieveData(filename: string): string {
    const filePath = path.join(this.storagePath, filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    } else {
      throw new Error('File not found');
    }
  }

  deleteData(filename: string) {
    const filePath = path.join(this.storagePath, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      throw new Error('File not found');
    }
  }
}

export default LocalAdapter;
