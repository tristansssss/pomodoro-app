import styled from "@emotion/styled";

export const SettingsContainer = styled.div`
  display: ${(props) => (props.open ? "grid" : "none")};
  grid-template-rows: 0.52fr 1.56fr 0.84fr 1.08fr;
  position: absolute;
  padding: 24px;
  border: 3px solid white;
  border-radius: 15px;
  width: 327px;
  height: 575px;
  background-color: #ffffff;
  font-family: "Kumbh Sans", sans-serif;
  z-index: 1;
`;

export const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e1e1;
  > div:nth-of-type(2) {
    position: relative;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

export const TimeContainer = styled.div`
  border-bottom: 1px solid #e3e1e1;
  padding: 24px 0 24px 0;
  > div:first-of-type {
    text-align: center;
    letter-spacing: 4.23px;
    font-size: 11px;
    height: 53px;
    color: #161932;
  }
`;

export const TimeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TimeInputElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimeInputLabel = styled.div`
  font-size: 12px;
  letter-spacing: 0;
  opacity: 0.4;
`;

export const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e3e1e1;
  > div:first-of-type {
    text-align: center;
    letter-spacing: 4.23px;
    font-size: 11px;
    color: #161932;
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    width: 152px;
    height: 40px;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    text-align: center;
    letter-spacing: 4.23px;
    font-size: 11px;
    color: #161932;
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    width: 152px;
    height: 40px;
  }
`;

export const Dot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  color: ${(props) => (props.highlight ? "#FFFFFF" : "#1E213F")};
  background-color: ${(props) =>
    props.highlight ? "#161932" : props.color ? props.color : "#EFF1FA"};
  border-radius: 50%;
  text-align: center;
  letter-spacing: 0;
  font-size: 15px;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : '"Kumbh Sans", sans-serif'};
  cursor: pointer;
`;

export const Button = styled.button`
  position: absolute;
  bottom: -26px;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;

  width: 140px;
  height: 53px;

  border-radius: 26.5px;
  border: none;
  font-family: "Kumbh Sans", sans-serif;

  background-color: #f87070;
  color: #ffffff;
  cursor: pointer;
`;
