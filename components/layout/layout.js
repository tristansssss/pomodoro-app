import styled from "@emotion/styled"
import Head from "next/head"

const LayoutContainer = styled.div`
  border: 1px solid black;
`;

export default function Layout({ children }) {
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
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </>

  )
}