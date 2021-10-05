import React, { useState } from "react";
import Layout from "@components/layout/layout";
import ProgressBar from "@components/progressbar/progressbar";
import ToolBar from "@components/toolbar/toolbar";
import styled from "@emotion/styled";
import Image from "next/image";
import Settings from "@components/settings/settings";

const CardContainer = styled.section`
  display: grid;
  grid-template-rows: 0.49fr 1.5fr;
  justify-items: center;
  align-items: center;
  height: 100%;

`;

const ProgressBarContainer = styled.div`
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
`;

export default function Home() {
  const [modal, setModal] = useState(false);

  const toggleModal = e => () => {
    setModal(!modal);
    
  };

  return (
    <>
      <Layout
        bgColor={"#1E213F"}
        header={"pomodoro"}
        main={
          <CardContainer>
            <ToolBar />
            <ProgressBarContainer>
              <ProgressBar progress={15} time={"15:00"} />
            </ProgressBarContainer>
            <Settings toggleModal={toggleModal} open={modal} />
          </CardContainer>
        }
        footer={
          <>
            <Image
              onClick={toggleModal()}
              layout="fill"
              src="/assets/icon-settings.svg"
            />
          </>
        }
      />
    </>
  );
}
