import React from 'react';
import styles from './Details.module.css';

export default function Details() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>Детали</div>
      <h2 className={styles.title}>Расписание и стоимость</h2>
      <div className={styles.row}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>🕒 Расписание</div>
          <div className={styles.scheduleItem}>
            <div>
              <div className={styles.scheduleName}>Группа 4–5 класс</div>
              <div className={styles.scheduleDay}>Четверг</div>
            </div>
            <div className={styles.scheduleTime}>15:00 МСК</div>
          </div>
          <div className={styles.scheduleItem}>
            <div>
              <div className={styles.scheduleName}>Группа 6–8 класс</div>
              <div className={styles.scheduleDay}>Пятница</div>
            </div>
            <div className={styles.scheduleTime}>15:30 МСК</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>💳 Стоимость</div>
          <div className={styles.priceBig}>12 000 ₽</div>
          <div className={styles.priceLabel}>Полный курс · 10 уроков</div>
          <div className={styles.priceAlt}>
            Или по абонементу: <strong>1 300 ₽ / урок</strong>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>💻 Что нужно</div>
          <ul className={styles.reqList}>
            <li>Компьютер или ноутбук</li>
            <li>Наушники с микрофоном</li>
            <li>Стабильный интернет</li>
            <li>Zoom (бесплатно)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
