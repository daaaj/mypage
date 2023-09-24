import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function CircleMotion() {
  return (
    <>
      <FirstCircle
        initial={{ x: -50, y: 100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.3, repeat: Infinity, repeatType: 'reverse' }}
      ></FirstCircle>
      <SecondCircle
        initial={{ x: 100, y: 70 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      ></SecondCircle>
      <ThirdCircle
        initial={{ x: -50, y: 70 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      ></ThirdCircle>
    </>
  );
}

const FirstCircle = styled(motion.div)`
  position: absolute;
  top: -15%;
  left: -1%;
  width: 43.75rem;
  height: 43.75rem;
  background-color: ${({ theme }) => theme.color100};
  opacity: 0.8;
  border-radius: 48%;

  ${({ theme }) => theme.media.laptop`
      top: -20%;
      left: -5%;
      width: 550px;
      height: 550px;
  `}
`;

const SecondCircle = styled(FirstCircle)`
  top: 60%;
  left: 60%;
  width: 31.25rem;
  height: 31.25rem;
  background-color: ${({ theme }) => theme.color200};

  ${({ theme }) => theme.media.laptop`
      width: 400px;
      height: 400px;
  `}
`;

const ThirdCircle = styled(FirstCircle)`
  top: 40%;
  left: 78%;
  width: 18.75rem;
  height: 18.75rem;
  background-color: ${({ theme }) => theme.color300};

  ${({ theme }) => theme.media.laptop`
      width: 250px;
      height: 250px;
  `}
`;
