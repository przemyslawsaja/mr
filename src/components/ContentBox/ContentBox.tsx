import React, { FC } from "react"
import * as Styled from './ContentBox.style'
import { Button } from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { ApplicationRoutePaths } from '../../pages/Root';

export interface IContentBox {
  title: string,
  subtitle: string
  description: string
}

export const ContentBox: FC<IContentBox> = ({ title, subtitle, description }) => {
  const navigate = useNavigate();
  return <Styled.ContentBoxWrapper>
    <Styled.ContentBoxHeader>
      <Styled.ContentBoxTitle>{ title }</Styled.ContentBoxTitle>
      <Styled.ContentBoxSubtitle>{ subtitle }</Styled.ContentBoxSubtitle>
      <Styled.ContentBoxContent>{ description }</Styled.ContentBoxContent>
      <Button onClick={ () => navigate(ApplicationRoutePaths.VOTES) } content={ "zobacz więcej" }/>
    </Styled.ContentBoxHeader>
  </Styled.ContentBoxWrapper>
}