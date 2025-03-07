import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./styles/global.module.scss";
import { ProductList } from "./components/ProductList/ProductList";
import { Modal } from "./components/ConfirmationModal/Modal";
import { Cart } from "./components/Cart/Cart";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedUser, setIsLoggedUser] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className={styles.global}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div style={{ gridArea: "box1" }} className={styles.navbar}>
                    <Navbar logUser={isLoggedUser ? true : false} />
                  </div>
                  <div
                    style={{ gridArea: "box2" }}
                    className={styles.productList}
                  >
                    <ProductList />
                  </div>
                  <div style={{ gridArea: "box3" }} className={styles.cart}>
                    <Cart openModal={() => setIsModalOpen(true)} />
                  </div>

                  {isModalOpen && (
                    <Modal closeModal={() => setIsModalOpen(false)} />
                  )}
                </>
              }
            />
            <Route
              path="/login"
              element={<Login logUser={() => setIsLoggedUser(true)} />}
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
