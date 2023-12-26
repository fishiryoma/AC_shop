import StepProgress from "./StepProgress";
import { PaymentInfo } from "./PaymentInfo";
import ProgressControl from "./ProgressControl";
import styles from "./../../style/payment/payment.module.scss";
import { useState } from "react";

function Payment() {
  // 定義State，並用porps往下傳到三個地方:
  // 1. StepProgress, 2. PaymentInfo, 3. ProgressControl
  const [step, setStep] = useState(1);

  // 以porps傳到ProgressControl來控制按鈕
  function handleClick(e) {
    if (e.target.name === "next" && step < 3) {
      setStep(step + 1);
    }
    if (e.target.name === "previous" && step > 1) {
      setStep(step - 1);
    }
    return;
  }

  return (
    <section className="payment">
      <div className={styles.container}>
        <StepProgress step={step} />
        <PaymentInfo step={step} />
        <ProgressControl onClick={handleClick} step={step} />
      </div>
    </section>
  );
}

export default Payment;
