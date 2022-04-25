import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';

export const Vote = styled.div`
  font-size: 2rem;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.brand.primary300};
  display: flex;
  align-items: center;
  justify-content: space-between;
`