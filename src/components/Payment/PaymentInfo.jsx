import styles from "./../../style/payment/paymentInfo.module.scss";

export function PaymentInfo({ step }) {
  if (step === 1) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>寄送地址</p>

        <form className={styles.form}>
          <div className={`${styles.inputGroup} ${styles.gender}`}>
            <label className={styles.inputLable} id="gender">
              稱謂
            </label>
            <div className={styles.selectContainer}>
              <select id="gender">
                <option value="mr" defaultValue>
                  先生
                </option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className={`${styles.inputGroup} ${styles.name}`}>
            <label className={styles.inputLabel} id="name">
              姓名
            </label>
            <input type="text" placeholder="請輸入姓名" id="name" />
          </div>

          <div className={`${styles.inputGroup} ${styles.phone}`}>
            <label className={styles.inputLabel} id="phone">
              電話
            </label>
            <input type="tel" placeholder="請輸入行動電話" id="phone" />
          </div>

          <div className={`${styles.inputGroup} ${styles.email}`}>
            <label className={styles.inputLabel} id="email">
              Email
            </label>
            <input type="email" placeholder="請輸入電子郵件" id="email" />
          </div>

          <div className={`${styles.inputGroup} ${styles.region}`}>
            <label className={styles.inputLabel} id="region">
              縣市
            </label>
            <div className={styles.selectContainer}>
              <select id="region" required>
                <option value="">請選擇縣市</option>
                <option value="KLU">基隆市</option>
                <option value="TPH">新北市</option>
                <option value="TPE">臺北市</option>
                <option value="TYC">桃園市</option>
                <option value="HSH">新竹縣</option>
                <option value="HSC">新竹市</option>
                <option value="MAC">苗栗市</option>
                <option value="MAL">苗栗縣</option>
                <option value="TXG">臺中市</option>
                <option value="CWH">彰化縣</option>
                <option value="CWS">彰化市</option>
                <option value="NTC">南投市</option>
                <option value="NTO">南投縣</option>
                <option value="YLH">雲林縣</option>
                <option value="CHY">嘉義縣</option>
                <option value="CYI">嘉義市</option>
                <option value="TNN">臺南市</option>
                <option value="KHH">高雄市</option>
                <option value="IUH">屏東縣</option>
                <option value="PTS">屏東市</option>
                <option value="ILN">宜蘭縣</option>
                <option value="ILC">宜蘭市</option>
                <option value="HWA">花蓮縣</option>
                <option value="HWC">花蓮市</option>
                <option value="TTC">臺東市</option>
                <option value="TTT">臺東縣</option>
                <option value="PEH">澎湖縣</option>
                <option value="KMN">金門縣</option>
                <option value="LNN">連江縣</option>
              </select>
            </div>
          </div>

          <div className={`${styles.inputGroup} ${styles.address}`}>
            <label className={styles.inputLabel} id="address">
              地址
            </label>
            <input type="text" placeholder="請輸入地址" id="address" />
          </div>
        </form>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>運送方式</p>
        <form className={styles.form}>
          <div className={`${styles.inputGroup} ${styles.deliver}`}>
            <label className={styles.deliver_label}>
              <div className={styles.deliver_text}>
                <input type="radio" name="shipping" />
                <div className={styles.deliver_time}>
                  <p className={styles.deliver_title}>標準運送</p>
                  <p>約3~7個工作天</p>
                </div>
                <p className={styles.deliver_price}>免費</p>
              </div>
            </label>
            <label className={styles.deliver_label}>
              <div className={styles.deliver_text}>
                <input type="radio" name="shipping" />
                <div className={styles.deliver_time}>
                  <p className={styles.deliver_title}>DHL貨運</p>
                  <p>48小時內送達</p>
                </div>
                <p className={styles.deliver_price}>$500</p>
              </div>
            </label>
          </div>
        </form>
      </div>
    );
  }
  if (step === 3) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>付款資訊</p>
        <form className={styles.form}>
          <div className={`${styles.inputGroup} ${styles.card_name}`}>
            <label className={styles.inputLabel} id="card-name">
              持卡人姓名
            </label>
            <input type="text" placeholder="John De" id="card-name" />
          </div>
          <div className={`${styles.inputGroup} ${styles.card_number}`}>
            <label className={styles.inputLabel} id="card-number">
              卡號
            </label>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              id="card-number"
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.card_validdate}`}>
            <label className={styles.inputLabel} id="card-validdate">
              有效期限
            </label>
            <input type="text" placeholder="MM/YY" id="card-validdate" />
          </div>
          <div className={`${styles.inputGroup} ${styles.CVC_number}`}>
            <label className={styles.inputLabel} id="cvc-number">
              CVC/CCV
            </label>
            <input type="text" placeholder="123" id="name" />
          </div>
        </form>
      </div>
    );
  }
}
