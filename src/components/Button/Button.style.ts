import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';

const { primary300 } = theme.colors.brand

export const ButtonContainer = styled.button`
  padding: 15px 20px;
  border: 2px solid ${ primary300 };
  text-transform: uppercase;
  background: #fff;
  font-weight: bold;
  color: ${ primary300 };
  transition: 0.3s ease-in-out;
  cursor: pointer;
    
  &:hover {
    background: ${ primary300};
    color: #fff;
  }
`