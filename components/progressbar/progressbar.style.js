import styled from "@emotion/styled";
import { mediaQueries } from "utils/mediaQueries";

export const ProgressBarSvg = styled.svg`
  height: 100%;
  width: 100%;
  .circle {
    stroke-dasharray: ${(props) =>
      props.strokeDasharray ? props.strokeDasharray : null};
    stroke-dashoffset: ${(props) =>
      props.strokeDashoffset ? props.strokeDashoffset : null};
    transition: stroke-dashoffset 1.5s ease-out;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: ${(props) => props.theme.color};
  }
`;

export const BackgroundInnter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 90%;
  width: 90%;
  z-index: -1;
  background-color: #161932;
  background-size: 100%;
  border-radius: 50%;
`;

export const ProgressTime = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 30%;

  /* width: 184px;
  height: 106px; */
  text-align: center;
  font-size: 80px;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) =>
    props.theme.fontFamily === '"Space Mono", monospace' ? "400" : "bold"};
  letter-spacing: ${(props) =>
    props.theme.fontFamily === '"Space Mono", monospace' ? "-10px" : "0px"};
  color: #d7e0ff;
  opacity: 0.8;
  ${mediaQueries("md")`
    font-size:100px;

  `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  position: absolute;
  top: 66%;
  bottom: 0;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  width: 98px;
  height: 18px;
  border: none;

  text-align: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  letter-spacing: 13.13px;
  font-size: bold;
  color: #d7e0ff;

  background-color: transparent;
  cursor: pointer;
  ${mediaQueries("md")`
    width: 112px;
    height: 21px;
    font-size: 16px;
    letter-spacing: 15px;


  `}
`;
