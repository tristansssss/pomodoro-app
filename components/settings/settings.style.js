import styled from "@emotion/styled";
import { mediaQueries } from "utils/mediaQueries";

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
  ${mediaQueries("md")`
  font-size: 28px
  `}
`;

export const TimeContainer = styled.div`
  border-bottom: 1px solid #e3e1e1;
  padding: 24px 0 24px 0;
  > div:first-of-type {
    text-align: center;
    letter-spacing: 4.23px;
    font-size: 11px;
    height: 29px;
    color: #161932;
  }
  ${mediaQueries("md")`
  position: relative;
    > div:first-of-type {
      font-size: 13px;
      text-align: left;
      letter-spacing: 5px;
      font-weight: bold;
      height: 39px;
    }

`}
`;

export const TimeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${mediaQueries("md")`
    flex-direction: row;
    gap: 20px;
  `}
`;

export const TimeInputElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mediaQueries("md")`
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  `}
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
    /* border: 1px solid purple; */
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    width: 152px;
    height: 40px;
    /* border: 1px solid purple; */
  }
  ${mediaQueries("md")`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > div:nth-of-type(2) { 
      margin-top: 0;
    }
    


  `}
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
  ${mediaQueries("md")`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > div:nth-of-type(2) { 
      margin-top: 0;
    }
    


  `}
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
