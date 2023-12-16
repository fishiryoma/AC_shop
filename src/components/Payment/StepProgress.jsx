import Step, { StepLine } from "./Step";
import styles from "./../../style/payment/stepProgess.module.scss";

function StepProgress() {
  return (
    <div>
      <div className={styles.step_wrap}>
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
