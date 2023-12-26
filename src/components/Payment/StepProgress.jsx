import Step from "./Step";
import styles from "./../../style/payment/stepProgess.module.scss";

// 儲存Bar變數
const barText = [
  { number: 1, text: "寄送地址" },
  { number: 2, text: "運送方式" },
  { number: 3, text: "付款資訊" },
];

function StepProgress({ step }) {
  // 以map產生Bar清單
  const stepComponenet = barText.map((el) => {
    return (
      <Step
        key={el.number}
        stepNumber={el.number}
        stepDescription={el.text}
        step={step}
      />
    );
  });

  return (
    <div>
      <div className={styles.step_wrap}>{stepComponenet}</div>
    </div>
  );
}

export default StepProgress;
