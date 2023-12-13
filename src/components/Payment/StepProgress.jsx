import Step, { StepLine } from "./Step";
import styles from "./../../style/stepProgess.module.scss";

function StepProgress() {
  return (
    <div>
      <p className={styles.title}>結帳</p>
      <div className={styles.stepWrap}>
        <Step stepNumber={1} stepDescription="寄送地址" />
        <StepLine />
        <Step stepNumber={2} stepDescription="運送方式" />
        <StepLine />
        <Step stepNumber={3} stepDescription="付款資訊" />
      </div>
    </div>
  );
}

export default StepProgress;
