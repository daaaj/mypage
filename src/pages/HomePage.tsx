import styled from 'styled-components';
import ProfileArea from 'components/ProfileArea';
import ProjectArea from 'components/ProjectArea';

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
`;
