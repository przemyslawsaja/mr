import React from "react"
import { theme } from '../../theme/MainTheme';
import { ImLocation } from 'react-icons/im';
import * as Styled from './Logo.style'

export const Logo = () => {
  return <Styled.LogoWrapper>
    <Styled.LogoIconWrapper>
      <ImLocation size={'3rem'} color={theme.colors.brand.primary300}/>
    </Styled.LogoIconWrapper>
    <Styled.LogoLocationLabel>Localization</Styled.LogoLocationLabel>
    <Styled.LogoLocationBox>BOX</Styled.LogoLocationBox>
  </Styled.LogoWrapper>
}