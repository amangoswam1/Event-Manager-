import Head from 'next/head';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import BASE_URL from '../constants';

export const getServerSideProps = async () => {
  return {
    props: {
      data: [
        {
          id: 1,
          eventName: "Birthday Party",
          description: "Make your birthday unforgettable 🎉",
          link: "/birthdayParty"
        },
        {
          id: 2,
          eventName: "Anniversary",
          description: "Celebrate love and memories ❤️",
          link: "/anniversary"
        }
      ]
    }
  };
};

const HomePage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Event Planner</title>
        <meta name="description" content="Plan and manage your events بسهولة" />
      </Head>

      <Navbar appName="Eventify" />

      <main className={styles.mainContainer}>
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Plan Your Perfect Event 🎉
          </h1>

          <p className={styles.heroSubtitle}>
            Discover, organize and manage events effortlessly — all in one place.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>
              Explore Events
            </button>

            <button className={styles.secondaryBtn}>
              Create Event
            </button>
          </div>
        </section>

        {/* EVENTS SECTION */}
        <section className={styles.eventsSection}>
          <h2 className={styles.sectionTitle}>
            Explore Events
          </h2>

          <div className={styles.cardContainer}>
            {data && data.length > 0 ? (
              data.map((eventType) => {
                const {
                  id,
                  eventName,
                  description,
                  link,
                } = eventType;

                return (
                  <EventCard
                    key={id}
                    eventName={eventName}
                    description={description}
                    link={link}
                  />
                );
              })
            ) : (
              <p className={styles.loading}>Loading events...</p>
            )}
          </div>
        </section>

      </main>
    </>
  );
};

export default HomePage;