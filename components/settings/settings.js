import Timeinput from "@components/Input/TimeInput";
import { useCountRenders } from "hooks/useCountRenders";
import useTheme from "hooks/useTheme";
import useTimer from "hooks/useTimer";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import {
  Button,
  ColorContainer,
  Dot,
  FontContainer,
  SettingsHeader,
  TimeContainer,
  TimeInputContainer,
  TimeInputElement,
  TimeInputLabel,
} from "./settings.style";

const Settings = memo(({ toggleModal }) => {
  // useCountRenders()
  const { state, setTimeSettingsDispatch, reset } = useTimer();
  const { themeState, setTheme } = useTheme();

  const [timeSettings, setTimeSettings] = useState({
    pomodoro: state.pomodoro,
    break: state.break,
    longBreak: state.longBreak,
  });

  const [themeSettings, setThemeSettings] = useState({
    color: themeState.color,
    fontFamily: themeState.fontFamily,
  });

  const handlePomodoroChange = (v) => {
    setTimeSettings({ ...timeSettings, pomodoro: v * 60 });
  };
  const handleBreakChange = (v) => {
    setTimeSettings({ ...timeSettings, break: v * 60 });
  };
  const handleLongBreakChange = (v) => {
    setTimeSettings({ ...timeSettings, longBreak: v * 60 });
  };

  const handleDispatch = () => {
    setTimeSettingsDispatch(timeSettings);
    setTheme(themeSettings);
  };

  const handleThemeSettings = (type, value) => {
    setThemeSettings({
      ...themeSettings,
      [type]: value,
    });
  };

  return (
    <>
      <SettingsHeader>
        <div>Settings</div>
        <div>
          <Image
            onClick={toggleModal}
            layout="fill"
            src="/assets/icon-close.svg"
          />
        </div>
      </SettingsHeader>
      <TimeContainer>
        <div>TIME (MINUTES)</div>
        <TimeInputContainer>
          <TimeInputElement>
            <TimeInputLabel>pomodoro</TimeInputLabel>
            <Timeinput
              currentValue={timeSettings.pomodoro / 60}
              onChange={handlePomodoroChange}
            />
          </TimeInputElement>
          <TimeInputElement>
            <TimeInputLabel>short break</TimeInputLabel>
            <Timeinput
              currentValue={timeSettings.break / 60}
              onChange={handleBreakChange}
            />
          </TimeInputElement>
          <TimeInputElement>
            <TimeInputLabel>long break</TimeInputLabel>
            <Timeinput
              currentValue={timeSettings.longBreak / 60}
              onChange={handleLongBreakChange}
            />
          </TimeInputElement>
        </TimeInputContainer>
      </TimeContainer>
      <FontContainer>
        <div>FONT</div>
        <div>
          <Dot
            onClick={() =>
              handleThemeSettings("fontFamily", '"Kumbh Sans", sans-serif')
            }
            fontFamily={'"Kumbh Sans", sans-serif'}
            highlight={
              themeSettings.fontFamily.toString() === '"Kumbh Sans", sans-serif'
            }
          >
            Aa
          </Dot>
          <Dot
            onClick={() =>
              handleThemeSettings("fontFamily", '"Roboto Slab", serif')
            }
            fontFamily={'"Roboto Slab", serif'}
            highlight={themeSettings.fontFamily === '"Roboto Slab", serif'}
          >
            Aa
          </Dot>
          <Dot
            onClick={() =>
              handleThemeSettings("fontFamily", '"Space Mono", monospace')
            }
            fontFamily={"'Space Mono', monospace"}
            highlight={themeSettings.fontFamily === '"Space Mono", monospace'}
          >
            Aa
          </Dot>
        </div>
      </FontContainer>
      <ColorContainer>
        <div>COLOR</div>
        <div>
          <Dot
            onClick={() => handleThemeSettings("color", "#F87070")}
            color={"#F87070"}
          >
            {themeSettings.color === "#F87070" ? (
              <>
                <Image width={12.41} height={8.45} src="/assets/check.svg" />
              </>
            ) : (
              <></>
            )}
          </Dot>
          <Dot
            onClick={() => handleThemeSettings("color", "#70F3F8")}
            color={"#70F3F8"}
          >
            {themeSettings.color === "#70F3F8" ? (
              <>
                <Image width={12.41} height={8.45} src="/assets/check.svg" />
              </>
            ) : (
              <></>
            )}
          </Dot>
          <Dot
            onClick={() => handleThemeSettings("color", "#D881F8")}
            color={"#D881F8"}
          >
            {themeSettings.color === "#D881F8" ? (
              <>
                <Image width={12.41} height={8.45} src="/assets/check.svg" />
              </>
            ) : (
              <></>
            )}
          </Dot>
        </div>
      </ColorContainer>
      <div onClick={toggleModal}>
        <Button onClick={() => handleDispatch()}>Apply</Button>
      </div>
    </>
  );
});

export default Settings;
