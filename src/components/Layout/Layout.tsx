import { type ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export function Layout({ sidebar, content }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.content}>{content}</main>
    </div>
  );
}
