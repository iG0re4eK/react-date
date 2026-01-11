import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  title: string;
  onClickButton: () => void;
}

function ActionButton({ title, onClickButton }: ActionButtonProps) {
  return (
    <>
      <button
        onClick={() => onClickButton()}
        className={`${styles["action-button"]}`}
      >
        {title}
      </button>
    </>
  );
}

export default ActionButton;
