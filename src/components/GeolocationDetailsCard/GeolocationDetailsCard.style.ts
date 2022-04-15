import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';
import { device } from '../../devices/Breakpoints';

export const GeolocationDetailsWrapper = styled.div`
  width: 100%;
  border: 2px solid black;
  background: #fff;
  box-shadow: ${theme.shadows.base};
  border-radius: ${theme.borders.radius};
  padding: 30px;
  height: 300px;
  overflow-y: scroll;
  
  @media ${device.laptop} {
    height: auto;
  }
`

export const EmptyDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  font-size: 2rem;
  color: ${theme.colors.brand.text300};
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const DetailsLabel = styled.span`
  font-size: 2rem;
`

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  font-size: 1.5rem;
  
  td {
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.colors.brand.text300};
  }
  
  td:first-child {
    color: ${theme.colors.brand.text300};
  }
  
  td:last-child {
    text-align: right;
  }
`