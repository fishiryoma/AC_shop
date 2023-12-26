import styles from "./../../style/payment/step.module.scss";

function Step({ stepNumber, stepDescription, step }) {
  // 接收目前step及每個bar的數字跟文字描述
  const showLine = () => {
    // 第三個element不用連接線
    if (stepNumber !== 3) {
      return <p className={styles.stepline}></p>;
    } else return;
  };
  // 定義bar的數字
  let showNumber;
  const status = () => {
    showNumber = stepNumber;
    if (step === stepNumber) return "active";
    if (step > stepNumber) {
      // 若是已完成，則顯示打勾
      showNumber = String.fromCodePoint(10003);
      return "finished";
    }
    if (step < stepNumber) return "unchecked";
  };

  return (
    <div
      className={`${styles.stepBox}
    ${styles[status()]}
    `}
    >
      <p className={styles.stepNumber}>{showNumber}</p>
      <p className={styles.stepDescription}>{stepDescription}</p>
      {showLine()}
    </div>
  );
}

export default Step;
