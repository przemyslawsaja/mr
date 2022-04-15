import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';
import { device } from '../../devices/Breakpoints';

export const GeolocationCardWrapper = styled.div`
  width: 100%;

  .map-container {
    border-radius: ${theme.borders.radius};
    width: 100%;
    height: 300px;
  }

  @media ${device.laptop} {
    .map-container {
      height: 100%;
    }
  }
`