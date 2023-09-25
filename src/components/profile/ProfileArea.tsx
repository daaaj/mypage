import styled from 'styled-components';
import { sizes } from 'style/Media';
import CircleMotion from './CircleMotion';
import { useMediaQuery } from 'react-responsive';

export default function ProfileArea() {
  const laptop = useMediaQuery({ maxWidth: sizes.laptop });

  return (
    <>
      <ProfileWrapper id="profile">
        {!laptop && <CircleMotion />}
        <ProfileContainer>
          <ProfileInfoBox>
            <Title>
              <span>FRONTEND</span>
              <span>DEVELOPER</span>
            </Title>
            <IntroContents>
              안녕하세요, <TextSpan>[ 프론트엔드 개발자 정다정 ]</TextSpan> 입니다.
              <br />
              빠르게 변화하는 세상 속에서 뒤쳐지지 않도록 꾸준히 공부하며, <br />
              계속해서 성장해 나아갈 수 있도록 노력하고 있습니다. <br />
              새로운 환경에 잘 스며드는 적응력으로 회사에서 1인분을 할 수 있는 프론트엔드 개발자로 성장하고 싶습니다.
            </IntroContents>
          </ProfileInfoBox>
        </ProfileContainer>
      </ProfileWrapper>
    </>
  );
}

const ProfileWrapper = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  ${({ theme }) => theme.FlexCenter};
  width: 100%;
  height: 100vh;
`;

const ProfileContainer = styled.div`
  z-index: 5;
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  gap: 3.125rem;
`;

const ProfileInfoBox = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 2.5rem;

  > div {
    ${({ theme }) => theme.FlexCol};
  }

  ${({ theme }) => theme.media.desktop`
      padding : 0 2.5rem;
  `}
`;

const Title = styled.h1`
  ${({ theme }) => theme.FlexCol};
  font-family: 'KBO-Dia-Gothic_bold';
  font-size: ${({ theme }) => theme.FontSize.frontText};
  font-weight: bold;
  -webkit-text-stroke: 0.125rem #000000;
  color: #ffffff;
  line-height: 7.5rem;

  ${({ theme }) => theme.media.desktop`
      font-size: 5rem;
      line-height: 5.625rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 3.75rem;
      line-height: 5rem;
  `}

   ${({ theme }) => theme.media.mobile`
      font-size: 2.5rem;
      line-height: 3.125rem;
  `}
`;

const IntroContents = styled.p`
  font-size: ${({ theme }) => theme.FontSize.large};
  line-height: 2.8125rem;

  ${({ theme }) => theme.media.desktop`
      font-size: 1.25rem;
      line-height: 2.5rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 1.125rem;
      line-height: 1.875rem;
  `}

  ${({ theme }) => theme.media.mobile`
      font-size: 1rem;
      line-height: 1.875rem;
  `}
`;

const TextSpan = styled.span`
  font-weight: bold;
`;
