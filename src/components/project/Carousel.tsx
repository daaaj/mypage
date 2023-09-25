import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import { sizes } from 'style/Media';
import { ImgType, ImgListType } from 'type/Type';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';

type CrouselType = {
  imgList: ImgListType;
  alt: string;
};

export default function Carousel({ ...props }: CrouselType) {
  const [imgIndex, setImgIndex] = useState(1);
  const [imgWidth, setImgWidth] = useState(1200);
  const [imgHeight, setimgHeight] = useState(600);
  const [carouselTransition, setCarouselTransition] = useState('transform 500ms ease-in-out');
  const slideRef = useRef<HTMLDivElement>(null);

  const desktop = useMediaQuery({ maxWidth: sizes.desktop });
  const laptop = useMediaQuery({ maxWidth: sizes.laptop });

  useEffect(() => {
    if (desktop) {
      setImgWidth(800);
      setimgHeight(500);
    }
    if (laptop) {
      setImgWidth(600);
      setimgHeight(400);
    }

    if (!desktop && !laptop) {
      setImgWidth(1200);
      setimgHeight(650);
    }
  }, [desktop, laptop]);

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
    const slideRange = imgIndex * (imgWidth + 40);

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
        <ImgWrapper imgwidth={imgWidth} imgheight={imgHeight}>
          <ImgBox ref={slideRef} imgwidth={imgWidth} imgheight={imgHeight}>
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
  position: relative;
`;

const ImgWrapper = styled.div<{ imgwidth: number; imgheight: number }>`
  ${(props) => props.theme.FlexRow};
  width: ${(props) => props.imgwidth + 40 + 'px'};
  height: ${(props) => props.imgheight + 100 + 'px'};
  overflow: hidden;
`;

const ImgBox = styled.div<{ imgwidth: number; imgheight: number }>`
  ${({ theme }) => theme.FlexRow};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    min-width: ${(props) => props.imgwidth + 'px'};
    height: ${(props) => props.imgheight + 'px'};
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
