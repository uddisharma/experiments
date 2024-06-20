import express from 'express';
import cluster from 'cluster';
import os from 'os';

const totalCPUs = os.cpus().length;
const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/api/:n', (req, res) => {
    const start = process.hrtime();
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    const end = process.hrtime(start);
    const timeTaken = (end[0] * 1e9 + end[1]) / 1e6; // convert to milliseconds

    res.send(`Final count is ${count}. Handled by process ${process.pid}. Time taken: ${timeTaken.toFixed(2)}ms`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
