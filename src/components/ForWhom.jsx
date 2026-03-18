import React from 'react';
import styles from './ForWhom.module.css';

const groups = [
  {
    num: 'Группа 1',
    title: '4–5 класс',
    desc: 'Четверг, 15:00 МСК — мягкий вход в мир путешествий через игры, ролевые сценки и мини-квесты.',
    icon: '🧒',
  },
  {
    num: 'Группа 2',
    title: '6–8 класс',
    desc: 'Пятница, 15:30 МСК — уверенная практика реальных ситуаций: отели, рестораны, экскурсии, новые знакомства.',
    icon: '🧑',
  },
];

export default function ForWhom() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Для кого</div>
        <h2 className={styles.title}>Два потока,<br />два возраста</h2>
        <div className={styles.grid}>
          {groups.map((g) => (
            <div key={g.num} className={styles.card}>
              <div className={styles.icon}>{g.icon}</div>
              <div className={styles.num}>{g.num}</div>
              <div className={styles.cardTitle}>{g.title}</div>
              <div className={styles.desc}>{g.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
