import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Carousel from './Carousel';
import { sizes } from 'style/Media';
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
  const tablet = useMediaQuery({ maxWidth: sizes.tablet });

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
        {tablet ? <MobileImg src={DaydeiColor} alt="dayday img" /> : <Carousel imgList={imgList} alt="daydei img" />}
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

  ${({ theme }) => theme.media.desktop`
      font-size: 1.375rem;
      line-height: 2rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 1.25rem;
  `}

  ${({ theme }) => theme.media.mobile`
      font-size: 1.125rem;
      gap: 0.625rem;
  `}
`;

export const TitleBox = styled.div`
  > h2 {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.textHover};
    }

    > span {
      width: auto;
      font-size: ${({ theme }) => theme.FontSize.title};

      ${({ theme }) => theme.media.desktop`
          font-size: 2.375rem;
      `}

      ${({ theme }) => theme.media.tablet`
          font-size: 2rem;
      `}

      ${({ theme }) => theme.media.mobile`
          font-size: 1.75rem;
      `}
    }
  }
`;

export const LinkIcon = styled(HiOutlineLink)`
  margin-right: 0.875rem;
`;

export const MobileImg = styled.img`
  width: 100%;
  border-radius: 1.25rem;
  border: 3px solid ${({ theme }) => theme.textColor};
`;
