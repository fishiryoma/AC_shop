import StepProgress from "./StepProgress";
import { PaymentInfo } from "./PaymentInfo";
import ProgressControl from "./ProgressControl";
import styles from "./../../style/payment/payment.module.scss";
import { useState } from "react";

function Payment() {
  // 定義State，並用porps往下傳到三個地方:
  // 1. StepProgress, 2. PaymentInfo, 3. ProgressControl
  const [step, setStep] = useState(1);
  // 藉由按鈕修改step
  const editPaymentPage = (number) => setStep(step + number);
  return (
    <section className="payment">
      <div className={styles.container}>
        <StepProgress step={step} />
        <PaymentInfo step={step} />
        <ProgressControl onClick={editPaymentPage} step={step} />
      </div>
    </section>
  );
}

export default Payment;
