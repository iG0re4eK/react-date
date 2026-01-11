import styles from "./Overlay.module.css";

interface OverlayProps {
  onClickOverlay: () => void;
}

function Overlay({ onClickOverlay }: OverlayProps) {
  return (
    <>
      <div
        onClick={() => onClickOverlay()}
        className={`${styles["overlay"]}`}
      ></div>
    </>
  );
}

export default Overlay;
