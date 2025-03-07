import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { Product } from "../../data/Products/Products";
import { FaCartPlus } from "react-icons/fa";
import styles from "./style.module.scss";
import { addProduct } from "../../redux/CartReducer/cartSlice";

interface ProductCardProps {
  product: Product;
  isLoggedUser: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isLoggedUser,
}) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    if (isLoggedUser) {
      dispatch(
        addProduct({
          name: product.name,
          price: product.price,
          image: product.image,
        })
      );
    } else {
      toast.warning("You must be looged to add items to cart");
      return;
    }
  }

  return (
    <div className={styles.productCard}>
      <ToastContainer autoClose={1000} />
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
