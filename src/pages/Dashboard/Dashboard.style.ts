import styled from 'styled-components';
import { device } from '../../devices/Breakpoints';

export const DashboardWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column-reverse;
  gap: 50px;
  justify-content: center;
  padding: 0 20px;

  @media ${device.laptop} {
    flex-direction: row;
    margin-top: 0;
    height: 100vh;
    padding: 15px 25px 25px 25px;
  }
  
  @media ${device.laptopL} {
    padding: 50px 100px 100px 100px;
  }
`

export const GeolocationDetails = styled.div`
  gap: 50px;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;

  @media ${device.laptop} {
    grid-template-columns: 2fr 1fr;
  }
  
  @media ${device.laptopL} {
    grid-template-columns: 3fr 2fr;
  }
  
`

export const DashboardCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

`