import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import DetailDaydei from 'components/detail/DetailDaydei';
import DetailPortfolio from 'components/detail/DetailPortfolio';

export default function DetailPage() {
  const location = useLocation();

  return (
    <>
      <DetailPageWarpper>
        <DatailContainer>
          {location.pathname === '/detail/daydei' ? <DetailDaydei /> : location.pathname === '/detail/portfolio' && <DetailPortfolio />}
        </DatailContainer>
      </DetailPageWarpper>
    </>
  );
}

const DetailPageWarpper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

const DatailContainer = styled.div`
  ${({ theme }) => theme.MaxWidth};
  ${({ theme }) => theme.HeaderHeight};
`;
