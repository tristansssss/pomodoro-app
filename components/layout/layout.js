import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { Children } from "react";

const LayoutContainer = styled.div`
  /* border: 10px solid black; */
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 0.25fr 2.4fr 0.34fr;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
`;

const MainContainer = styled.main`
  /* border: 3px solid red; */
`;
const HeaderContainer = styled.header`
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
  }
`;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  /* border: 1px solid black; */

  > div {
    position: relative;
    height: 28px;
    width: 28px;
    /* border:1px solid black; */
  }
`;

export default function Layout({ header, main, footer, bgColor }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title>Pomodoro App</title>
      </Head>
      <LayoutContainer bgColor={bgColor}>
        <HeaderContainer>
          <h1>{header}</h1>
        </HeaderContainer>
        <MainContainer>{main}</MainContainer>
        <FooterContainer>
          <div>{footer}</div>
        </FooterContainer>
      </LayoutContainer>
    </>
  );
}
