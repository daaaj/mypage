import styled from 'styled-components';
import ProfileArea from 'components/profile/ProfileArea';
import ProjectArea from 'components/project/ProjectArea';

export default function HomePage() {
  return (
    <>
      <HomePageWarpper>
        <ProfileArea />
        <ProjectArea />
      </HomePageWarpper>
    </>
  );
}

const HomePageWarpper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
`;
