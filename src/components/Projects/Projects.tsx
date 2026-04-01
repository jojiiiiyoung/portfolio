import { useProjectsData } from '../../hooks/useSiteData';
import styles from './Projects.module.css';

export function Projects() {
  const { featured, other } = useProjectsData();

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>03.</span> Projects
        <span className={styles.line} />
      </h2>

      <div className={styles.featured}>
        {featured.map((project, i) => (
          <div key={project.title} className={`${styles.featuredItem} ${i % 2 !== 0 ? styles.reverse : ''} ${!project.image ? styles.featuredNoImage : ''}`}>
            {project.image && (
              <div className={styles.featuredImage}>
                {project.mediaType === 'video' ? (
                  <video src={project.image} autoPlay muted playsInline loop className={styles.media} />
                ) : (
                  <img src={project.image} alt={project.title} className={styles.media} />
                )}
                <div className={styles.imageOverlay} />
              </div>
            )}
            <div className={styles.featuredContent}>
              <p className={styles.featuredLabel}>Featured Project</p>
              <h3 className={styles.featuredTitle}>{project.title}</h3>
              <div className={styles.featuredDescription}>
                <p>{project.description}</p>
              </div>
              <div className={styles.featuredSkills}>
                {project.skills.map((s) => (
                  <span key={s} className={styles.featuredSkill}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.otherHeading}>Other Projects</h3>
      <div className={styles.otherGrid}>
        {other.map((project) => (
          <div key={project.title} className={styles.otherCard}>
            <div className={styles.otherCardTop}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={styles.folderIcon}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
            </div>
            <h4 className={styles.otherTitle}>{project.title}</h4>
            <p className={styles.otherDescription}>{project.description}</p>
            <div className={styles.otherSkills}>
              {project.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
