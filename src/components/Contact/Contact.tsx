import { useContactData } from '../../hooks/useSiteData';
import styles from './Contact.module.css';

export function Contact() {
  const { heading, message, email, buttonText } = useContactData();

  return (
    <section id="contact" className={styles.section}>
      <p className={styles.number}>04. What's Next?</p>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.message}>{message}</p>
      <a href={`mailto:${email}`} className={styles.button}>
        {buttonText}
      </a>
    </section>
  );
}
