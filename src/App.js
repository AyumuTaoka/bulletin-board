import { Global, css } from "@emotion/react";
import normalize from "normalize.css";

import Header from "./organisms/Header";

const styles = css`
  ${normalize}
`;

function App() {
  return (
    <>
      <Global styles={styles} />
      <Header />
    </>
  );
}

export default App;
