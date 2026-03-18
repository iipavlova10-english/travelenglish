import React from 'react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <div className={styles.section} id="enroll">
      <div className={styles.inner}>
        <div className={styles.limit}>⚡ Максимум 6 детей в группе</div>
        <h2 className={styles.title}>
          Следующее путешествие —<br />
          <span className={styles.accent}>без страха и с английским</span>
        </h2>
        <p className={styles.desc}>
          Места ограничены. Запишитесь сейчас — и уже в этом отпуске ваш ребёнок
          заговорит по-английски уверенно и без стресса.
        </p>
        <a href="#" className={styles.btn}>
          <span>✈</span> Записаться на курс
        </a>
      </div>
    </div>
  );
}
