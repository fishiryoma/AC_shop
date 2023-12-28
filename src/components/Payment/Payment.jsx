import StepProgress from "./StepProgress";
import { PaymentInfo } from "./PaymentInfo";
import styles from "./../../style/payment/payment.module.scss";
import { useState } from "react";

function Payment() {
  // 定義State，並用porps往下傳到三個地方:
  // 1. StepProgress, 2. PaymentInfo, 3. ProgressControl
  const [step, setStep] = useState(1);

  // 藉由按鈕修改step
  const editPaymentPage = (number) => {
    setStep(step + number);
  };
  // 測試用
  // function search(formData) {
  //   const query = formData.get("query");
  //   console.log(query);
  //   alert(`You searched for '${query}'`);
  // }
  return (
    <section className="payment">
      <div className={styles.container}>
        <StepProgress step={step} />
        <PaymentInfo step={step} onClick={editPaymentPage} />
      </div>
      {/* 測試用 */}
      {/* <form action={search}>
        <input name="query" />
        <button
          formAction={search}
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Search
        </button>
      </form> */}
    </section>
  );
}

export default Payment;
