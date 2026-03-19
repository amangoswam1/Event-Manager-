import styles from './ProductCardsHolder.module.css';
import ProductCard from '../ProductCard/index';

const ProductCardsHolder = ({ title, data }) => (
  <div className={styles.mainContainer}>
    <h3 className={styles.title}>
      {title}
    </h3>
    <div className={styles.cardsHolder}>
      {data.map((product) => {
        const {
          id, productName, price, img, link,
        } = product;
        return (
          <ProductCard
            key={id}
            productName={productName}
            price={price}
            img={img}
            link={link}
          />
        );
      })}
    </div>
  </div>

);

export default ProductCardsHolder;
