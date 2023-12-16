import StepProgress from "./StepProgress";
import { DeliveryAddress } from "./PaymentInfo";
import ProgressControl from "./ProgressControl";
import styles from "./../../style/payment/payment.module.scss";

function Payment() {
  return (
    <section className="payment">
      <div className={styles.container}>
        <StepProgress />
        <DeliveryAddress />
        <ProgressControl />
      </div>
    </section>
  );
}

export default Payment;
