import styled from 'styled-components';
import { ImgListType } from 'type/Type';
import { HiOutlineLink } from 'react-icons/hi';
import SkillsImg from 'assets/project/portfolio/skills.png';
import DatailImg from 'assets/project/portfolio/detail.png';
import ProfileImg from 'assets/project/portfolio/profile.png';
import ProjectImg from 'assets/project/portfolio/project.png';
import SkillsDarkImg from 'assets/project/portfolio/skills-dark.png';
import DatailDarkImg from 'assets/project/portfolio/detail-dark.png';
import ProfileDarkImg from 'assets/project/portfolio/profile-dark.png';
import ProjectDarkImg from 'assets/project/portfolio/project-dark.png';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';

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

const ProjectPortfolioWrapper = styled.section`
  ${({ theme }) => theme.FlexCol};
`;

const DescriptionContainer = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 1.25rem;
  margin-bottom: 0.625rem;
  font-size: ${({ theme }) => theme.FontSize.large};
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;

  > h2 {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.textHover};
    }

    > span {
      width: auto;
      font-size: ${({ theme }) => theme.FontSize.title};
    }
  }
`;

const LinkIcon = styled(HiOutlineLink)`
  margin-right: 0.875rem;
`;
