import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import ButtonGreen from '../ButtonGreen';
import Transition from '../Transition';
import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { GameContext } from './GameContext';
import { inputSoundUrl, playSound } from '../../utils';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { soundEnabled } = useContext(GameContext);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <ButtonGreen
        onClick={() => {
          setMenuOpen(true);
          // play sound
          if (soundEnabled) {
            playSound(inputSoundUrl);
          }
        }}
      >
        Menu ≡
      </ButtonGreen>
      <Dialog
        open={menuOpen}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="xl"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '& .MuiPaper-root': {
            background:
              'radial-gradient(60% 400px at 50% 60%, #841bad 5%, #371761 100%)',
            width: '80%', // 90% of the viewport width
            height: '80%', // 90% of the viewport height

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 'none', // Override the maxWidth to make sure it can go up to 90%
          },
        }}
      >
        <div>
          <DialogTitle
            style={{
              fontSize: 'x-large',
              color: 'white',
              fontWeight: 'bolder',
              marginBottom: '15px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            MENU
          </DialogTitle>
          <DialogContent
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <ButtonGreen onClick={handleClose}>
              Sound {soundEnabled ? 'on ' : 'off '}
              {soundEnabled && <VolumeUp />}
              {!soundEnabled && <VolumeOff />}
            </ButtonGreen>
            <ButtonGreen onClick={handleClose}>
              Music on <VolumeUp /> <VolumeOff />
            </ButtonGreen>
            <ButtonGreen onClick={handleClose}>Words found</ButtonGreen>
            <ButtonGreen onClick={handleClose}>Help</ButtonGreen>
            <ButtonGreen onClick={handleClose}>Quit</ButtonGreen>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default Menu;
