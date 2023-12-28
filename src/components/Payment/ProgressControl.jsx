import { useContext } from "react";
import CartContext from "../../cartContext";
import styles from "./../../style/payment/progressControl.module.scss";

function ProgressControl({ onClick, step }) {
  const { showCardinfo } = useContext(CartContext);
  // 上一步按鈕
  const previousBtn = () => {
    if (step !== 1) {
      return (
        <button
          className={styles.lastStep}
          onClick={(e) => {
            e.preventDefault();
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

  function handleClick(e) {
    e.preventDefault();
    if (step < 3) onClick(1);
    if (step === 3) showCardinfo();
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        {previousBtn()}
        <button type="submit" className={styles.nextStep} onClick={handleClick}>
          {nextMsg()} &rarr;
        </button>
      </div>
    </div>
  );
}

export default ProgressControl;
