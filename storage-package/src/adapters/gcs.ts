import { Storage } from '@google-cloud/storage';

class GCSAdapter {
  private storage: Storage;
  private bucketName: string;

  constructor(bucketName: string) {
    this.storage = new Storage();
    this.bucketName = bucketName;
  }

  async storeData(filename: string, data: string) {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(filename);
    await file.save(data);
  }

  async retrieveData(filename: string): Promise<string> {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(filename);
    const [data] = await file.download();
    return data.toString('utf-8');
  }

  async deleteData(filename: string) {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(filename);
    await file.delete();
  }
}

export default GCSAdapter;
