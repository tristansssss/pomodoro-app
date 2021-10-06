import styled from "@emotion/styled";
import useTheme from "@hooks/useTheme";
import useTimer from "@hooks/useTimer";
import { mediaQueries } from "@utils/mediaQueries";

const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  width: 327px;
  border-radius: 31.5px;
  background-color: #161932;
  color: #d7e0ff;
  /* font-size: 13px; */
  padding: 7px;
  /* border: 2px solid white; */
  ${mediaQueries("md")`
    width: 373px;
  `}
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.active && props.theme.color ? props.theme.color : "transparent"};
  width: 120px;
  height: 48px;
  border-radius: 31.5px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.active ? "#1E213F" : "#D7E0FF")};
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  border: none;
  ${mediaQueries("md")`
    font-size: 14px;
  `}
`;

const ToolBar = () => {
  // useCountRenders();
  const { themeState } = useTheme();

  const { setMode, state } = useTimer();

  return (
    <ToolBarContainer>
      <Button
        theme={themeState}
        onClick={() => setMode("pomodoro")}
        active={state.mode === "pomodoro"}
      >
        pomodoro
      </Button>
      <Button
        theme={themeState}
        onClick={() => setMode("shortBreak")}
        active={state.mode === "shortBreak"}
      >
        short break
      </Button>
      <Button
        theme={themeState}
        onClick={() => setMode("longBreak")}
        active={state.mode === "longBreak"}
      >
        long break
      </Button>
    </ToolBarContainer>
  );
};

export default ToolBar;
