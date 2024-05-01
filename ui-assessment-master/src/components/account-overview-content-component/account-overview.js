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

export const ContactInfoBox = styled.div`
  font-size: 0.8em;
  grid-column: 2;
`;

export const SecondaryTitle = styled.div`
  display: flex;
  margin-top: 10px;
  color: #a9a9a9;
  font-size: 1.0em;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ContactDetailBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ContactImage = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;  
  margin-top: 10px;
  background-color: gold;
  border-radius: 10%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  
  padding: 10px;
  margin-left: 10px;
`;

export const PhoneBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  padding: 10px;
  margin-left: 10px;
`;

