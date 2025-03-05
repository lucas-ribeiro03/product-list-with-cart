import { products } from "../../data/Products/Products";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./style.module.scss";

export const ProductList: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};
