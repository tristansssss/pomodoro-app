import Layout from "@components/layout/layout";
import ProgressBar from "@components/progressbar/progressbar";
import Settings from "@components/settings/settings";
import ToolBar from "@components/toolbar/toolbar";
import useTimer from "hooks/useTimer";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import {
  CardContainer,
  FooterContainer,
  HeaderContainer,
  MainContainer,
  ProgressBarContainer,
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
