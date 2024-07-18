import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ButtonBase from '@mui/material/ButtonBase';

const songs = [
  {
    title: "Live From Space",
    artist: "Mac Miller",
    src: "/podcast/music/song.mp3",
    cover: "/podcast/cards/alok1.jpg"
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    src: "/podcast/music/song.mp3",
    cover: "/podcast/cards/alok2.jpg"
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/podcast/music/song.mp3",
    cover: "/podcast/cards/alok3.jpg"
  },
];

export default function MediaCard() {
  const theme = useTheme();
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(new Audio(songs[currentSongIndex].src));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    audioRef.current.pause();
    const nextSong = (currentSongIndex + 1) % songs.length;
    audioRef.current = new Audio(songs[nextSong].src);
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    audioRef.current.pause();
    const prevSong = (currentSongIndex - 1 + songs.length) % songs.length;
    audioRef.current = new Audio(songs[prevSong].src);
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Update the audio reference when the song changes
  React.useEffect(() => {
    audioRef.current = new Audio(songs[currentSongIndex].src);
    if (isPlaying) {
      audioRef.current.play();
    }

    // Cleanup on component unmount
    return () => {
      audioRef.current.pause();
    };
  }, [currentSongIndex]);

  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ width: 151,height:100 }}
        image={songs[currentSongIndex].cover}
        alt={songs[currentSongIndex].title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {songs[currentSongIndex].title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {songs[currentSongIndex].artist}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton onClick={handlePrevious} aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton onClick={handlePlayPause} aria-label="play/pause">
              {isPlaying ? (
                <PauseIcon sx={{ height: 38, width: 38 }} />
              ) : (
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              )}
            </IconButton>
            <IconButton onClick={handleNext} aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
