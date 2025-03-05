import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import { RootReducer } from "../../redux/root-reducer";
import { GiConfirmed } from "react-icons/gi";
import { clearCart } from "../../redux/CartReducer/cartSlice";

interface ModalProps {
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.CartReducer
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.mdTopContainer}>
          <GiConfirmed />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food</p>
        </div>

        <div className={styles.orderInfo}>
          {cart.map((orderItem) => (
            <div key={orderItem.name} className={styles.orderItem}>
              <div className={styles.itemBox}>
                <img
                  style={{ gridArea: "box-1" }}
                  src={orderItem.image}
                  alt=""
                />
                <strong style={{ gridArea: "box-2" }}>{orderItem.name}</strong>
                <span style={{ gridArea: "box-3" }}>1x</span>
                <span style={{ gridArea: "box-4" }}>
                  {orderItem.price.toFixed(2)}
                </span>
              </div>
              <div className={styles.orderPrice}>
                <strong className={styles.price}>
                  ${orderItem.price.toFixed(2)}
                </strong>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orderTotal}>
          <p>Order Total:</p>
          <strong>
            ${cart.reduce((total, item) => (total += item.price), 0).toFixed(2)}
          </strong>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              dispatch(clearCart());
              closeModal();
            }}
          >
            Start new Order
          </button>
        </div>
      </div>
    </div>
  );
};
