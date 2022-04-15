import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';
import { colors } from '../../theme/attributes/Colors';
import { device } from '../../devices/Breakpoints';

export const SearchHistoryListWrapper = styled.div`
  border: 2px solid black;
  background: #fff;
  border-radius: ${ theme.borders.radius };
  box-shadow: ${ theme.shadows.base };
  width: 100%;
  margin-bottom: 50px;
  @media ${device.laptop} {
    width: 400px;
    margin-bottom: 0;
  }
`

export const HistoryLabel = styled.div`
  color: #fff;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ theme.colors.brand.primary300 };
  font-size: 1.6rem;
  font-weight: bold;
  box-shadow: ${ theme.shadows.base };
`

export const HistoryItems = styled.div`
  padding: 20px;
  color: ${ colors.brand.text500 };
  font-size: 1.5rem;
`

export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 10px;
`
export const HistoryItemLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const SearchEmptyComponent = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.colors.brand.text300};
  text-align: center;
  gap: 20px;
  font-size: ${theme.fontSizes.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-size: ${theme.fontSizes.m};
  color: ${theme.colors.brand.text500};
  
`