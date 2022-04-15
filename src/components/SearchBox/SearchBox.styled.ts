import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';
import { device } from '../../devices/Breakpoints';

const { borders, colors, shadows } = theme;

export const SubmitSearchButton = styled.button`
  width: 100%;
  background: ${ colors.brand.primary300 };
  border-radius: ${ borders.radius };
  box-shadow: ${ shadows.base };
  outline: none;
  padding: 20px;
  border: 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;


  @media ${device.tabletM} {
    padding: 10px;
    width: 250px;
  }
  
  @media ${device.laptop} {
    //width: 300px;
    //padding: 20px;
  }


  
  &:hover {
    background: ${ colors.brand.primary500 };
    color: ${ colors.brand.background300 };
  }
`
export const SearchBoxWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tabletM} {
    flex-direction: row;
  }
  
  @media ${device.laptop} {
    gap: 50px;
    height: 100px;
    flex-direction: row;
  }
`
export const SearchInput = styled.input`
  padding-left: 20px;
  outline: none;
  border: 0;
  height: 50px;
  border-radius: ${ borders.radius };
  width: 100%;
`
