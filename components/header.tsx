import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    let currentDay = new Date();
    let currentDate = currentDay.toUTCString().slice(5, 16);
    setDate(currentDate);
    let currentTime = currentDay.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setTime(currentTime);
  };

  console.log(date);
  console.log(time);
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div>
          <h1 className={styles.title}>Hello Johnny</h1>
          <p className={styles.info}>You have 5 undone tasks</p>
        </div>
        <div>
            <p className={styles.time}>{time}</p>
            <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
