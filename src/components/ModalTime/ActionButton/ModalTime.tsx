import { useEffect, useState } from "react";
import styles from "./ModalTime.module.css";
import TimeCell from "../../TimeCell/TimeCell";
import Overlay from "../../Overlay/Overlay";

interface TimeData {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface ModalTimeProps {
  onClickOverlay: () => void;
}

function ModalTime({ onClickOverlay }: ModalTimeProps) {
  const [time, setTime] = useState<TimeData>({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      setTime({
        days: date.getDate().toString().padStart(2, "0"),
        hours: date.getHours().toString().padStart(2, "0"),
        minutes: date.getMinutes().toString().padStart(2, "0"),
        seconds: date.getSeconds().toString().padStart(2, "0"),
      });
    };

    updateDate();

    const intervalId = setInterval(updateDate, 1000);
    console.log("Таймер запущен");

    return () => {
      console.log("Таймер остановлен");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Overlay onClickOverlay={() => onClickOverlay()}></Overlay>

      <div className={`${styles["modal-time"]}`}>
        {Object.entries(time).map((item) => {
          return (
            <TimeCell key={item[0]} name={item[0]} value={item[1]}></TimeCell>
          );
        })}
      </div>
    </>
  );
}

export default ModalTime;
