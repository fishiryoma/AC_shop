import styles from "./../../style/payment/progressControl.module.scss";

function ProgressControl() {
  return (
    <div>
      <hr></hr>
      <div className={styles.btnGroup}>
        <a className={styles.lastStep}>&larr; 上一步</a>
        <a href="#" className={styles.nextStep}>
          下一步 &rarr;
        </a>
      </div>
    </div>
  );
}

export default ProgressControl;
