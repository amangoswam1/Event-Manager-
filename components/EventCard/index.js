import Link from 'next/link';
import styles from './eventCard.module.css';

const EventCard = ({ eventName, description, link }) => (
  <div className={styles.card}>
    <Link href={link}>
      <div className={styles.eventCardContent}>
        <h1 className={styles.title}>
          {eventName}
        </h1>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </Link>
  </div>
);

export default EventCard;
