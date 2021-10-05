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

export default function Layout({ header, main, footer, bgColor, children }) {
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
      <LayoutContainer bgColor={bgColor}>{children}</LayoutContainer>
    </>
  );
}
