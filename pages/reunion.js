import Head from 'next/head';
import { useState, useEffect } from 'react';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import BASE_URL from '../constants';

const reunionPage = () => {
  const [snackData, setSnackData] = useState();
  const [drinksData, setDrinksData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/snacks`)
      .then((res) => res.json())
      .then((data) => {
        setSnackData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/drinks`)
      .then((res) => res.json())
      .then((data) => {
        setDrinksData(data);
      });
  }, []);

  return (
    <div className={styles.mainContainerContent}>
      <Head>
        <title>Reunion</title>
      </Head>
      <Navbar appName="Event Planner" page="Reunion" />
      {drinksData ? <ProductCardsHolder title="Beverages" data={drinksData} /> : 'Loading...'}
      {snackData && <ProductCardsHolder title="Snacks" data={snackData} />}
    </div>
  );
};

export default reunionPage;
