import styles from "./../../style/payment/step.module.scss";

function Step({ stepNumber, stepDescription }) {
  return (
    <div className={styles.stepBox}>
      <p className={styles.stepNumber}>{stepNumber}</p>
      <p className={styles.stepDescription}>{stepDescription}</p>
    </div>
  );
}

export default Step;

export function StepLine() {
  return <p className={styles.line}></p>;
}
