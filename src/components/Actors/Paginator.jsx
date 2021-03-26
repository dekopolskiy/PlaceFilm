import { useState } from "react";
import styles from "./Actors.module.css";

export const Paginator = (props) => {
  const [step, setStep] = useState({ start: 0, end: 10 });

  let totalCountElements = parseInt(props.totalCount); //100
  let totalCountPages = Math.ceil(totalCountElements / props.pageSize); //100 pages / 25 users == show pages 4

  let arr = []; //arr for map 4 pages in dom element
  for (let i = 1; i <= totalCountPages; i++) {
    arr.push(i);
  }

  return (
    <div className={styles.pages}>
      <div className={styles.wrapper_page}>
        <div
          onClick={() => {
            if (step.start !== 0) {
              setStep({ start: step.start - 10, end: step.end - 10 });
            }
          }}
        >
          left
        </div>
        {arr.slice(step.start, step.end).map((i) => {
          return <div className={styles.everyPage} onClick={() => props.showNewPageUsers({ page: i })}>{i}</div>;
        })}
        <div
          onClick={() => {
            if (step.start !== totalCountElements) {
              setStep({ start: step.start + 10, end: step.end + 10 });
            }
          }}
        >
          right
        </div>
      </div>
    </div>
  );
};
