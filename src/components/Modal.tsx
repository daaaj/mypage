import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

type ModalProps = {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ children, ...props }: ModalProps) {
  const outside = useRef(null);

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const outsideClickHandler = (e: React.MouseEvent) => {
    if (outside.current === e.target) {
      props.isClose();
    }
  };

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [props.isOpen]);

  return (
    <>
      {props.isOpen && (
        <ModalWrapper ref={outside} onClick={outsideClickHandler} variants={backdropVariants} initial="hidden" animate="visible" exit="hidden">
          <ModalContainer variants={modalVariants} initial="hidden" animate={'visible'} exit={'exit'}>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </ModalWrapper>
      )}
    </>
  );
}

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.747);
`;

const ModalContainer = styled(motion.div)`
  z-index: 900;
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 20px;
  width: 90%;
  height: 90%;
  overflow: hidden;
  box-shadow: 0rem 0px 30px 5px #ffffff1d;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;
