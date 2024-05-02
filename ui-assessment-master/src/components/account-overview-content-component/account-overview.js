import styled from 'styled-components';


export const AccountOverviewContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f5f5f5;
  width: 100%;
`;

export const GridHead = styled.div`
  @media (max-width: 705px) {
    flex-direction: column;
    padding: 10px;
  }
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
`;

export const GridHeadLeftSide = styled.div`
  flex: 1;  
`;

export const GridHeadRightSide = styled.div`
  flex: 1;
`;

export const GridBody = styled.div`  
  padding: 10px;
  @media (max-width: 705px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  margin-left: 15%;
  margin-right: 15%;
`;

export const PrimaryTitle = styled.div`
  @media (max-width: 705px) {
    font-size: 1.0em;
  }
  font-size: 1.5em;
  color: #808080;
  text-align: center;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1;
`;
