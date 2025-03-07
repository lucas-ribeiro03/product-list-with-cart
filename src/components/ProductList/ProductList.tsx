import { products } from "../../data/Products/Products";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./style.module.scss";

interface ProductListProps {
  logUser: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({ logUser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        {products.map((product) => (
          <ProductCard
            isLoggedUser={logUser ? true : false}
            key={product.name}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
