import useTheme from "hooks/useTheme";
import { useEffect, useRef, useState } from "react";
import {
  BackgroundInnter,
  Button,
  ProgressBarSvg,
  ProgressTime,
} from "./progressbar.style";

const ProgressBar = ({ progress, time, isActive, toggle, reset, seconds }) => {
  const { themeState } = useTheme();
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
    console.log(seconds === 0);
    console.log(parseInt(progress));
  }, [progress]);

  return (
    <>
      <BackgroundInnter />
      <ProgressBarSvg
        theme={themeState}
        strokeDasharray={circleStyles.strokeDashArray}
        strokeDashoffset={circleStyles.stokeDashOffset}
      >
        <circle
          ref={circleElement}
          className="circle"
          strokeWidth={8}
          fill="transparent"
          r="41%"
          cx="50%"
          cy="50%"
        />
      </ProgressBarSvg>
      <ProgressTime theme={themeState}>{time}</ProgressTime>
      {isActive && seconds !== 0 ? (
        <>
          <Button onClick={() => toggle(false)} theme={themeState}>
            pause
          </Button>
        </>
      ) : seconds === 0 ? (
        <>
          <Button
            onClick={() => {
              reset();
              toggle(true);
            }}
            theme={themeState}
          >
            restart
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => toggle(true)} theme={themeState}>
            start
          </Button>
        </>
      )}
    </>
  );
};

export default ProgressBar;
