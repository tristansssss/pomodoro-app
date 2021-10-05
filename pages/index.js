import React, { useState, useEffect, useCallback } from "react";
import Layout from "@components/layout/layout";
import ProgressBar from "@components/progressbar/progressbar";
import ToolBar from "@components/toolbar/toolbar";
import Image from "next/image";
import Settings from "@components/settings/settings";
import useTimer from "hooks/useTimer";
import { useCountRenders } from "hooks/useCountRenders";
import {
  CardContainer,
  ProgressBarContainer,
  MainContainer,
  HeaderContainer,
  FooterContainer,
  SettingsContainer,
} from "../styles/home.styles";

export default function Home() {
  // useCountRenders()
  const [modal, setModal] = useState(false);
  const { seconds, state, toggle, timeView, isActive, reset } = useTimer();

  const toggleModal = useCallback(() => {
    setModal((m) => !m);
  }, [setModal]);

  return (
    <>
      <Layout bgColor={"#1E213F"}>
        <HeaderContainer>
          <h1>pomodoro</h1>
        </HeaderContainer>
        <MainContainer>
          <CardContainer>
            <ToolBar />
            <ProgressBarContainer>
              <ProgressBar
                seconds={seconds}
                reset={reset}
                isActive={isActive}
                toggle={toggle}
                progress={((1 - seconds / state[state.mode]) * 100).toFixed(2)}
                time={`${timeView.minutes}:${("0" + timeView.seconds).slice(
                  -2
                )}`}
              />
            </ProgressBarContainer>
            <SettingsContainer open={modal}>
              <Settings toggleModal={toggleModal} />
            </SettingsContainer>
          </CardContainer>
        </MainContainer>
        <FooterContainer>
          <div>
            <Image
              onClick={toggleModal}
              layout="fill"
              src="/assets/icon-settings.svg"
            />
          </div>
        </FooterContainer>
      </Layout>
    </>
  );
}
