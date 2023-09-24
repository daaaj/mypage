import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { ImgListType } from 'type/Type';
import { DescriptionContainer, LinkIcon, ProjectDaydeiWrapper, TitleBox } from './ProjectDaydei';
import SkillsImg from 'assets/project/portfolio/skills.png';
import DatailImg from 'assets/project/portfolio/detail.png';
import ProfileImg from 'assets/project/portfolio/profile.png';
import ProjectImg from 'assets/project/portfolio/project.png';
import SkillsDarkImg from 'assets/project/portfolio/skills-dark.png';
import DatailDarkImg from 'assets/project/portfolio/detail-dark.png';
import ProfileDarkImg from 'assets/project/portfolio/profile-dark.png';
import ProjectDarkImg from 'assets/project/portfolio/project-dark.png';

export default function ProjectPortfolio() {
  const imgList: ImgListType = [
    {
      img: DatailImg,
    },
    {
      img: DatailDarkImg,
    },
    {
      img: ProfileDarkImg,
    },
    {
      img: ProfileImg,
    },
    {
      img: ProjectDarkImg,
    },
    {
      img: ProjectImg,
    },
    {
      img: SkillsDarkImg,
    },
    {
      img: SkillsImg,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <ProjectPortfolioWrapper>
        <DescriptionContainer>
          <TitleBox>
            <h2 onClick={() => navigate('/detail/portfolio')}>
              <LinkIcon />
              <span>포트폴리오</span>
            </h2>
          </TitleBox>
          <p>포트폴리오 용도로 제작한 웹 사이트</p>
        </DescriptionContainer>
        <Carousel imgList={imgList} alt="portfolio img" />
      </ProjectPortfolioWrapper>
    </>
  );
}

const ProjectPortfolioWrapper = styled(ProjectDaydeiWrapper)`
  padding-top: 0;
`;
