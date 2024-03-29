import { css } from "@emotion/react";
import styled from "@emotion/styled";

type searchBarProps = {
  isClosed : boolean
}

export const LabelStyled = styled.label<searchBarProps>`
  box-shadow : 1px 2px 1px 1px rgba(0,0,0,0.3);
  position: relative;
  display: inline-block;
  background-color: #fff;
  margin: 0 0 0 1rem;
  padding: 5px 12px;
  transition: all 1s ease;
  border-radius: 0;

  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 78%;
    background-color: #F0AD4E;
    transition: all 1s ease 0.5s;
  }
  input{
    transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  .i{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  ${props=> props.isClosed ? css`
    box-shadow : 1px 2px 1px 1px #F4B333;
    border: solid 1px transparent;
    border-radius: 5px;
    padding: 5px 5px;
    transition: all 1s ease;
    &::after{
      width: 0%;
      transition: all 0.3s ease;
    }
    .i{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 1s ease;
      -webkit-appearance:none
    } `
    : ""
    }{
  }
`