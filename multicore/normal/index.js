import express from 'express';

const port = 3001;
const app = express();

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

  res.send(`Final count is ${count}. Time taken: ${timeTaken.toFixed(2)}ms`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
