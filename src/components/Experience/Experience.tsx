import { useState } from 'react';
import { useExperienceData } from '../../hooks/useSiteData';
import styles from './Experience.module.css';

export function Experience() {
  const { companies } = useExperienceData();
  const [activeTab, setActiveTab] = useState(0);
  const active = companies[activeTab];

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>02.</span> Experience
        <span className={styles.line} />
      </h2>
      <div className={styles.tabContainer}>
        <div className={styles.tabList} role="tablist">
          {companies.map((c, i) => (
            <button
              key={c.company}
              className={`${styles.tab} ${i === activeTab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
              role="tab"
              aria-selected={i === activeTab}
            >
              {c.company}
            </button>
          ))}
          <div
            className={styles.tabHighlight}
            style={{ transform: `translateY(${activeTab * 42}px)` }}
          />
        </div>
        <div className={styles.tabPanel} role="tabpanel">
          <h3 className={styles.jobTitle}>
            {active.title} <span className={styles.company}>@ {active.company}</span>
          </h3>
          <p className={styles.period}>{active.period}</p>
          <ul className={styles.descriptionList}>
            {active.descriptions.map((desc, i) => (
              <li key={i} className={styles.descriptionItem}>{desc}</li>
            ))}
          </ul>
          <div className={styles.skills}>
            {active.skills.map((skill) => (
              <span key={skill} className={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
