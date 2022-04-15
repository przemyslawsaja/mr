import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';

export const LogoIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
`

export const LogoWrapper = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  align-items: center;
`

export const LogoLocationLabel = styled.span`
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
`
export const LogoLocationBox = styled.span `
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.brand.primary300}
`