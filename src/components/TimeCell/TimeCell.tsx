import styles from "./TimeCell.module.css";

interface TimeCellProps {
  name: string;
  value: string;
}

function TimeCell({ name, value }: TimeCellProps) {
  return (
    <>
      <div className={`${styles["modal-time-cell"]}`}>
        <div className={`${styles["cell-name"]}`}>{name}</div>
        <div className={`${styles["cell-box"]}`}>
          <div className={`${styles["cell-value"]}`}>{value[0]}</div>
          <div className={`${styles["cell-value"]}`}>{value[1]}</div>
        </div>
      </div>
    </>
  );
}

export default TimeCell;
