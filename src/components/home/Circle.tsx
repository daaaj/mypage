import styled from 'styled-components';

export default function Circle() {
  return (
    <>
      <FirstCircle></FirstCircle>
      <SecondCircle></SecondCircle>
      <ThirdCircle></ThirdCircle>
    </>
  );
}

const FirstCircle = styled.div`
  position: absolute;
  top: -15%;
  left: -20%;
  width: 43.75rem;
  height: 43.75rem;
  background-color: ${({ theme }) => theme.color100};
  opacity: 0.8;
  border-radius: 48%;
`;

const SecondCircle = styled(FirstCircle)`
  top: 60%;
  left: 30%;
  width: 31.25rem;
  height: 31.25rem;
  background-color: ${({ theme }) => theme.color200};

  ${({ theme }) => theme.media.mobile`
      left: 10%;
  `}
`;

const ThirdCircle = styled(FirstCircle)`
  top: 46%;
  left: 70%;
  width: 18.75rem;
  height: 18.75rem;
  background-color: ${({ theme }) => theme.color300};
`;
