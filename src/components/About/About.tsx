import { useAboutData } from '../../hooks/useSiteData';
import styles from './About.module.css';

export function About() {
  const { paragraphs, skills } = useAboutData();

  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>01.</span> About Me
        <span className={styles.line} />
      </h2>
      <div className={styles.content}>
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>{p}</p>
        ))}
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skill}>
              <span className={styles.skillArrow}>▹</span> {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
