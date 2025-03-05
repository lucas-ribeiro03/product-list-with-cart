import { Provider } from "react-redux";
import { ProductList } from "./components/ProductList/ProductList";
import styles from "./styles/global.module.scss";
import { store } from "./redux/store";
import { useState } from "react";
import { Modal } from "./components/ConfirmationModal/Modal";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Provider store={store}>
        <div className={styles.global}>
          <ProductList />
          <Cart openModal={() => setIsModalOpen(true)} />
        </div>

        {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
      </Provider>
    </>
  );
}

export default App;
