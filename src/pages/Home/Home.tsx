import React from "react"
import * as Styled from './Home.style'
import { About } from '../../components/About/About';
import { Offer } from '../../components/Offer/Offer';
import { ImageBox } from '../../components/ImageBox/ImageBox';
import { ImageTiles } from '../../components/ImageTiles/ImageTiles';

export const Home = () => {
  return <Styled.HomeContainer>
    <Styled.HomeSection>
      <About/>
      <ImageTiles />
    </Styled.HomeSection>
    <Styled.HomeSection>
      <ImageBox content={"Budowa domów z drewna"} showOverflowLayer img={"https://picsum.photos/1280/853/?random=10"}/>
      <Offer/>
    </Styled.HomeSection>
  </Styled.HomeContainer>
}