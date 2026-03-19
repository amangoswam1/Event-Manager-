import Link from 'next/link';
import Image from 'next/image';
import styles from './productCard.module.css';

const ProductCard = ({
  productName, price, img, link,
}) => (
  <div className={styles.productCard}>
    <Link href={link}>
      <div className={styles.imageContainer}>
        <Image
          src={img}
          alt="image"
          width={120}
          height={120}
        />
        <h1 className={styles.productName}>
          {productName}
        </h1>
        <h1 className={styles.price}>
          Price:Rs.
          {' '}
          {price}
        </h1>
        <h1 className={styles.button}>
          Buy now
        </h1>
      </div>
    </Link>
  </div>
);

export default ProductCard;
