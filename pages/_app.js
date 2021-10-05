import "../styles/global.css";
import { TimeSettingProvider } from "state/time";
import { ThemeSettingProvider } from "state/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeSettingProvider>
      <TimeSettingProvider>
        <Component {...pageProps} />
      </TimeSettingProvider>
    </ThemeSettingProvider>
  );
}
