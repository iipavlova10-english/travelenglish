import React from 'react';
import styles from './WhyUs.module.css';

const items = [
  { icon: '🗣️', text: 'Акцент на практическую живую речь, а не на грамматику ради грамматики' },
  { icon: '🌍', text: 'Все ситуации — из реальной жизни путешественника, проверены на практике' },
  { icon: '🎮', text: 'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты' },
  { icon: '🏆', text: 'Выход на уровень A2–B1 (Pre-Intermediate) за 10 уроков курса' },
];

export default function WhyUs() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Особенности</div>
        <h2 className={styles.title}>Почему этот<br />курс особенный?</h2>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
