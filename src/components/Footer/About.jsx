import styles from "./../../style/footer/about.module.scss";

function About({ title, list }) {
  const lists = list.map((list, index) => <li key={index}>{list}</li>);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.listwrap}>{lists}</ul>
    </div>
  );
}

export default About;
