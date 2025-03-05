import { Product } from "../../data/Products/Products";
import { FaCartPlus } from "react-icons/fa";

import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartReducer/cartSlice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addProduct({
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.topProductCard}>
        <img src={product.image} alt="" />
        <div className={styles.btnContainer}>
          <button onClick={handleAddToCart}>
            <FaCartPlus /> Add To Cart
          </button>
        </div>
      </div>
      <div className={styles.bottomProductCard}>
        <h1>{product.name}</h1>
        <p>R$: {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
