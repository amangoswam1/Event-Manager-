import Head from 'next/head';
import { useState, useEffect } from 'react';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import BASE_URL from '../constants';

const BirthdayPartyPage = () => {
  const [cakeData, setCakeData] = useState();
  const [decorationData, setDecorationData] = useState();
  const [returnGiftData, setReturnGiftData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/cakeData`)
      .then((res) => res.json())
      .then((data) => {
        setCakeData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/decorationData`)
      .then((res) => res.json())
      .then((data) => {
        setDecorationData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/returnGiftData`)
      .then((res) => res.json())
      .then((data) => {
        setReturnGiftData(data);
      });
  }, []);

  return (
    <div className={styles.mainContainerContent}>
      <Head>
        <title>
          Birthday
        </title>
      </Head>
      <Navbar appName="Event Planner" page="Birthday" />
      {cakeData ? <ProductCardsHolder title="Birthday Cakes" data={cakeData} /> : 'Loading...'}
      {decorationData && <ProductCardsHolder title="Birthday Decoration" data={decorationData} />}
      {returnGiftData && <ProductCardsHolder title="Return Gift" data={returnGiftData} />}
    </div>
  );
};

export default BirthdayPartyPage;
