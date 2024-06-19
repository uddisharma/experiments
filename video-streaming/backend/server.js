const express = require('express');
const axios = require('axios');
const app = express();


const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/video', async (req, res) => {
    const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

    try {
        const range = req.headers.range;
        if (!range) {
            return res.status(400).send('Requires Range header');
        }

        const videoResponse = await axios.head(videoUrl);
        const videoSize = videoResponse.headers['content-length'];

        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ''));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

        const contentLength = end - start + 1;
        const headers = {
            'Content-Range': `bytes ${start}-${end}/${videoSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
            'Content-Type': 'video/mp4',
        };

        res.writeHead(206, headers);

        const videoStream = await axios({
            method: 'get',
            url: videoUrl,
            responseType: 'stream',
            headers: {
                Range: `bytes=${start}-${end}`
            }
        });

        videoStream.data.pipe(res);
    } catch (error) {
        console.error('Error fetching video:', error);
        res.sendStatus(500);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
