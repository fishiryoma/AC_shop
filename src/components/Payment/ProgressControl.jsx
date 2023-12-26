import styles from "./../../style/payment/progressControl.module.scss";

function ProgressControl({ onClick, step }) {
  // 接收目前的step & 控制按鈕的函數props
  const handleClick = (e) => {
    onClick(e);
  };
  // 上一步按鈕
  const previousBtn = () => {
    if (step !== 1) {
      return (
        <a className={styles.lastStep} name="previous">
          &larr; 上一步
        </a>
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
      <div className={styles.btnGroup} onClick={handleClick}>
        {previousBtn()}
        <a className={styles.nextStep} name="next">
          {nextMsg()} &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProgressControl;
