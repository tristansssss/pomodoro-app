import useTheme from "@hooks/useTheme";
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
    strokeDashArray: 0,
    stokeDashOffset: 0,
  });

  useEffect(() => {
    const radius = circleElement.current?.r?.baseVal?.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;
    if (circumference && offset) {
      setCircleStyles({
        strokeDashArray: circumference,
        stokeDashOffset: offset,
      });
    }
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
      <ProgressTime data-testid="progress-time" theme={themeState}>
        {time}
      </ProgressTime>
      {isActive && seconds !== 0 ? (
        <>
          <Button
            data-testid="pause-btn"
            onClick={() => toggle(false)}
            theme={themeState}
          >
            pause
          </Button>
        </>
      ) : seconds === 0 ? (
        <>
          <Button
            data-testid="restart-btn"
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
          <Button
            data-testid="start-btn"
            onClick={() => toggle(true)}
            theme={themeState}
          >
            start
          </Button>
        </>
      )}
    </>
  );
};

export default ProgressBar;
