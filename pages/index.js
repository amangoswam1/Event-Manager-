import Head from 'next/head';
import EventCard from '../components/EventCard/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import BASE_URL from '../constants';

export const getServerSideProps = async () => {
  const response = await fetch(`${BASE_URL}/eventData`);
  const data = await response.json();

  return { props: { data } };
};

const HomePage = ({ data }) => (
  <div className={styles.mainContainer}>
    <Head>
      <title>Home page</title>
    </Head>
    <Navbar appName="Event Planner" page="" />
    <div className={styles.mainTitle}>
      Welcome to Event Planner!📝
    </div>
    <div className={styles.description}>
      We help you organize awesome events! Find everything you want for your event to rock.
      Start Exploring!
    </div>
    <div className={styles.cardContainer}>
      {data ? data.map((eventType) => {
        const {
          id, eventName, description, link,
        } = eventType;
        return (
          <EventCard
            key={id}
            eventName={eventName}
            description={description}
            link={link}
          />
        );
      }) : 'Loading...'}
    </div>
  </div>
);
export default HomePage;
