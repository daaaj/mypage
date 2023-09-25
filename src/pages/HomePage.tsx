import styled from 'styled-components';
import HomeArea from 'components/home/HomeArea';
import ProjectArea from 'components/project/ProjectArea';
import AboutMeArea from 'components/aboutMe/AboutMeArea';

export default function HomePage() {
  return (
    <>
      <HomePageWarpper>
        <HomeArea />
        <AboutMeArea />
        <ProjectArea />
      </HomePageWarpper>
    </>
  );
}

const HomePageWarpper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;
