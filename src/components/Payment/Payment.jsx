import StepProgress from "./StepProgress";
import { DeliveryAddress } from "./PaymentInfo";
import ProgressControl from "./ProgressControl";
import styles from "./../../style/payment/payment.module.scss";

function Payment() {
  return (
    <div className={styles.container}>
      <StepProgress />
      <DeliveryAddress />
      <ProgressControl />
    </div>
  );
}

export default Payment;
