import React from 'react';
import styles from './Program.module.css';

const lessons = [
  { num: 'Урок 1', title: 'Аэропорт без стресса', desc: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.', outcome: 'Уверенность уже в первые часы за границей' },
  { num: 'Урок 2', title: 'В отеле: заселение и помощь', desc: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.', outcome: 'Практика вежливых фраз и повседневной лексики' },
  { num: 'Урок 3', title: 'Кафе и рестораны', desc: 'Заказ еды, вопросы про аллергены, счёт и чаевые.', outcome: 'Гастрономический словарь и уверенность в общении' },
  { num: 'Урок 4', title: 'На улице: ориентирование', desc: 'Как спросить дорогу, вызвать такси или найти аптеку.', outcome: 'Понимание устной речи в реальных ситуациях' },
  { num: 'Урок 5', title: 'Экстренные случаи', desc: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.', outcome: 'Важные фразы, которые могут спасти отпуск' },
  { num: 'Уроки 6–8', title: 'Туризм и развлечения', desc: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.', outcome: 'Погружение в культурный контекст через язык' },
  { num: 'Урок 9', title: 'Дружба в путешествиях', desc: 'Как познакомиться с другими детьми или подростками за границей.', outcome: 'Игровая практика диалогов и неформального общения' },
  { num: 'Урок 10 · Финал', title: '«Мой идеальный отпуск»', desc: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.', outcome: 'Уровень A2–B1 (Pre-Intermediate) по окончании курса', isFinal: true },
];

export default function Program() {
  return (
    <section className={styles.section} id="program">
      <div className={styles.label}>Программа</div>
      <h2 className={styles.title}>10 уроков —<br />10 реальных ситуаций</h2>
      <div className={styles.grid}>
        {lessons.map((l) => (
          <div key={l.num} className={`${styles.card} ${l.isFinal ? styles.final : ''}`}>
            <div className={`${styles.num} ${l.isFinal ? styles.numFinal : ''}`}>{l.num}</div>
            <div className={styles.cardTitle}>{l.title}</div>
            <div className={styles.desc}>{l.desc}</div>
            <div className={`${styles.outcome} ${l.isFinal ? styles.outcomeFinal : ''}`}>{l.outcome}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
