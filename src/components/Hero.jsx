import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.stars} />
      <div className={styles.runway} />
      <div className={styles.badge}>✈ Набор открыт · 2025</div>
      <h1 className={styles.h1}>
        Английский для<br />
        <span className={styles.accent}>путешествий</span>
      </h1>
      <p className={styles.subtitle}>
        Мечтаете, чтобы ваш ребёнок свободно общался за границей — от заказа кофе до
        поиска утраченного чемодана? Этот курс научит реальному разговорному английскому.
      </p>
      <div className={styles.cta}>
        <a href="#enroll" className={styles.btnPrimary}>Записаться на курс ✈</a>
        <a href="#program" className={styles.btnGhost}>Программа курса</a>
      </div>
    </div>
  );
}
