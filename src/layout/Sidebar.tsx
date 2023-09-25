import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import { sizes } from 'style/Media';
import useScrollToElem from 'hooks/useScrollToElem';
import { isShowSidebariAtom } from 'store/atoms';
import { RxDoubleArrowLeft } from 'react-icons/rx';

export default function Sidebar() {
  const [isShow, setIsShow] = useRecoilState(isShowSidebariAtom);
  const outside = useRef(null);
  const onScrollToElement = useScrollToElem();
  const laptop = useMediaQuery({ maxWidth: sizes.laptop });

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    visible: { opacity: 1, x: '0', transition: { duration: 0.2 } },
    hidden: { opacity: 1, x: '-100%', transition: { duration: 0.2 } },
    exit: { opacity: 1, x: '-100%', transition: { duration: 0.2 } },
  };

  const outsideClickHandler = (e: React.MouseEvent) => {
    if (outside.current === e.target) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    if (!laptop) {
      setIsShow(false);
    }
  }, [isShow, laptop]);

  return (
    <>
      <AnimatePresence>
        {isShow && (
          <SidebarWrapper ref={outside} onClick={outsideClickHandler} variants={backdropVariants} initial="hidden" animate="visible" exit="hidden">
            <SidebarContainer variants={modalVariants} initial="hidden" animate={'visible'} exit={'exit'}>
              <IconBox>
                <CloseIcon onClick={() => setIsShow(false)} />
              </IconBox>
              <div>
                <NavListBox>
                  <li
                    onClick={() => {
                      onScrollToElement('profile');
                      setIsShow(false);
                    }}
                  >
                    PROFILE
                  </li>
                  <li
                    onClick={() => {
                      onScrollToElement('skills');
                      setIsShow(false);
                    }}
                  >
                    SKILLS
                  </li>
                  <li
                    onClick={() => {
                      onScrollToElement('project');
                      setIsShow(false);
                    }}
                  >
                    PROJECT
                  </li>
                </NavListBox>
              </div>
            </SidebarContainer>
          </SidebarWrapper>
        )}
      </AnimatePresence>
    </>
  );
}

const SidebarWrapper = styled(motion.div)`
  ${({ theme }) => theme.BackgroundStyle}
`;

const SidebarContainer = styled(motion.aside)`
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100vh;
  background-color: #ffffff;
`;

const IconBox = styled.div`
  ${({ theme }) => theme.FlexCol};
  align-items: flex-end;
  justify-content: center;
  height: 5rem;
  padding: 0 1.25rem;
  margin-bottom: 0.625rem;
`;

const CloseIcon = styled(RxDoubleArrowLeft)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavListBox = styled.ul`
  ${({ theme }) => theme.FlexCol};
  align-items: center;
  gap: 1.875rem;

  > li {
    cursor: pointer;
    &:hover {
      font-weight: bold;
      color: ${({ theme }) => theme.textHover};
    }
  }
`;
