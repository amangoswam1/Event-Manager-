import Head from 'next/head';
import { useState, useEffect } from 'react';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import BASE_URL from '../constants';

const SuccessPartyPage = () => {
  const [cakeData, setCakeData] = useState();
  const [snackData, setSnackData] = useState();
  const [drinksData, setDrinksData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/anniversaryCakes`)
      .then((res) => res.json())
      .then((data) => {
        setCakeData(data);
      });
  }, []);

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
        <title>
          Success Party
        </title>
      </Head>
      <Navbar appName="Event Planner" page="Success Party" />
      {cakeData ? <ProductCardsHolder title="Cakes" data={cakeData} /> : 'Loading...'}
      {drinksData && <ProductCardsHolder title="Beverages" data={drinksData} />}
      {snackData && <ProductCardsHolder title="Snacks" data={snackData} />}
    </div>
  );
};

export default SuccessPartyPage;
