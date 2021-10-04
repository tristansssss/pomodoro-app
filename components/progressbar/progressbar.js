import styled from "@emotion/styled";
import { useRef, useEffect, useState } from "react";

const ProgressBarSvg = styled.svg`
  height: 100%;
  width: 100%;

  .circle {
    stroke-dasharray: ${(props) =>
      props.strokeDasharray ? props.strokeDasharray : null};
    stroke-dashoffset: ${(props) =>
      props.strokeDashoffset ? props.strokeDashoffset : null};
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;

const BackgroundInnter = styled.div`
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

const ProgressTime = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 30%;

  width: 184px;
  height: 106px;
  text-align: center;
  font-size: 80px;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  color: #d7e0ff;
  opacity: 0.8;
  /* border: 1px solid white; */
`;

const Button = styled.button`
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
  font-family: "Roboto Slab", serif;
  font-size: 14px;
  letter-spacing: 13.13px;
  font-size: bold;
  color: #d7e0ff;

  background-color: transparent;
  cursor: pointer;
`;

const ProgressBar = ({ progress, time }) => {
  const circleElement = useRef();
  const [circleStyles, setCircleStyles] = useState({
    strokeDashArray: null,
    stokeDashOffset: null,
  });

  useEffect(() => {
    const radius = circleElement.current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;
    setCircleStyles({
      strokeDashArray: circumference,
      stokeDashOffset: offset,
    });
  }, [progress]);

  return (
    <>
      <BackgroundInnter />
      <ProgressBarSvg
        strokeDasharray={circleStyles.strokeDashArray}
        strokeDashoffset={circleStyles.stokeDashOffset}
      >
        <circle
          ref={circleElement}
          className="circle"
          stroke={"#D881F8"}
          strokeWidth={8}
          fill="transparent"
          r="41%"
          cx="50%"
          cy="50%"
        />
      </ProgressBarSvg>
      <ProgressTime>{time}</ProgressTime>
      <Button>pause</Button>
    </>
  );
};

export default ProgressBar;
