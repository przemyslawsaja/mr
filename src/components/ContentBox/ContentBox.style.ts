import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';

export const ContentBoxWrapper = styled.div`
  padding: 50px;
  background: #fff;
`

export const ContentBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContentBoxTitle = styled.span`
 font-size: 3.3rem;
  font-weight: bold;
`

export const ContentBoxSubtitle = styled.span`
  color: ${theme.colors.brand.primary300};
  font-size: ${theme.fontSizes.m};
  font-weight: bold;
`

export const ContentBoxContent = styled.div`
  margin: 50px 0;
  font-size: 1.5rem;
`