import { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { HiArrowUp } from 'react-icons/hi';
import { isShowTopBtniAtom } from 'store/atoms';

export default function TopButton() {
  const [isShow, setIsShow] = useRecoilState(isShowTopBtniAtom);

  const scrollToTop = () => {
    //window.scroll( top, left, behavior );
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const showBtnHandler = () => {
      if (window.scrollY > 50) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', showBtnHandler);
    return () => {
      window.removeEventListener('scroll', showBtnHandler);
    };
  }, []);

  return (
    <>
      {isShow && (
        <TopBtnBox onClick={scrollToTop}>
          <TopBtnIcon />
        </TopBtnBox>
      )}
    </>
  );
}

const TopBtnBox = styled.div`
  position: fixed;
  bottom: 3.125rem;
  right: 6.25rem;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1.25rem;
  box-shadow: 0rem 0rem 0.625rem 0.125rem #acacac79;
  background-color: white;
  cursor: pointer;

  ${({ theme }) => theme.media.desktop`
      right: 3.125rem;
      width: 2.5rem;
      height: 2.5rem;
  `}

  ${({ theme }) => theme.media.tablet`
      right: 1.875rem;
      width: 1.875rem;
      height: 1.875rem;
  `}
`;

const TopBtnIcon = styled(HiArrowUp)`
  font-size: 1.75rem;

  ${({ theme }) => theme.media.desktop`
      font-size: 1.25rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 1.125rem;
  `}
`;
