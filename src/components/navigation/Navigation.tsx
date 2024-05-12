import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Button component={Link} to="/login" variant="contained" color="primary">
        Login
      </Button>
      <Button component={Link} to="/user" variant="contained" color="primary">
        User Page
      </Button>
      <Button component={Link} to="/admin" variant="contained" color="primary">
        Admin Page
      </Button>
      <Button
        component={Link}
        to="/games/word-shuffle-world"
        variant="contained"
        color="primary"
      >
        Word Shuffle World
      </Button>
      <Button component={Link} to="/dbfinder" variant="contained" color="primary">
        Db Finder
      </Button>
    </div>
  );
};

export default Navigation;
