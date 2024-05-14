import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgerAPI } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
	const [productList, setProductList] = useState([]);
	const localData = localStorage.getItem("@MYCART");
	const [count, setCount] = useState(
		JSON.parse(localData) ? JSON.parse(localData).length : 0
	);
	const [cartList, setCartList] = useState(
		localData ? JSON.parse(localData) : []
	);
	const [showCart, setShowCart] = useState(false);

	const getBurgers = async () => {
		const { data } = await burgerAPI.get("/products");
		setProductList(data);
	};

	useEffect(() => {
		getBurgers();
	}, []);

	useEffect(() => {
		localStorage.setItem("@MYCART", JSON.stringify(cartList));
	}, [cartList]);

	const notify = () =>
		toast.error("Item já adicionado ao carrinho!", {
			position: "bottom-center",
			autoClose: 1500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	return (
		<>
			<Header setShowCart={setShowCart} count={count} />
			<main>
				<ProductList
					productList={productList}
					cartList={cartList}
					setCartList={setCartList}
					setShowCart={setShowCart}
					setCount={setCount}
					count={count}
					notify={notify}
				/>
				{showCart ? (
					<CartModal
						cartList={cartList}
						setCartList={setCartList}
						setShowCart={setShowCart}
						setCount={setCount}
						count={count}
					/>
				) : null}
				<ToastContainer
					position="bottom-center"
					autoClose={1000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</main>
		</>
	);
};
