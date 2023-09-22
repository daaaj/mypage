import styled from 'styled-components';
import CircleMotion from './CircleMotion';

export default function ProfileArea() {
  return (
    <>
      <ProfileWrapper id="profile">
        <CircleMotion />
        <ProfileContainer>
          <ProfileInfoBox>
            <Title>
              <span>FRONTEND</span>
              <span>DEVELOPER</span>
            </Title>
            <IntroContents>
              안녕하세요, <TextSpan>[ 프론트엔드 개발자 정다정 ]</TextSpan> 입니다.
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
`;
const Title = styled.h1`
  ${({ theme }) => theme.FlexCol};
  font-family: 'KBO-Dia-Gothic_bold';
  font-size: 7.5rem;
  font-weight: bold;
  -webkit-text-stroke: 0.125rem #000000;
  color: #ffffff;
  line-height: 7.5rem;
`;

const IntroContents = styled.p`
  font-size: 1.625rem;
  line-height: 2.8125rem;
`;

const TextSpan = styled.span`
  font-weight: bold;
`;
