import styles from "./../../style/footer/about.module.scss";

function About({ title, list }) {
  const lists = list.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.listwrap}>{lists}</ul>
    </div>
  );
}

export default About;
