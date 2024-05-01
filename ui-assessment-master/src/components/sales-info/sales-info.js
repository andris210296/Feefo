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
  grid-column: 1;
  margin-left: 2%;
`;

export const GridHeadLeftSide = styled.div`
  flex: 1;
`;

export const GridHeadRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 2%;
  align-items: center;
  color: #a9a9a9;
`;

export const SalesTitle = styled.h2`
  margin-left: 10px;
  font-size: 1.0em;
  color:black;
`;

export const GridBody = styled.div`
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
