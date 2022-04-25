import React, { FC } from "react"
import * as Styled from './Button.style'

interface IButton {
  onClick(): void;

  content: string
}

export const Button: FC<IButton> = ({ onClick, content }) => {
  return <Styled.ButtonContainer onClick={ onClick }>
    { content }
  </Styled.ButtonContainer>
}