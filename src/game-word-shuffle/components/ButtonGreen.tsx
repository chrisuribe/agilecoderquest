import { Button, ButtonProps } from '@mui/material';

const ButtonGreen: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        fontSize: 'x-large',
        color: 'white',
        fontWeight: 'bolder',
        borderRadius: 100,
        textShadow: '0px 0px 2px #CEAC68',
        background: 'linear-gradient(180deg, #1BB12F 30%, #096B17 90%)',
        px: 4,
        textTransform: 'none',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonGreen;
