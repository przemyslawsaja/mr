import React, { FC } from "react"
import { ImageBoxContainer } from "./ImageBox.style"

interface IImageBox {
  content?: string;
  showOverflowLayer?: boolean
  img: string;
  fontSize?: string;
  color?: string
}

export const ImageBox: FC<IImageBox> = (props) => {
  return <ImageBoxContainer { ...props }>
    { props.content ?? null }
  </ImageBoxContainer>
}