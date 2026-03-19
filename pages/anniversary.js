import Head from 'next/head';
import { useState, useEffect } from 'react';
import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Navbar from '../components/Navbar/index';
import styles from '../styles/Home.module.css';
import BASE_URL from '../constants';

const anniversaryPage = () => {
  const [cakeData, setCakeData] = useState();
  const [decorationData, setDecorationData] = useState();
  const [snackData, setSnackData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/anniversaryCakes`)
      .then((res) => res.json())
      .then((data) => {
        setCakeData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/anniversaryDecoration`)
      .then((res) => res.json())
      .then((data) => {
        setDecorationData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/snacks`)
      .then((res) => res.json())
      .then((data) => {
        setSnackData(data);
      });
  }, []);

  return (
    <div className={styles.mainContainerContent}>
      <Head>
        <title>Anniversary</title>
      </Head>
      <Navbar appName="Event Planner" page="Anniversary" />
      {cakeData ? <ProductCardsHolder title="Anniversary Cakes" data={cakeData} /> : 'Loading...'}
      {decorationData && <ProductCardsHolder title="Decorations" data={decorationData} />}
      {snackData && <ProductCardsHolder title="Snacks" data={snackData} />}
    </div>
  );
};

export default anniversaryPage;
