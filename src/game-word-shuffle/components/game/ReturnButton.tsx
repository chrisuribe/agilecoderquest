import { Replay } from '@mui/icons-material';
import ButtonGreen from '../ButtonGreen';
import { ButtonProps } from '@mui/material';

const ReturnLetterButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <ButtonGreen {...props}>
      <Replay fontSize="large" />
    </ButtonGreen>
  );
};

export default ReturnLetterButton;
