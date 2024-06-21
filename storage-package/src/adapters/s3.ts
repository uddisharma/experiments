import AWS from 'aws-sdk';

class S3Adapter {
  private s3: AWS.S3;
  private bucketName: string;

  constructor(bucketName: string) {
    this.s3 = new AWS.S3();
    this.bucketName = bucketName;
  }

  async storeData(key: string, data: string) {
    await this.s3.putObject({
      Bucket: this.bucketName,
      Key: key,
      Body: data
    }).promise();
  }

  async retrieveData(key: string): Promise<string> {
    const result = await this.s3.getObject({
      Bucket: this.bucketName,
      Key: key
    }).promise();
    
    if (result.Body) {
      return result.Body.toString('utf-8');
    } else {
      throw new Error('File not found');
    }
  }

  async deleteData(key: string) {
    await this.s3.deleteObject({
      Bucket: this.bucketName,
      Key: key
    }).promise();
  }
}

export default S3Adapter;
