import { useState } from "react";
import "./App.css";
import ActionButton from "./components/ActionButton/ActionButton";
import ModalTime from "./components/ModalTime/ActionButton/ModalTime";

function App() {
  const [modalTimeActive, setModalTimeActive] = useState(false);

  const handleActiveModalTime = () => {
    setModalTimeActive((prev) => !prev);
  };

  return (
    <>
      <ActionButton
        title={"Открыть время"}
        onClickButton={handleActiveModalTime}
      ></ActionButton>
      {modalTimeActive && (
        <ModalTime onClickOverlay={handleActiveModalTime}></ModalTime>
      )}
    </>
  );
}

export default App;
