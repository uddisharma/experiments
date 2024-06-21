Thribute Store
===
A flexible and feature-rich storage package that supports multiple storage adapters (local, S3, GCS), encryption, and schema validation.

## Features
- **Multiple Storage Adapters:** Local filesystem, AWS S3, Google Cloud Storage
- **Data Encryption:** Encrypt and decrypt data before storing and retrieving
- **Schema Validation:** Validate data against a defined schema before storage

## Install & Dependence
Install the package via npm:

```bash
npm install thribute-store
```



## Configuration
Create a config.ts file to manage your configuration settings.
```javascript
// config.ts
export const localConfig = {
  storagePath: './local-storage',
};

export const s3Config = {
  bucketName: 'your-s3-bucket',
  region: 'your-region',
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
};

export const gcsConfig = {
  bucketName: 'your-gcs-bucket',
  projectId: 'your-project-id',
  clientEmail: 'your-client-email',
  privateKey: 'your-private-key',
};

```


## Usage
### Initializing the Storage
```javascript
import Storage from 'thribute-store';
import { localConfig, s3Config, gcsConfig } from './config';

const encryptionKey = 'your-encryption-key';

// For local storage
const localStorage = new Storage('local', localConfig, encryptionKey);

// For AWS S3 storage
const s3Storage = new Storage('s3', s3Config, encryptionKey);

// For Google Cloud Storage
const gcsStorage = new Storage('gcs', gcsConfig, encryptionKey);
  ```

  ### Storing Data
```javascript
const filename = 'data.json';
const data = { name: 'John Doe', age: 30 };

await localStorage.storeData(filename, data);
await s3Storage.storeData(filename, data);
await gcsStorage.storeData(filename, data);

  ```

### Retrieving Data
```javascript
const retrievedDataLocal = await localStorage.retrieveData(filename);
const retrievedDataS3 = await s3Storage.retrieveData(filename);
const retrievedDataGCS = await gcsStorage.retrieveData(filename);

console.log(retrievedDataLocal); // { name: 'John Doe', age: 30 }
console.log(retrievedDataS3); // { name: 'John Doe', age: 30 }
console.log(retrievedDataGCS); // { name: 'John Doe', age: 30 }
  ```

  ### Updating Data
```javascript
const updatedData = { age: 31 };

await localStorage.updateData(filename, updatedData);
await s3Storage.updateData(filename, updatedData);
await gcsStorage.updateData(filename, updatedData);
  ```

### Deleting Data
```javascript
await localStorage.deleteData(filename);
await s3Storage.deleteData(filename);
await gcsStorage.deleteData(filename);
  ```


## Storage Adapters
 The storage package provides multiple 
 storage adapters, allowing you to choose the appropriate storage backend based on your needs.

- Local Adapter: Stores data on the local filesystem.
- AWS S3 Adapter: Stores data in an AWS S3 bucket.
- Google Cloud Storage Adapter: Stores data in a Google Cloud Storage bucket.
## Data Encryption
Data encryption is crucial for protecting sensitive information. The storage package uses AES-256-CTR for encryption and decryption, ensuring your data is secure.

## Schema Validation
Schema validation ensures that the data being stored meets the predefined structure. This package uses Joi for schema validation, making it easy to enforce data integrity.

## Example
Here’s a full example demonstrating how to use the storage package.
```javascript
import Storage from 'thribute-store';
import { localConfig } from './config';

const encryptionKey = 'your-encryption-key';
const storage = new Storage('local', localConfig, encryptionKey);

const filename = 'user-data.json';
const userData = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
};

// Storing data
await storage.storeData(filename, userData);

// Retrieving data
const retrievedData = await storage.retrieveData(filename);
console.log(retrievedData); // { name: 'Alice', email: 'alice@example.com', age: 25 }

// Updating data
const updatedData = { age: 26 };
await storage.updateData(filename, updatedData);

// Deleting data
await storage.deleteData(filename);

```

## License

This `README.md` file provides a detailed overview of the storage package, including installation instructions, configuration, and usage examples for different storage adapters. It also explains the theory behind the package, making it easier for users to understand its functionality and purpose.


## Author
- Name : Deepak Sharma
- Email : uddibharwaj08@gmail.com



