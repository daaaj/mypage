import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { ImgType, ImgListType } from 'type/Type';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';

type CrouselType = {
  imgList: ImgListType;
  alt: string;
};

export default function Carousel({ ...props }: CrouselType) {
  const [imgIndex, setImgIndex] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState('transform 500ms ease-in-out');
  const slideRef = useRef<HTMLDivElement>(null);

  const makeNewImgList = (arr: ImgListType) => {
    const dataStart = arr[0];
    const dataEnd = arr[arr.length - 1];
    const newDataList = [dataEnd, ...arr, dataStart];
    return newDataList;
  };

  const imgArr = makeNewImgList(props.imgList);

  const prevClickHandler = () => {
    const currIndex = imgIndex - 1;
    setImgIndex(currIndex);

    if (currIndex === 0) {
      moveToNthSlide(props.imgList.length);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const nextClickHandler = () => {
    const currIndex = imgIndex + 1;
    setImgIndex(currIndex);

    if (currIndex === props.imgList.length + 1) {
      moveToNthSlide(1);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  };

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setImgIndex(index);
      setCarouselTransition('');
    }, 500);
  };

  useEffect(() => {
    const imgWidth: number = 1240;
    const slideRange = imgIndex * imgWidth;

    if (slideRef.current != null) {
      slideRef.current.style.transition = `${carouselTransition}`;
      slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }
  }, [carouselTransition, imgIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextClickHandler();
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [imgIndex]);

  return (
    <>
      <CarouselWrapper>
        <div onClick={prevClickHandler}>
          <PrevIcon size={30} />
        </div>
        <ImgWrapper>
          <ImgBox ref={slideRef}>
            {imgArr.map((data: ImgType, index: number) => (
              <img src={data.img} alt={props.alt} key={index} />
            ))}
          </ImgBox>
        </ImgWrapper>
        <div onClick={nextClickHandler}>
          <NextIcon size={30} />
        </div>
      </CarouselWrapper>
    </>
  );
}

const CarouselWrapper = styled.section`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  gap: 0.9375rem;
  position: relative;
`;

const ImgWrapper = styled.div`
  ${(props) => props.theme.FlexRow};
  width: 77.5rem;
  height: 43.75rem;
  overflow: hidden;
`;

const ImgBox = styled.div`
  ${({ theme }) => theme.FlexRow};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    min-width: 75rem;
    height: 37.5rem;
    margin: 0 0.9375rem;
    border-radius: 1.25rem;
    border: 0.3125rem solid ${({ theme }) => theme.textColor};
  }
`;

const PrevIcon = styled(BsArrowLeftCircle)`
  cursor: pointer;
`;

const NextIcon = styled(BsArrowRightCircle)`
  cursor: pointer;
`;
