import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { ImgListType } from 'type/Type';
import { HiOutlineLink } from 'react-icons/hi';
import PostModify from 'assets/project/daydei/postModify.png';
import PostInvite from 'assets/project/daydei/postInvite.png';
import FriendsList from 'assets/project/daydei/friendsList.png';
import DaydeiColor from 'assets/project/daydei/daydei-color.png';
import OtherCalendar from 'assets/project/daydei/otherCalendar.png';

export default function ProjectDaydei() {
  const imgList: ImgListType = [
    {
      img: DaydeiColor,
    },
    {
      img: PostModify,
    },
    {
      img: PostInvite,
    },
    {
      img: OtherCalendar,
    },
    {
      img: FriendsList,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <ProjectDaydeiWrapper id="project">
        <DescriptionContainer>
          <TitleBox>
            <h2 onClick={() => navigate('/detail/daydei')}>
              <LinkIcon />
              <span>데이데이</span>
            </h2>
          </TitleBox>
          <p>친구 또는 나와 같은 관심사를 가지고 있는 사용자와 일정과 정보를 공유할 수 있는 소셜 미디어 연계형 캘린더 서비스</p>
        </DescriptionContainer>
        <Carousel imgList={imgList} alt="daydei img" />
      </ProjectDaydeiWrapper>
    </>
  );
}

export const ProjectDaydeiWrapper = styled.section`
  ${({ theme }) => theme.FlexCol};
  padding-top: 9.375rem;
`;

export const DescriptionContainer = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 1.25rem;
  margin-bottom: 0.625rem;
  font-size: ${({ theme }) => theme.FontSize.large};

  ${({ theme }) => theme.media.laptop`
      font-size: 22px;
  `}
`;

export const TitleBox = styled.div`
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

      ${({ theme }) => theme.media.laptop`
          font-size: 38px;
      `}
    }
  }
`;

export const LinkIcon = styled(HiOutlineLink)`
  margin-right: 0.875rem;
`;
