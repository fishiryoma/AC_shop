import styles from "./../../style/payment/progressControl.module.scss";

function ProgressControl({ onClick, step }) {
  // 上一步按鈕
  const previousBtn = () => {
    if (step !== 1) {
      return (
        <button
          className={styles.lastStep}
          onClick={() => {
            if (step > 1) onClick(-1);
          }}
        >
          &larr; 上一步
        </button>
      );
    }
    return;
  };
  // 下一步按鈕
  const nextMsg = () => {
    if (step === 3) {
      return "確認下單";
    }
    return "下一步";
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        {previousBtn()}
        <button
          className={styles.nextStep}
          onClick={() => {
            if (step < 3) onClick(1);
          }}
        >
          {nextMsg()} &rarr;
        </button>
      </div>
    </div>
  );
}

export default ProgressControl;
