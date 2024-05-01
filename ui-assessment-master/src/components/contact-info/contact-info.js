import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: whitesmoke;
  width: 100%;
`;

export const BigBox = styled.div`
  font-size: 1.5em;  
  color: #808080;
  text-align: center;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1;
`;

export const SmallBox = styled.div`
  font-size: 0.8em;
  grid-column: 2;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const NameBox = styled.div`
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

