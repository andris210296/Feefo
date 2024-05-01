import styled from 'styled-components';


export const SalesGrid = styled.div`
  display: grid;
  background-color: white;  
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1px;
`;

export const GridHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

export const SalesTitle = styled.h2`
  margin-left: 10px;
  font-size: 1.0em;
  color:black;
`;

export const GridBody = styled.div`
  @media (max-width: 705px) {
    font-size: 0.9em;
  }
  display: flex;
  justify-content: flex-start;
  flex:1;
  padding: 10px;
  backgroundColor: white;
  margin-right: 20%;
  align-items: center; 
  color: gray; 
`;

export const BoldText = styled.span`
  font-weight: bold;
  margin: 0 5px;
`;

export const PercentageResult = styled.div`
  @media (max-width: 705px) {
    font-size: 1.3em;
  }
  display: flex;
  color: #3DD655;
  font-size: 2em;
  font-weight: bold;
`;

export const SecondaryTitle = styled.div`
  @media (max-width: 705px) {
    font-size: 0.8em;
  }
  display: flex;
  margin-top: 5px;
  color: #a9a9a9;
  font-size: 1.0em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const GridItem = styled.div`
  padding: 10px;
  background-color: white;
`;