import React, { useRef, useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    videoRef.current.addEventListener('ended', () => setIsPlaying(false));
  }, []);

  return (
    <Container>
      <Box mt={4} display="flex" justifyContent="center">
        <Box>
          <video
            ref={videoRef}
            width="800"
            controls
            style={{ display: 'block', margin: 'auto' }}
          >
            <source src="http://localhost:8000/video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton onClick={handlePlayPause} color="primary">
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default VideoPlayer;
