import styled from "@emotion/styled";
import { mediaQueries } from "utils/mediaQueries";

export const CardContainer = styled.section`
  display: grid;
  grid-template-rows: 0.49fr 1.5fr;
  justify-items: center;
  align-items: center;
  height: 100%;
  ${mediaQueries("md")`
    grid-template-rows: 0.44fr 1.56fr;
  `}
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  background: linear-gradient(#0e112a, #2e325a);
  background: radial-gradient(circle at top left, #0e112a, #2e325a 115%);
  background-color: gray;
  background-size: 125%;
  border-radius: 50%;
  z-index: 0;
  box-shadow: #161932;
  /* https://css-tricks.com/almanac/properties/b/box-shadow/ */
  box-shadow: 33px 33px 55px 8px #161932;
  ${mediaQueries("md")`
    height: 410px;
    width: 410px;
  `}
`;

export const MainContainer = styled.main``;

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  h1 {
    position: absolute;
    bottom: 0;
    width: 117px;
    font-size: 24px;
    font-family: "Kumbh Sans", sans-serif;
    color: #d7e0ff;
    ${mediaQueries("md")`
      width: 156px;
      font-size: 32px;
    `}
  }
`;
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  > div {
    position: relative;
    height: 28px;
    width: 28px;
  }
`;

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
  ${mediaQueries("md")`
    grid-template-rows: 0.81fr 1.36fr 0.77fr 1.06fr;
    width: 540px;
    height: 464px;
    padding: 34px 40px 34px 40px;
  `}
`;
