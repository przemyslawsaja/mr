import styled from 'styled-components';

export const ImageBoxContainer = styled.div<{ showOverflowLayer?: boolean, img: string, fontSize?: string, color?: string }>`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${ (props) => props.fontSize ? props.fontSize : '3rem' };
  color: ${ (props) => props.color ? props.color : '#1f1f1f' };
  font-weight: bold;
  padding: 50px;
  background: ${ (props) => props.showOverflowLayer ? "linear-gradient(to top, rgba(59, 189, 238, 0.2), #077cfa)," : "" } ${ (props => props.img ? `url(${ props.img })` : "") } no-repeat top center;
  background-size: cover;

`
