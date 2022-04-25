import * as Styled from './ImageTiles.style'
import { ImageBox } from '../ImageBox/ImageBox';
import React from "react"
import { theme } from '../../theme/MainTheme';

export const ImageTiles = () => {
  return <Styled.ImageTilesContainer>
    <ImageBox img={ "https://picsum.photos/1280/853/?random=1" }
              showOverflowLayer color={ theme.colors.brand.text100 }
              content={ "DOMEX" }
    />
    <ImageBox img={ "https://picsum.photos/1280/853/?random=2" }/>
    <ImageBox img={ "https://picsum.photos/1280/853/?random=3" }/>
    <ImageBox img={ "https://picsum.photos/1280/853/?random=4" }
              showOverflowLayer
              fontSize={ '1.2rem' }
              content={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices leo tortor, ut ornare erat posuere vel." +
              " Mauris sed arcu posuere sem mattis semper. Quis" }/>
  </Styled.ImageTilesContainer>
}