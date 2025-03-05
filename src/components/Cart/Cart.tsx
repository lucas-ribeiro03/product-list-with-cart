import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import styles from "./style.module.scss";
import { MdDeleteForever } from "react-icons/md";
import { removeProduct } from "../../redux/CartReducer/cartSlice";

interface CartProps {
  openModal: () => void;
}

export const Cart: React.FC<CartProps> = ({ openModal }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.CartReducer
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartTitle}>
        <h2>Your Cart ({cart.length})</h2>
        <div className={styles.items}>
          {cart.map((cartItem) => (
            <div key={cartItem.name} className={styles.itemOnCart}>
              <div className={styles.itemInfo}>
                <p>{cartItem.name.toUpperCase()}</p>
                <strong>${cartItem.price.toFixed(2)}</strong>
              </div>
              <div className={styles.deleteFromCartBtn}>
                <MdDeleteForever
                  onClick={() => {
                    dispatch(
                      removeProduct({
                        name: cartItem.name,
                      })
                    );
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div className={styles.bottomCart}>
          <h3>
            Total:
            {cart
              .reduce((total, item) => (total += item.price), 0)
              .toFixed(2)}{" "}
          </h3>
          <button onClick={openModal}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};
