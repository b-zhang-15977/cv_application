import styles from "../styles/Experience.module.css";

export default function Experience({ info }) {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.experienceList}>
        {info.map((job, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h3 className={styles.role}>{job.role}</h3>
              <span className={styles.date}>{job.date}</span>
            </div>

            <p className={styles.company}>{job.company}</p>

            <ul className={styles.details}>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
