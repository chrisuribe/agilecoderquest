import { ReactNode } from 'react';
import Draggable from 'react-draggable';

interface Props {
  children: ReactNode;
}

const MakeDraggable = ({ children }: Props) => {
  // const [activeDrags, setActiveDrags] = useState(0);
  // const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  // const [controlledPosition, setControlledPosition] = useState({
  //   x: -400,
  //   y: 200,
  // });

  // const handleDrag = (e, ui) => {
  //   const { x, y } = deltaPosition;
  //   setDeltaPosition({
  //     x: x + ui.deltaX,
  //     y: y + ui.deltaY,
  //   });
  // };

  // const onStart = () => {
  //   setActiveDrags((prevActiveDrags) => prevActiveDrags + 1);
  // };

  // const onStop = () => {
  //   setActiveDrags((prevActiveDrags) => prevActiveDrags - 1);
  // };

  // const onDrop = (e) => {
  //   setActiveDrags((prevActiveDrags) => prevActiveDrags - 1);
  //   if (e.target.classList.contains('drop-target')) {
  //     alert('Dropped!');
  //     e.target.classList.remove('hovered');
  //   }
  // };

  // const onDropAreaMouseEnter = (e) => {
  //   if (activeDrags) {
  //     e.target.classList.add('hovered');
  //   }
  // };

  // const onDropAreaMouseLeave = (e) => {
  //   e.target.classList.remove('hovered');
  // };

  // const adjustXPos = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const { x, y } = controlledPosition;
  //   setControlledPosition({ x: x - 10, y });
  // };

  // const adjustYPos = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const { x, y } = controlledPosition;
  //   setControlledPosition({ x, y: y - 10 });
  // };

  // const onControlledDrag = (e, position) => {
  //   const { x, y } = position;
  //   setControlledPosition({ x, y });
  // };

  // const onControlledDragStop = (e, position) => {
  //   onControlledDrag(e, position);
  //   onStop();
  // };

  // const dragHandlers = { onStart, onStop };

  // return <Draggable {...dragHandlers}>{children}</Draggable>;
  return <Draggable>{children}</Draggable>;
};

export default MakeDraggable;
