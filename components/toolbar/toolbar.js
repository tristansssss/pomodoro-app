import styled from "@emotion/styled";

const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  width: 327px;
  border-radius: 31.5px;
  background-color: #161932;
  color: #d7e0ff;
  font-size: 13px;
  /* border: 2px solid white; */
`;

const Button = styled.button`
  background-color: transparent;
  width: 120px;
  height: 48px;
  border-radius: 31.5px;
  cursor: pointer;
  font-family: "Space Mono", monospace;
  font-size: 13px;
  font-weight: bold;
  color: #d7e0ff;
  opacity: 0.4;
  border: none;
`;

export default function ToolBar() {
  return (
    <ToolBarContainer>
      <Button>pomodoro</Button>
      <Button>short break</Button>
      <Button>long break</Button>
    </ToolBarContainer>
  );
}
